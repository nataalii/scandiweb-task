import { useEffect, useState } from 'react';

const useProductList = () => {
  const [productList, setProductList] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        'https://scandiweb--natali.000webhostapp.com/products'
      );
      const data = await response.json();
      setProductList(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleCheckboxChange = (productId) => {
    const isSelected = selectedProducts.includes(productId);
    if (isSelected) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const handleMassDelete = async () => {
    try {
      const response = await fetch(
        'https://scandiweb--natali.000webhostapp.com/products/delete',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ selectedProducts }),
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSelectedProducts([]);
      fetchProducts();
    } catch (err) {
      console.error('Error handling mass delete:', err);
    }
  };

  return {
    productList,
    handleCheckboxChange,
    handleMassDelete,
    selectedProducts,
  };
};

export default useProductList;
