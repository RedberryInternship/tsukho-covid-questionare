import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { ArrowRight, ArrowRightDisabled } from '~/components';
import { useFirstFormContext } from '~/state';
import { firstFormInputs } from '~/types';

const FirstFormInputs = () => {
  const navigate = useNavigate();
  const { firstFormInputs, changeFirstFormData } = useFirstFormContext();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<firstFormInputs>({
    mode: 'onChange',
    defaultValues: firstFormInputs,
  });

  const onSubmit = (data: firstFormInputs) => {
    changeFirstFormData(data);
    navigate('../form/second-page?starting-point=forward');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
      <label
        htmlFor='first_name'
        className='font-bold leading-[27px] text-[22px] text-neutral-850 mb-[18px]'
      >
        სახელი*
      </label>
      <input
        type='text'
        {...register('first_name', {
          onChange: () => changeFirstFormData(getValues()),
          required: {
            value: true,
            message: 'ველი სავალდებულოა',
          },
          minLength: {
            value: 2,
            message: 'სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
          },
          maxLength: {
            value: 250,
            message: 'სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან',
          },
        })}
        className='border-[1px] bg-white-150 outline-none px-[20px] py-2.5 w-[513px] border-neutral-850 font-normal text-lg leading-[22px] h-[50px]'
        placeholder='სახელი'
      />
      {errors.first_name && (
        <p className='font-normal text-base leading-[19px] text-orange-650 mt-[5px] ml-[15px]'>
          {errors.first_name.message}
        </p>
      )}
      <label
        htmlFor='last_name'
        className='font-bold leading-[27px] text-[22px] text-neutral-850 mb-[18px] mt-[47px]'
      >
        გვარი*
      </label>
      <input
        type='text'
        {...register('last_name', {
          onChange: () => changeFirstFormData(getValues()),
          required: {
            value: true,
            message: 'ველი სავალდებულოა',
          },
          minLength: {
            value: 2,
            message: 'გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან',
          },
          maxLength: {
            value: 250,
            message: 'გვარის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან',
          },
        })}
        placeholder='გვარი'
        className='border-[1px] bg-white-150 outline-none px-[20px] py-2.5 w-[513px] border-neutral-850 font-normal text-lg leading-[22px] h-[50px]'
      />
      {errors.last_name && (
        <p className='font-normal text-base leading-[19px] text-orange-650 mt-[5px] ml-[15px]'>
          {errors.last_name.message}
        </p>
      )}
      <label
        htmlFor='email'
        className='font-bold leading-[27px] text-[22px] text-neutral-850 mb-[18px] mt-[47px]'
      >
        მეილი*
      </label>
      <input
        type='text'
        {...register('email', {
          onChange: () => changeFirstFormData(getValues()),
          required: {
            value: true,
            message: 'ველი სავალდებულოა',
          },
          validate: {
            endsWith: (value) =>
              value.endsWith('@redberry.ge') ||
              'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)',
          },
        })}
        placeholder='მეილი'
        className='border-[1px] bg-white-150 outline-none px-[20px] py-2.5 w-[513px] border-neutral-850 font-normal text-lg leading-[22px] h-[50px]'
      />
      {errors.email && (
        <p className='font-normal text-base leading-[19px] text-orange-650 mt-[5px] ml-[15px]'>
          {errors.email.message}
        </p>
      )}
      <div className='w-[145px] flex justify-end absolute bottom-[104px] left-[50%] translate-x-[-50%]'>
        <button disabled={!isValid}>
          {isValid ? <ArrowRight /> : <ArrowRightDisabled />}
        </button>
      </div>
    </form>
  );
};

export default FirstFormInputs;
