import { Layout } from '~/components';

const FirstPage = () => {
  return (
    <Layout page={1}>
      <div className='flex justify-between'>
        <div></div>
        <div className='relative'>
          <img
            src='/assets/icons/first-image.png'
            alt='scan'
            className='mt-[-92px]'
          />
          <div className='absolute animate-yellow-move bg-lime-350 opacity-70' />
        </div>
      </div>
    </Layout>
  );
};

export default FirstPage;
