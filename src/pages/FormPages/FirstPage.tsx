import { ArrowRight, Layout } from '~/components';
import { Link } from 'react-router-dom';
import { useQuery } from '~/helpers';

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

      <div className='w-full flex justify-center'>
        <div className='w-[145px] flex justify-end'>
          <Link to='../form/second-page?starting-point=forward'>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default FirstPage;
