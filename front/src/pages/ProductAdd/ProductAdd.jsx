import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import TextInput from './components/TextInput/TextInput';
import TypeSwitcher from './components/TypeSwitcher/TypeSwitcher';
import { FormProvider } from 'react-hook-form';
import Header from '../../components/layout/Header';
import useProductAdd from './useProductAdd';

const ProductAdd = () => {
  const { methods, onSubmit } = useProductAdd();
  return (
    <Layout>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Header
            title='Product Add'
            firstButton='Save'
            secButton={<Link to={'/'}>Cancel</Link>}
          />
          <div className='max-w-[380px] w-[100%] flex flex-col gap-1 mt-5'>
            <TextInput label='SKU' name='sku' id='sku' />
            <TextInput label='Name' name='name' id='name' />
            <TextInput label='Price' name='price' id='price' type='number' />
            <TypeSwitcher />
          </div>
        </form>
      </FormProvider>
    </Layout>
  );
};

export default ProductAdd;
