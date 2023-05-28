<?php

namespace app\config;

use PDO;
use PDOException;

class Database
{
    private $server = 'localhost';
    private $dbname = 'scandiweb';
    private $user = 'root';
    private $pass = 'nanana';

    public function connect()
    {
        try {
            $conn = new PDO('mysql:host=' . $this->server . '; dbname=' . $this->dbname, $this->user, $this->pass);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch(PDOException $e) {
            echo 'Database Error: ' . $e->getMessage();
        }
    }
}
