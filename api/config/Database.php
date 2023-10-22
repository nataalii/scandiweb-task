<?php

namespace app\config;

use PDO;
use PDOException;

class Database
{
    private $server = 'ec2-34-242-199-141.eu-west-1.compute.amazonaws.com';
    private $dbname = 'd32g9kmqr45goc';
    private $user = 'tjqpqyzwpuyvpy';
    private $pass = 'cb1042aa93dce7acd7758d2f3d78d310ad955cebb78af4024507616585360ebe';
    private $port = 5432;

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
            $conn = new PDO('pgsql:host=' . $this->getServer() . ';port=' . $this->port . ';dbname=' . $this->getDbname(), $this->getUsername(), $this->getPassword());
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (PDOException $e) {
            echo 'Database Error: ' . $e->getMessage();
        }
    }
}