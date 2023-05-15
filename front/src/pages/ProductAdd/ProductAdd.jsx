import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import TextInput from './components/TextInput/TextInput';
import TypeSwitcher from './components/TypeSwitcher/TypeSwitcher';
import { FormProvider, useForm } from 'react-hook-form';
import Header from '../../components/layout/Header';

const ProductAdd = () => {
  const methods = useForm({ mode: 'all' });
  const onSubmit = (data) => {
    console.log(data);
  };

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
            <TextInput name='SKU' id='sku' />
            <TextInput name='Name' id='name' />
            <TextInput name='Price' id='price' type='number' />
            <TypeSwitcher />
          </div>
        </form>
      </FormProvider>
    </Layout>
  );
};

export default ProductAdd;
