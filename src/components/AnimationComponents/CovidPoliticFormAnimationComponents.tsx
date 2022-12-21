import { useQuery } from '~/helpers';

const CovidPoliticFormAnimationComponents = () => {
  const startingPoint = useQuery();

  return (
    <div className='fixed right-44'>
      <img src='/assets/icons/bike.png' alt='scan' className='mt-[21px]' />
      <img
        src='/assets/icons/large-star.png'
        alt='scan'
        className={`absolute opacity-0 ${
          startingPoint === 'forward'
            ? 'animate-moving-star-in-heart'
            : 'hidden'
        }`}
      />
      <div
        className={`${
          startingPoint === 'backward'
            ? 'animate-heart-background bg-neutral-850  w-[100px] h-[100px]'
            : 'hidden'
        }`}
      />
      <img
        src='/assets/icons/heart.png'
        alt='scan'
        className={`absolute top-[5.5rem] left-[6rem] opacity-70 ${
          startingPoint === 'forward'
            ? 'animate-heart-large-one'
            : 'animate-heart-large-two'
        }`}
      />
      <div className='absolute  bg-lime-350 opacity-70 ' />
    </div>
  );
};

export default CovidPoliticFormAnimationComponents;
