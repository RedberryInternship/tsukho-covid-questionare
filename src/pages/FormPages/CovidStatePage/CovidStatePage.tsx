import { Layout } from '~/components';
import { CovidStateFormAnimation, CovidStateFormInputs } from './components';

const CovidStatePage = () => {
  return (
    <Layout page={2}>
      <div className='flex justify-between'>
        <CovidStateFormInputs />
        <CovidStateFormAnimation />
      </div>
    </Layout>
  );
};

export default CovidStatePage;
