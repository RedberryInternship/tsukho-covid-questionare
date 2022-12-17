import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Layout } from '~/components';

const ThirdPage = () => {
  return (
    <Layout page={3}>
      <div className='flex justify-between'>
        <div></div>
        <div className='relative'>
          <img
            src='/assets/icons/doctor.png'
            alt='scan'
            className='mt-[11px]'
          />
          <img
            src='/assets/icons/large-star.png'
            alt='scan'
            className='absolute top-0 left-8 opacity-70'
          />
          <div className='absolute  bg-lime-350 opacity-70 ' />
        </div>
      </div>

      <div className='w-full flex justify-center'>
        <div className='w-[145px] flex justify-between '>
          <Link to={'../form/second-page?starting-point=backward'}>
            <ArrowLeft />
          </Link>
          <Link to={'../form/fourth-page?starting-point=forward'}>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ThirdPage;
