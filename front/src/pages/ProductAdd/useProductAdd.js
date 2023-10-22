import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const useProductAdd = () => {
  const methods = useForm({ mode: 'all' });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await fetch(
        'https://scandiweb--natali.000webhostapp.com/products/create',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        if (error.message === 'Error: SKU should be unique!') {
          console.log(error.message);
          methods.setError('sku', {
            type: 'skuExists',
            message: 'SKU should be unique!',
          });
        }
      } else {
        navigate('/');
      }
    } catch (err) {
      console.error('Error submitting product:', err);
    }
  };

  return { methods, onSubmit };
};

export default useProductAdd;
