import { useQuery } from '~/helpers';

const SecondFormAnimationComponents = () => {
  const startingPoint = useQuery();

  return (
    <div className='relative'>
      <img
        src='/assets/icons/second-image.png'
        alt='scan'
        className='mt-[-73px]'
      />
      <div
        className={`absolute ${
          startingPoint === 'forward'
            ? 'animate-red-move'
            : 'animate-red-move-backward'
        } bg-lime-350 opacity-70 `}
      />
    </div>
  );
};

export default SecondFormAnimationComponents;
