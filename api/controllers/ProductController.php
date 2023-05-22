<?php

namespace app\controllers;

use app\models\Product;
use PDO;

class ProductController
{
    public static function index()
    {
        return "Hello there!";
    }

    public static function create($conn)
    {
        $product = new Product($conn);
        $productData = json_decode(file_get_contents('php://input'));
        return $product->create($productData);
    }

    public static function getAll($conn)
    {
        $sql = "SELECT * FROM products";
        $stmt = $conn->prepare($sql);
        $stmt->execute();

        $products = array();

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $products[] = $row;
        }

        return json_encode($products);
    }
}
