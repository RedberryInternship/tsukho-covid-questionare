import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Layout } from '~/components';
import { useQuery } from '~/helpers';

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

      <div className='w-full flex justify-center'>
        <div className='w-[145px] flex justify-between '>
          <Link to={'../form/first-page?starting-point=backward'}>
            <ArrowLeft />
          </Link>
          <Link to={'../form/third-page?starting-point=forward'}>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default SecondPage;
