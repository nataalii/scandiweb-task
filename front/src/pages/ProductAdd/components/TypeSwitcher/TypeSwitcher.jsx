import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import TextInput from '../TextInput/TextInput';

const TypeSwitcher = (props) => {
  const { register, formState } = useFormContext();
  const [type, setType] = useState('DVD');
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  return (
    <>
      <div>
        <div className=' flex justify-between'>
          <label htmlFor='productType'>Type Switcher</label>
          <select
            {...register('productType')}
            className='text-gray-500 outline-none px-3 py-1 rounded-lg border-[1px] border-black w-40 '
            onChange={handleTypeChange}
          >
            <option value='DVD'>DVD</option>
            <option value='Book'>Book</option>
            <option value='Furniture'>Furniture</option>
          </select>
        </div>
        <p className=' text-red-500 h-4 mb-1 '>
          {formState.errors[props.id]?.message}
        </p>
      </div>
      {type === 'DVD' && <TextInput name='Size (MB)' id='size' type='number' />}
      {type === 'Book' && (
        <TextInput name='Weight (KG)' id='weight' type='number' />
      )}
      {type === 'Furniture' && (
        <>
          <TextInput name='Height (CM)' id='height' type='number' />
          <TextInput name='width (CM)' id='width' type='number' />
          <TextInput name='Length (CM)' id='length' type='number' />
        </>
      )}
    </>
  );
};

export default TypeSwitcher;
