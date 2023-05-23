<?php

namespace app\models;

use app\models\Product;

class DVD extends Product
{
    public function setAttribute($product)
    {
        $this->attribute = 'Size: ' . $product->size . ' MB';
    }
}
