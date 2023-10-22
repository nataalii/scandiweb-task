<?php

namespace app\config;

use PDO;
use PDOException;

class Database
{
    private $server = 'localhost';
    private $dbname = 'id21438687_products';
    private $user = 'id21438687_root';
    private $pass = 'Natali!1';


    public function getServer()
    {
        return $this->server;
    }

    public function getDbname(): string
    {
        return $this->dbname;
    }


    public function getUsername()
    {
        return $this->user;
    }

    public function getPassword()
    {
        return $this->pass;
    }

    public function connect()
    {
        try {
            $conn = new PDO('mysql:host=' . $this->getServer() . '; dbname=' . $this->getDbname(), $this->getUsername(), $this->getPassword());
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch(PDOException $e) {
            echo 'Database Error: ' . $e->getMessage();
        }
    }
}
