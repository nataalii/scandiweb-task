import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import ProductForm from './components/ProductForm/ProductForm';

const ProductAdd = () => {
  return (
    <Layout
      title='Product Add'
      firstButton='Save'
      secButton={<Link to={'/'}>Cancel</Link>}
    >
      <ProductForm />
    </Layout>
  );
};

export default ProductAdd;
