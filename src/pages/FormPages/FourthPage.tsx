import { Layout } from '~/components';

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
    </Layout>
  );
};

export default FourthPage;
