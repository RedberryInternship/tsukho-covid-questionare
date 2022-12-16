import { Layout } from '~/components';
import useQuery from '~/helpers/hooks/useQuery';

const SecondPage = () => {
  const startingPoint = useQuery();

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
          <div
            className={`absolute ${
              startingPoint === 'forward'
                ? 'animate-red-move'
                : 'animate-red-move-backward'
            } bg-lime-350 opacity-70 `}
          />
        </div>
      </div>
    </Layout>
  );
};

export default SecondPage;
