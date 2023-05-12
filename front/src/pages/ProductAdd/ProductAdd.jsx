import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';

const ProductAdd = () => {
  return (
    <Layout
      title='Product Add'
      firstButton='Save'
      secButton={<Link to={'/'}>Cancel</Link>}
    ></Layout>
  );
};

export default ProductAdd;
