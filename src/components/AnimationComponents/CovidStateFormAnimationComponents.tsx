import { useQuery } from '~/helpers';

const CovidStateFormAnimationComponents = () => {
  const startingPoint = useQuery();

  return (
    <div className='relative w-[950px] h-[867px] '>
      <div
        className={`absolute ${
          startingPoint === 'forward'
            ? 'animate-red-move'
            : 'animate-red-move-backward'
        } bg-lime-350 opacity-70 z-[1]`}
      />
      <img
        src='/assets/icons/second-image.png'
        alt='scan'
        className='mt-[-73px] z-10 absolute'
      />
    </div>
  );
};

export default CovidStateFormAnimationComponents;
