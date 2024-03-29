import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const useProductAdd = () => {
  const methods = useForm({ mode: 'all' });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      await axios.post(
        'https://scandiweb-task-natali-b495e4b0b1ac.herokuapp.com/products/create',
        data
      );
      navigate('/');
    } catch (err) {
      console.log(err);
      const error = err.response.data.message;
      if (error === 'Error: SKU should be unique!') {
        console.log(error);
        methods.setError('sku', {
          type: 'skuExists',
          message: 'SKU should be unique!',
        });
      }
    }
  };
  return { methods, onSubmit };
};

export default useProductAdd;
