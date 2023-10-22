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
      console.log('Delete request successful', response.data);
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
