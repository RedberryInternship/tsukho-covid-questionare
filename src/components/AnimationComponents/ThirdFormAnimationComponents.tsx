import { useQuery } from '~/helpers';

const ThirdFormAnimationComponents = () => {
  const startingPoint = useQuery();

  return (
    <div className='relative'>
      <img src='/assets/icons/doctor.png' alt='scan' className='mt-[11px]' />
      <img
        src='/assets/icons/large-star.png'
        alt='scan'
        className={`absolute opacity-0 ${
          startingPoint === 'forward'
            ? 'animate-moving-star animation-delay-100'
            : 'animate-moving-star-backward animation-delay-100'
        }`}
      />
      <img
        src='/assets/icons/heart.png'
        alt='scan'
        className={`absolute top-[5.5rem] left-[6rem] opacity-70 ${
          startingPoint === 'forward'
            ? 'hidden'
            : 'animate-moving-star-backward-heart'
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
