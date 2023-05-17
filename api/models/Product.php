<?php


error_reporting(E_ALL);
ini_set('display_errors', 1);


class Product
{
    protected $conn;
    protected $created_at;


    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function create()
    {
        $product = json_decode(file_get_contents('php://input'));

        // Check if SKU is duplicated
        $checkSql = "SELECT COUNT(*) FROM products WHERE sku = :sku";

        $checkStmt = $this->conn->prepare($checkSql);
        $checkStmt->bindParam(':sku', $product->sku);
        $checkStmt->execute();
        $isDuplicated = $checkStmt->fetchColumn();

        if ($isDuplicated) {
            $response = ['status' => 0, 'message' => 'Error: SKU should be unique!'];
            echo json_encode($response);
            return;
        }

        $sql = "INSERT INTO products (id, sku, name, price, productType, size, created_at) VALUES (null, :sku, :name, :price, :productType, :size, :created_at)";
        $stmt = $this->conn->prepare($sql);

        $stmt->bindParam(':sku', $product->sku);
        $stmt->bindParam(':name', $product->name);
        $stmt->bindParam(':price', $product->price);
        $stmt->bindParam(':productType', $product->productType);
        $stmt->bindParam(':size', $product->size);
        $stmt->bindParam(':created_at', $this->created_at);

        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Product Created Successfully!'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to Create Product!'];
        }
        echo json_encode($response);
        return;
    }

    public function delete($id)
    {
    }


}
