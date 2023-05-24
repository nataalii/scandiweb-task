const Layout = (props) => {
  return (
    <div className=' font-serif max-w-[1800px] w-[85%] m-auto my-10 flex flex-col relative'>
      {props.children}
      <div className=' flex flex-col text-center gap-4 max-w-[1800px] w-[85%] fixed bottom-0 pb-5 bg-white'>
        <hr className=' h-[2px] bg-black' />
        <h2 className=' text-lg'>Scandiweb Test assignment</h2>
      </div>
    </div>
  );
};

export default Layout;
