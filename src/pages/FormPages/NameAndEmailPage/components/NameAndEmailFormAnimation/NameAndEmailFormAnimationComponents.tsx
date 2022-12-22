import { useQuery } from '~/hooks';

const NameAndEmailFormAnimation = () => {
  const startingPoint = useQuery();

  return (
    <div className='relative'>
      <img
        src='/assets/icons/first-image.png'
        alt='scan'
        className='mt-[-92px]'
      />
      <div
        className={`absolute ${
          startingPoint === 'forward'
            ? 'animate-yellow-move'
            : 'animate-yellow-bakcward'
        } bg-lime-350 opacity-70`}
      />
    </div>
  );
};

export default NameAndEmailFormAnimation;
