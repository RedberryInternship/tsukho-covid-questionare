import { useQuery } from '~/hooks';

const CovidStateFormAnimation = () => {
  const startingPoint = useQuery();

  return (
    <div className='relative w-[59.375rem] h-[54.188rem] mt-[1.563rem]'>
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
        className='mt-[-4.563rem] z-10 absolute'
      />
    </div>
  );
};

export default CovidStateFormAnimation;
