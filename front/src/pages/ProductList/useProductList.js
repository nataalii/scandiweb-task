import axios from 'axios';
import { useEffect, useState } from 'react';

const useProductList = () => {
  const massDelete = () => {
    console.log('delete');
  };
  const [productList, setProductList] = useState([]);

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

  return { massDelete, productList };
};

export default useProductList;
