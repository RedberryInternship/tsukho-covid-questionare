import {
  Layout,
  IsVacinatedFormAnimationComponents,
  IsVacinatedFormInputs,
} from '~/components';

const IsVacinatedPage = () => {
  return (
    <Layout page={3}>
      <div className='flex justify-between'>
        <IsVacinatedFormInputs />
        <IsVacinatedFormAnimationComponents />
      </div>
    </Layout>
  );
};

export default IsVacinatedPage;
