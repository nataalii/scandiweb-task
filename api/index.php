<?php

use app\config\Database;
use app\controllers\ProductController;
use app\Router;

require_once __DIR__.'/vendor/autoload.php';

error_reporting(E_ALL);
ini_set('display_errors', 1);
$allowedOrigins = array(
    'http://127.0.0.1:5173',
    'http://localhost:8080',
    'https://scandiweb-task-natali.netlify.app/',
    'https://scandiweb-natali.000webhostapp.com/',

);

if (isset($_SERVER['HTTP_ORIGIN']) && in_array($_SERVER['HTTP_ORIGIN'], $allowedOrigins)) {
    header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
}

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
        header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

    exit(0);
}


$database = new Database();
$conn = $database->connect();

$router = new Router($conn);

$router->get('/', [new ProductController(), 'index']);
$router->get('/products', [new ProductController(), 'show']);
$router->get('/products/create', [new ProductController(), 'create']);
$router->post('/products/create', [new ProductController(), 'create']);
$router->post('/products/delete', [new ProductController(), 'delete']);

$router->resolve();
