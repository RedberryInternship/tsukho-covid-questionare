import { useQuery } from '~/helpers';

const ThirdFormAnimationComponents = () => {
  const startingPoint = useQuery();

  return (
    <div className='relative'>
      <img src='/assets/icons/doctor.png' alt='scan' className='mt-[11px]' />
      <img
        src='/assets/icons/large-star.png'
        alt='scan'
        className={`absolute ${
          startingPoint === 'forward'
            ? 'opacity-0 animate-moving-star animation-delay-100'
            : ''
        }`}
      />
      <div
        className={`absolute ${
          startingPoint === 'forward' ? 'animate-red-move-star' : 'hidden'
        }`}
      />
      <div className='absolute  bg-lime-350 opacity-70 ' />
    </div>
  );
};

export default ThirdFormAnimationComponents;
