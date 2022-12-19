import { Link } from 'react-router-dom';
import { ArrowLeft, FourthFormAnimationComponents, Layout } from '~/components';

const FourthPage = () => {
  return (
    <Layout page={4}>
      <div className='flex justify-between'>
        <div></div>
        <FourthFormAnimationComponents />
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
