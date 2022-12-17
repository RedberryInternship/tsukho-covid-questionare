import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Layout,
  SecondFormAnimationComponents,
} from '~/components';

const SecondPage = () => {
  return (
    <Layout page={2}>
      <div className='flex justify-between'>
        <div></div>
        <SecondFormAnimationComponents />
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
