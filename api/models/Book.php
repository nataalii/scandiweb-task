<?php

namespace app\models;

use app\models\Product;

class Book extends Product
{
    public function setAttribute($product)
    {
        $this->attribute = 'Weight: ' . $product->weight . ' KG';
    }
}
