const ProductItem = () => {
  return (
    <div className=' w-[300px] h-[200px] flex flex-col items-center justify-center border-[1px] border-black relative'>
      <input
        type='checkbox'
        className='absolute top-3 left-3 w-5 h-5 rounded cursor-pointer'
      />
      <h1>SKU</h1>
      <h2>Name</h2>
      <h3>price $</h3>
      <p>specific attributes</p>
    </div>
  );
};

export default ProductItem;
