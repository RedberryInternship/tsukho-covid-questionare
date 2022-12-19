import {
  FirstFormAnimationComponents,
  FirstFormInputs,
  Layout,
} from '~/components';

const FirstPage = () => {
  return (
    <Layout page={1}>
      <div className='flex justify-between'>
        <FirstFormInputs />
        <FirstFormAnimationComponents />
      </div>
    </Layout>
  );
};

export default FirstPage;
