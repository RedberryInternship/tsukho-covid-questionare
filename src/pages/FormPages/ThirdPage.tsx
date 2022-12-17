import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Layout,
  ThirdFormAnimationComponents,
} from '~/components';

const ThirdPage = () => {
  return (
    <Layout page={3}>
      <div className='flex justify-between'>
        <div></div>
        <ThirdFormAnimationComponents />
      </div>

      <div className='w-full flex justify-center'>
        <div className='w-[145px] flex justify-between '>
          <Link to={'../form/second-page?starting-point=backward'}>
            <ArrowLeft />
          </Link>
          <Link to={'../form/fourth-page?starting-point=forward'}>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default ThirdPage;
