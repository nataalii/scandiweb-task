<?php

use app\config\Database;
use app\controllers\ProductController;
use app\Router;

require_once __DIR__.'/vendor/autoload.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

$database = new Database();
$conn = $database->connect();

$router = new Router($conn);

$router->get('/', [new ProductController(), 'index']);
$router->get('/products', [new ProductController(), 'show']);
$router->get('/products/create', [new ProductController(), 'create']);
$router->post('/products/create', [new ProductController(), 'create']);
$router->post('/products/delete', [new ProductController(), 'delete']);

$router->resolve();
