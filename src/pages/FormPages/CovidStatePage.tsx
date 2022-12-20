import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Layout,
  CovidStateFormAnimationComponents,
  CovidStateFormInputs,
} from '~/components';

const CovidStatePage = () => {
  return (
    <Layout page={2}>
      <div className='flex justify-between'>
        <CovidStateFormInputs />
        <CovidStateFormAnimationComponents />
      </div>

      <div className='w-full flex justify-center'>
        <div className='w-[145px] flex justify-between '>
          <Link to={'../form/name-and-email?starting-point=backward'}>
            <ArrowLeft />
          </Link>
          <Link to={'../form/is-vacinated?starting-point=forward'}>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default CovidStatePage;
