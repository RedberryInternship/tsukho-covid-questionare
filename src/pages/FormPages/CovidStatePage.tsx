import {
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
    </Layout>
  );
};

export default CovidStatePage;
