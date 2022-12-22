import { Layout } from '~/components';
import { IsVacinatedFormAnimation, IsVacinatedFormInputs } from './components';

const IsVacinatedPage = () => {
  return (
    <Layout page={3}>
      <div className='flex justify-between'>
        <IsVacinatedFormInputs />
        <IsVacinatedFormAnimation />
      </div>
    </Layout>
  );
};

export default IsVacinatedPage;
