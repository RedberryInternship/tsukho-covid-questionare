import { ArrowRight, FirstFormAnimationComponents, Layout } from '~/components';
import { Link } from 'react-router-dom';

const FirstPage = () => {
  return (
    <Layout page={1}>
      <div className='flex justify-between'>
        <div></div>
        <FirstFormAnimationComponents />
      </div>

      <div className='w-full flex justify-center'>
        <div className='w-[145px] flex justify-end'>
          <Link to='../form/second-page?starting-point=forward'>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default FirstPage;
