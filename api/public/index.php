<?php


error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");


include '../config/database.php';
include '../models/Product.php';
$objDB = new Database();
$conn = $objDB->connect();


$product = new Product($conn);

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case 'POST':
        $product->create($product);
        break;
}

echo "Hello World!";
