<?php

include '../../config/database.php';
include '.../../models/Product.php';

$objDB = new Database();
$conn = $objDB->connect();

// $productData = json_decode(file_get_contents('php://input'));

$product = new Product($conn);

$product->create();
