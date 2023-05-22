<?php

namespace app\models;

error_reporting(E_ALL);
ini_set('display_errors', 1);

class Product
{
    protected $conn;
    protected $id;
    protected $sku;
    protected $name;
    protected $price;
    protected $productType;
    protected $size;
    protected $created_at;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    private function getCurrentDateTime()
    {
        return date('Y-m-d H:i:s');
    }

    private function checkDuplicateSku($sku)
    {
        $sql = "SELECT COUNT(*) FROM products WHERE sku = :sku";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindParam(':sku', $sku);
        $stmt->execute();
        $count = $stmt->fetchColumn();
        return $count > 0;
    }

    public function setValues($values)
    {
        $this->id = $values['id'] ?? null;
        $this->sku = $values['sku'] ?? null;
        $this->name = $values['name'] ?? null;
        $this->price = $values['price'] ?? null;
        $this->productType = $values['productType'] ?? null;
        $this->size = $values['size'] ?? null;
        $this->created_at = $values['created_at'] ?? null;
    }

    public function create($product)
    {
        $isDuplicated = $this->checkDuplicateSku($product->sku);
        if ($isDuplicated) {
            http_response_code(400);
            $response = ['message' => 'Error: SKU should be unique!'];
            echo json_encode($response);
        }

        // Set the values for the new product
        $this->setValues([
            'sku' => $product->sku,
            'name' => $product->name,
            'price' => $product->price,
            'productType' => $product->productType,
            'size' => $product->size,
            'created_at' => $this->getCurrentDateTime()
        ]);

        $sql = "INSERT INTO products (sku, name, price, productType, size, created_at) VALUES (:sku, :name, :price, :productType, :size, :created_at)";
        $stmt = $this->conn->prepare($sql);

        // Bind the parameters
        $stmt->bindParam(':sku', $this->sku);
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':price', $this->price);
        $stmt->bindParam(':productType', $this->productType);
        $stmt->bindParam(':size', $this->size);
        $stmt->bindParam(':created_at', $this->created_at);

        // Execute the statement and check if the product was created successfully
        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Product Created Successfully!'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to Create Product!'];
        }

        echo json_encode($response);
        return;
    }


}
