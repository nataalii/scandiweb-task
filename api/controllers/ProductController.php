<?php

namespace app\controllers;

use app\models\Book;
use app\models\DVD;
use app\models\Furniture;

class ProductController
{
    public function index()
    {
        return "Hello there!";
    }

    public function show($conn)
    {

        $sql = "SELECT * FROM products";
        $products = $conn->prepare($sql);
        $products->execute();

        return json_encode($products->fetchAll());
    }

    public function model(string $modelName, $conn)
    {
        $model = 'app\\models\\' . $modelName;
        return new $model($conn);
    }

    public function create($conn)
    {
        $productData = json_decode(file_get_contents('php://input'));
        $product = $this->model(ucfirst($productData->productType), $conn);

        $product->setAttribute($productData);
        $product->create($productData);
    }

    public function delete($conn)
    {
        $productData = json_decode(file_get_contents('php://input'));
        $productIds = $productData->selectedProducts;

        foreach ($productIds as $productId) {
            $products = $conn->prepare("DELETE FROM products WHERE id = :id");
            $products->bindParam('id', $productId);
            $products->execute();
        }
    }

}
