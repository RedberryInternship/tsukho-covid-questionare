const SuccessPage = () => {
  return (
    <div className='h-screen bg-neutral-850 flex justify-center items-center'>
      <div className='relative'>
        <img
          src='/assets/icons/star.png'
          alt='star'
          className='animate-star-one animation-delay-300 absolute opacity-0'
        />
        <h1 className='font-bold text-[64px] leading-[77px] text-white-100 text-success'>
          მადლობა
        </h1>
        <img
          src='/assets/icons/star.png'
          alt='star'
          className='scale-63 animate-star-two animation-delay-300 absolute opacity-0'
        />
      </div>
    </div>
  );
};

export default SuccessPage;
