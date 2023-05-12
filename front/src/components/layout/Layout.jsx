const Layout = (props) => {
  return (
    <div className=' font-serif max-w-[1800px] w-[85%] m-auto my-10 flex flex-col relative'>
      <div className=' flex flex-col gap-3'>
        <div className='flex justify-between'>
          <h1 className=' text-3xl'>{props.title}</h1>
          <div className=' flex gap-10'>
            <button className=' border-2 px-3 border-gray-300 shadow-lg text-xl hover:bg-slate-100 '>
              {props.firstButton}
            </button>
            <button className=' border-2 px-3 border-gray-300 shadow-lg text-xl hover:bg-slate-100 '>
              {props.secButton}
            </button>
          </div>
        </div>
        <hr className='h-[2px] bg-black' />
      </div>

      {props.children}

      <div className=' flex flex-col text-center gap-4 max-w-[1800px] w-[85%] fixed bottom-6'>
        <hr className=' h-[2px] bg-black' />
        <h2 className=' text-lg'>Scandiweb Test assignment</h2>
      </div>
    </div>
  );
};

export default Layout;
