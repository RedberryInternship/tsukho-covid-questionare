import { LayoutProps } from '~/types';

const Layout = ({ children, page }: LayoutProps) => {
  return (
    <div className='bg-white-150 min-h-screen pt-[97px] pl-50 pr-50'>
      <div className='flex justify-between items-center pb-[23px] border-b-2 border-neutral-850'>
        <img src='/assets/icons/redberry-letter-logo.png' alt='logo' />
        <h1 className='font-bold text-neutral-850 text-[40px] leading-[40px]'>
          {page}/4
        </h1>
      </div>
      <div className='pt-[42px] min-h-[890px] flex flex-col justify-between'>
        {children}
      </div>
    </div>
  );
};

export default Layout;
