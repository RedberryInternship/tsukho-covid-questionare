import { Link } from 'react-router-dom';
import { ArrowLeft, Layout } from '~/components';
import { CovidPoliticFormAnimation } from './components';
import { CovidPoliticFormInputs } from './components/CovidPoliticFormInputs';

const CovidPoliticPage = () => {
  return (
    <Layout page={4}>
      <div className='flex justify-between'>
        <CovidPoliticFormInputs />
        <CovidPoliticFormAnimation />
      </div>
      <div className='w-full flex justify-center mb-[50px]'>
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
