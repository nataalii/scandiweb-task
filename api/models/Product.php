<?php

namespace app\models;

error_reporting(E_ALL);
ini_set('display_errors', 1);

abstract class Product
{
    protected $conn;
    protected $id;
    protected $sku;
    protected $name;
    protected $price;
    protected $productType;
    protected $attribute;
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

    public function create($product)
    {
        $isDuplicated = $this->checkDuplicateSku($product->sku);
        if ($isDuplicated) {
            http_response_code(400);
            $response = ['message' => 'Error: SKU should be unique!'];
            echo json_encode($response);
            return;
        }


        $this->sku = $product->sku;
        $this->name = $product->name;
        $this->price = $product->price;
        $this->productType = $product->productType;
        $this->created_at = $this->getCurrentDateTime();


        $sql = "INSERT INTO products (sku, name, price, productType, attribute, created_at) 
        VALUES (:sku, :name, :price, :productType, :attribute, :created_at)";
        $stmt = $this->conn->prepare($sql);

        // Bind the parameters
        $stmt->bindParam(':sku', $this->sku);
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':price', $this->price);
        $stmt->bindParam(':productType', $this->productType);
        $stmt->bindParam(':attribute', $this->attribute);
        $stmt->bindParam(':created_at', $this->created_at);

        // Execute the statement and check if the product was created successfully
        if ($stmt->execute()) {
            $response = ['message' => 'Product Created Successfully!'];
        } else {
            http_response_code(400);
            $response = ['message' => 'Failed to Create Product!'];
        }

        echo json_encode($response);
        return;
    }
}
