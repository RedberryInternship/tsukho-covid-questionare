import { Layout } from '~/components';
import useQuery from '~/helpers/hooks/useQuery';

const FirstPage = () => {
  const startingPoint = useQuery();

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
          <div
            className={`absolute ${
              startingPoint === 'forward'
                ? 'animate-yellow-move'
                : 'animate-yellow-bakcward'
            } bg-lime-350 opacity-70`}
          />
        </div>
      </div>
    </Layout>
  );
};

export default FirstPage;
