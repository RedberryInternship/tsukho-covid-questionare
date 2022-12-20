import { useForm } from 'react-hook-form';

const CovidStateFormInputs = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
      <label
        htmlFor='had_covid'
        className='font-bold leading-[27px] text-[22px] text-neutral-850 mb-[18px]'
      >
        გაქვს გადატანილი Covid-19?*
      </label>
      <div className='flex items-center mb-[20px]'>
        <input
          type='radio'
          {...register('had_covid', { required: true })}
          id='yes'
          value={'yes'}
          className='mr-[19px] radio-button'
        />
        <label
          htmlFor='yes'
          className='font-normal text-xl leading-6 text-neutral-850'
        >
          კი
        </label>
      </div>
      <div className='flex items-center mb-[20px]'>
        <input
          type='radio'
          {...register('had_covid', { required: true })}
          value={'no'}
          id='no'
          className='mr-[19px] radio-button'
        />
        <label
          htmlFor='no'
          className='font-normal text-xl leading-6 text-neutral-850'
        >
          არა
        </label>
      </div>
      <div className='flex items-center mb-[20px]'>
        <input
          type='radio'
          {...register('had_covid', { required: true })}
          value={'have_right_now'}
          id='have_right_now'
          className='mr-[19px] radio-button '
        />
        <label
          htmlFor='have_right_now'
          className='font-normal text-xl leading-6 text-neutral-850 '
        >
          ახლა მაქვს
        </label>
      </div>
    </form>
  );
};

export default CovidStateFormInputs;
