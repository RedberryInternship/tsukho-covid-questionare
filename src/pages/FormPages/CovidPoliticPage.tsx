import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  CovidPoliticFormAnimationComponents,
  CovidPoliticFormInputs,
  Layout,
} from '~/components';

const CovidPoliticPage = () => {
  return (
    <Layout page={4}>
      <div className='flex justify-between'>
        <CovidPoliticFormInputs />
        <CovidPoliticFormAnimationComponents />
      </div>
      <div className='w-full flex justify-center'>
        <div className='w-[145px] flex justify-between '>
          <Link to={'../form/is-vacinated?starting-point=backward'}>
            <ArrowLeft />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default CovidPoliticPage;
