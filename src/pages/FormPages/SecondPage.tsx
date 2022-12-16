import { Layout } from '~/components';

const SecondPage = () => {
  return (
    <Layout page={2}>
      <div className='flex justify-between'>
        <div></div>
        <div className='relative'>
          <img
            src='/assets/icons/second-image.png'
            alt='scan'
            className='mt-[-73px]'
          />
          <div className='absolute animate-red-move bg-lime-350 opacity-70 ' />
        </div>
      </div>
    </Layout>
  );
};

export default SecondPage;
