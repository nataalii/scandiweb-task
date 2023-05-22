import Layout from '../../components/layout/Layout';
import ProductItem from './components/ProductItem/ProductItem';
import Header from '../../components/layout/Header';
import { Link } from 'react-router-dom';
import useProductList from './useProductList';

const ProductList = () => {
  const { massDelete, productList } = useProductList();
  const products = productList?.map((product, id) => {
    return (
      <div key={id}>
        <ProductItem
          sku={product.sku}
          name={product.name}
          price={product.price}
          size={product.size}
        />
      </div>
    );
  });
  return (
    <Layout>
      <Header
        title='Product List'
        firstButton={<Link to={'/add-product'}>Add</Link>}
        secButton='Mass Delete'
        massDelete={() => massDelete()}
      />
      <div className=' flex gap-10 flex-wrap w-full py-5 '>{products}</div>
    </Layout>
  );
};

export default ProductList;
