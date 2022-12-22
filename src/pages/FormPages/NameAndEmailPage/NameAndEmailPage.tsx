import { Layout } from '~/components';
import {
  NameAndEmailFormAnimation,
  NameAndEmailFormInputs,
} from './components';

const NameAndEmailPage = () => {
  return (
    <Layout page={1}>
      <div className='flex justify-between'>
        <NameAndEmailFormInputs />
        <NameAndEmailFormAnimation />
      </div>
    </Layout>
  );
};

export default NameAndEmailPage;
