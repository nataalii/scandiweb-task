<?php

namespace app;

class Router
{
    public $getRoutes = [];
    public $postRoutes = [];
    protected $conn;
    protected $baseUrl;

    public function __construct($db)
    {
        $this->conn = $db;
        $this->baseUrl = "https://scandiweb-task-natali.herokuapp.com"; // Set the base URL here
    }

    public function get($url, $fn)
    {
        $this->getRoutes[$url] = $fn;
    }

    public function post($url, $fn)
    {
        $this->postRoutes[$url] = $fn;
    }

    public function resolve()
    {
        $method = strtolower($_SERVER['REQUEST_METHOD']);
        $url = $_SERVER['PATH_INFO'] ?? '/';
        $url = $this->baseUrl . $url; // Prepend the base URL to the requested path

        if ($method === 'get') {
            $fn = $this->getRoutes[$url] ?? null;
        } else {
            $fn = $this->postRoutes[$url] ?? null;
        }
        if (!$fn) {
            echo 'Page not found';
            exit;
        }
        echo call_user_func($fn, $this->conn);
    }
}
