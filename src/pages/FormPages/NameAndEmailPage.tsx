import {
  NameAndEmailFormAnimationComponents,
  NameAndEmailFormInputs,
  Layout,
} from '~/components';

const NameAndEmailPage = () => {
  return (
    <Layout page={1}>
      <div className='flex justify-between'>
        <NameAndEmailFormInputs />
        <NameAndEmailFormAnimationComponents />
      </div>
    </Layout>
  );
};

export default NameAndEmailPage;
