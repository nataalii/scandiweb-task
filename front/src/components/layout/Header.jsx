const Header = (props) => {
  return (
    <header className=' flex flex-col gap-3'>
      <div className='flex justify-between'>
        <h1 className=' text-3xl'>{props.title}</h1>
        <div className=' flex gap-10'>
          <button className='border-2 px-3 border-gray-300 shadow-lg text-xl hover:bg-slate-100'>
            {props.firstButton}
          </button>
          <button
            className=' border-2 px-3 border-gray-300 shadow-lg text-xl hover:bg-slate-100 '
            type='button'
            onClick={props?.massDelete}
          >
            {props.secButton}
          </button>
        </div>
      </div>
      <hr className='h-[2px] bg-black' />
    </header>
  );
};

export default Header;
