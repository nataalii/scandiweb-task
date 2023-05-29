<?php

namespace app;

class Router
{
    protected $routes = [];
    protected $conn;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function get($url, $fn)
    {
        $this->routes['GET'][$url] = $fn;
    }

    public function post($url, $fn)
    {
        $this->routes['POST'][$url] = $fn;
    }

    public function resolve()
    {
        $method = $_SERVER['REQUEST_METHOD'];
        $url = $_SERVER['REQUEST_URI'];
        $path = parse_url($url, PHP_URL_PATH);
        $route = $this->routes[$method][$path] ?? null;

        if (!$route) {
            echo 'Page not found';
            exit;
        }

        echo call_user_func($route, $this->conn);
    }
}
