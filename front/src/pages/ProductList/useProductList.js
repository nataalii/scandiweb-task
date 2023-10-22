import { useEffect, useState } from 'react';
import axiosInstance from '../../axios';

const useProductList = () => {
  const [productList, setProductList] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get('/products');
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
      const response = await axiosInstance.post('/products/delete', {
        selectedProducts,
      });

      setSelectedProducts([]);
      fetchProducts();
      console.log('Delete request successful', response.data); // Log successful response
    } catch (err) {
      if (err.response) {
        console.log('Error response status:', err.response.status);
        console.log('Error response data:', err.response.data);
      } else if (err.request) {
        console.log('No response received:', err.request);
      } else {
        console.log('Error occurred:', err.message);
      }
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
