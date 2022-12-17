import { Link } from 'react-router-dom';
import { ArrowLeft, Layout } from '~/components';

const FourthPage = () => {
  return (
    <Layout page={4}>
      <div className='flex justify-between'>
        <div></div>
        <div className='relative'>
          <img src='/assets/icons/bike.png' alt='scan' className='mt-[21px]' />
          <img
            src='/assets/icons/heart.png'
            alt='scan'
            className='absolute top-[5.5rem] left-[6rem] opacity-70'
          />
          <div className='absolute  bg-lime-350 opacity-70 ' />
        </div>
      </div>
      <div className='w-full flex justify-center'>
        <div className='w-[145px] flex justify-between '>
          <Link to={'../form/third-page?starting-point=backward'}>
            <ArrowLeft />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default FourthPage;
