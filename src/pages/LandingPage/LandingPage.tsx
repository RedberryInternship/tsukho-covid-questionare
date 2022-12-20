import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className='bg-white-150 h-screen flex flex-col items-center overflow-hidden'>
      <img
        src='/assets/icons/logo.png'
        alt='logo'
        className='mb-25 mt-[343px] animate-shrink-image w-[100px] h-[100px]'
      />
      <div className='overflow-y-hidden text-center h-20 relative w-60'>
        <Link
          to={'/form/name-and-email?starting-point=forward'}
          className='text-center text-3xl opacity-0 font-bold leading-9 text-neutral-850 relative animate-text-down text-shadow animation-delay-700'
        >
          კითხვარის <br />
          დაწყება
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
