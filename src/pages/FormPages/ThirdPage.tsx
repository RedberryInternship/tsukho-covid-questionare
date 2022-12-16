import { Layout } from '~/components';

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
    </Layout>
  );
};

export default ThirdPage;
