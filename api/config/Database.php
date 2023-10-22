<?php

namespace app\config;

use PDO;
use PDOException;

class Database
{
    private $server = 'ec2-34-242-154-118.eu-west-1.compute.amazonaws.com';
    private $dbname = 'd3aqnarcjdau9k';
    private $user = 'cjlmqyorokvswn';
    private $pass = 'db0c8f0e3c2b890a463ba3e5b5a6fd78e09231196ba795204780b33b804ebc2c';


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
