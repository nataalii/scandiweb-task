import axios from 'axios';
import { useEffect, useState } from 'react';

const useProductList = () => {
  const [productList, setProductList] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/products');
      setProductList(response.data);
    } catch (error) {
      console.log(error);
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
      await axios.post('http://localhost:8080/products/delete', {
        selectedProducts,
      });

      setSelectedProducts([]);
      fetchProducts();
    } catch (err) {
      console.log(err);
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
