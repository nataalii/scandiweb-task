import Layout from '../../components/layout/Layout';
import ProductItem from './components/ProductItem/ProductItem';
import Header from '../../components/layout/Header';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const massDelete = () => {
    console.log('delete');
  };
  return (
    <Layout>
      <Header
        title='Product List'
        firstButton={<Link to={'/add-product'}>Add</Link>}
        secButton='Mass Delete'
        massDelete={() => massDelete()}
      />
      <div className=' flex gap-10 flex-wrap w-full py-5 '>
        <ProductItem />
        <ProductItem />
      </div>
    </Layout>
  );
};

export default ProductList;
