import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Layout,
  IsVacinatedFormAnimationComponents,
} from '~/components';

const IsVacinatedPage = () => {
  return (
    <Layout page={3}>
      <div className='flex justify-between'>
        <div></div>
        <IsVacinatedFormAnimationComponents />
      </div>

      <div className='w-full flex justify-center'>
        <div className='w-[145px] flex justify-between '>
          <Link to={'../form/covid-state?starting-point=backward'}>
            <ArrowLeft />
          </Link>
          <Link to={'../form/covid-politic?starting-point=forward'}>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default IsVacinatedPage;
