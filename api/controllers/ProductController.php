<?php

namespace app\controllers;

use app\models\Book;
use app\models\ConcreteProduct;
use app\models\DVD;
use app\models\Furniture;

class ProductController
{
    public static function index()
    {
        return "Hello there!";
    }

    public static function show($conn)
    {

        $sql = "SELECT * FROM products";
        $products = $conn->prepare($sql);
        $products->execute();

        return json_encode($products->fetchAll());
    }

    public static function create($conn)
    {
        $productData = json_decode(file_get_contents('php://input'));

        switch ($productData->productType) {
            case 'DVD':
                $product = new DVD($conn);
                break;
            case 'Book':
                $product = new Book($conn);
                break;
            case 'Furniture':
                $product = new Furniture($conn);
                break;
        }

        $product->setAttribute($productData);
        return $product->create($productData);
    }

}
