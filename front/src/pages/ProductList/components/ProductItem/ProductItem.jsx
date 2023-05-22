const ProductItem = (props) => {
  return (
    <div className=' w-[300px] h-[200px] flex flex-col items-center justify-center border-[1px] border-black relative'>
      <input
        type='checkbox'
        className='absolute top-3 left-3 w-5 h-5 rounded cursor-pointer'
      />
      <h1>{props.sku}</h1>
      <h2>{props.name}</h2>
      <h3>{props.price}</h3>
      <p>{props.size}</p>
    </div>
  );
};

export default ProductItem;
