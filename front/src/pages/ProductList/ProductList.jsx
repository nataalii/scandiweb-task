import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import ProductItem from './components/ProductItem/ProductItem';

const ProductList = () => {
  return (
    <Layout
      title='Product List'
      firstButton={<Link to={'/add'}>Add</Link>}
      secButton='Mass Delete'
    >
      <div className=' flex gap-10 flex-wrap w-full py-5 '>
        <ProductItem />
        <ProductItem />
      </div>
    </Layout>
  );
};

export default ProductList;
