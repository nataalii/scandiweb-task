import { useFormContext } from 'react-hook-form';
import { ValidationConfig } from '../../../../config/ValidationConfig';

const TextInput = (props) => {
  const { register, formState } = useFormContext();
  return (
    <>
      <div className={`flex gap-3 justify-between items-center`}>
        <label htmlFor={props.id} className='  text-sm'>
          {props.name}
        </label>
        <input
          {...register(props.id, ValidationConfig[props.id])}
          type={props.type ? props.type : 'text'}
          id={props.id}
          className={`  text-gray-500 outline-none w-72 px-3 py-1 rounded-lg border-[1px] border-black focus:border-red-500`}
        />
      </div>

      <p className=' text-red-500 h-4 mb-1 '>
        {formState.errors[props.id]?.message}
      </p>
    </>
  );
};

export default TextInput;
