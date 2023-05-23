<?php

namespace app\models;

use app\models\Product;

class Furniture extends Product
{
    public function setAttribute($product)
    {
        $this->attribute = 'Dimension: ' . $product->height . 'x' . $product->width . 'x' . $product->length;
    }
}
