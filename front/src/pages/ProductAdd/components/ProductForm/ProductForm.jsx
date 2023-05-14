import { FormProvider, useForm, Controller } from 'react-hook-form';
import TextInput from '../TextInput/TextInput';
import TypeSwitcher from '../TypeSwitcher/TypeSwitcher';

const ProductForm = (props) => {
  const methods = useForm({ mode: 'all' });

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(props.onSubmit)}>
          <div className='max-w-[380px] w-[100%] flex flex-col gap-1 mt-5'>
            <TextInput name='SKU' id='sku' />
            <TextInput name='Name' id='name' />
            <TextInput name='Price' id='price' type='number' />
            <TypeSwitcher />
            <Controller
              name='Save'
              control={methods.control}
              render={({ field: { ref, ...field } }) => (
                <div className='flex gap-10'>
                  <button
                    type='submit'
                    className='border-2 px-3 border-gray-300 shadow-lg text-xl hover:bg-slate-100'
                    ref={ref}
                    {...field}
                  >
                    Save
                  </button>
                </div>
              )}
            />
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default ProductForm;
