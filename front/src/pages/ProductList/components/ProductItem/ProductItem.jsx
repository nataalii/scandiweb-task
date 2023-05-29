const ProductItem = (props) => {
  const isSelected = props.selectedProducts.includes(props.id);

  return (
    <div className=' w-[280px] h-[200px] flex flex-col items-center justify-center border-[1px] border-black relative'>
      <input
        type='checkbox'
        id='delete-checkbox'
        className='absolute top-3 left-3 w-5 h-5 rounded cursor-pointer delete-checkbox'
        checked={isSelected}
        onChange={() => props.onCheckboxChange(props.id)}
      />
      <h1>{props.sku}</h1>
      <h2>{props.name}</h2>
      <h3>{props.price} $</h3>
      <p>{props.attribute}</p>
    </div>
  );
};

export default ProductItem;
