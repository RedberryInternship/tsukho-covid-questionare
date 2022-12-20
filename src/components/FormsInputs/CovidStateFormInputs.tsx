import { Fragment } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { ArrowLeft, ArrowRight, ArrowRightDisabled } from '~/components/icons';
import { Link } from 'react-router-dom';
import { useCovidStateFormInputs } from '~/components/FormsInputs/FormInputsHooks';

const CovidStateFormInputs = () => {
  const { register, handleSubmit, errors, isValid, userAnswers, onSubmit } =
    useCovidStateFormInputs();

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
          className='mx-[19px] radio-button'
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
          className='mx-[19px] radio-button'
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
          className='mx-[19px] radio-button '
        />
        <label
          htmlFor='have_right_now'
          className='font-normal text-xl leading-6 text-neutral-850 '
        >
          ახლა მაქვს
        </label>
      </div>
      {userAnswers[0] === 'yes' && (
        <Fragment>
          <label
            htmlFor='had_antibody_test'
            className='font-bold leading-[27px] text-[22px] text-neutral-850 mb-[18px] mt-[26px]'
          >
            ანტისხეულების ტესტი გაქვს გაკეთებული?*
          </label>
          <div className='flex items-center mb-[20px]'>
            <input
              type='radio'
              {...register('had_antibody_test', { required: true })}
              id='yes'
              value={'yes'}
              className='mx-[19px] radio-button'
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
              {...register('had_antibody_test', { required: true })}
              value={'no'}
              id='no'
              className='mx-[19px] radio-button'
            />
            <label
              htmlFor='no'
              className='font-normal text-xl leading-6 text-neutral-850'
            >
              არა
            </label>
          </div>
        </Fragment>
      )}
      {userAnswers[1] === 'no' && (
        <Fragment>
          <label
            htmlFor='covid_sickness_date'
            className='font-bold leading-[27px] text-[22px] text-neutral-850 mb-[18px] mt-[26px] max-w-[570px]'
          >
            მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
          </label>
          <input
            type='text'
            {...register('covid_sickness_date', {
              required: {
                value: true,
                message: 'ველი სავალდებულოა',
              },
            })}
            onFocus={(e) => (e.target.type = 'date')}
            className='border-[1px] ml-[19px] bg-white-150 outline-none px-[20px] py-2.5 w-[513px] border-neutral-850 font-normal text-lg leading-[22px] h-[50px]'
            placeholder='დდ/თთ/წწ'
          />
          <div className='font-normal text-base leading-[19px] h-[19px] text-orange-650 mt-[5px] ml-[15px]'>
            <ErrorMessage errors={errors} name='covid_sickness_date' />
          </div>
        </Fragment>
      )}

      {userAnswers[1] === 'yes' && (
        <Fragment>
          <label
            htmlFor='antibodies'
            className='font-bold leading-[27px] text-[22px] text-neutral-850 mb-[18px] mt-[26px] max-w-[570px]'
          >
            თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
            რაოდენობა*
          </label>
          <input
            type='text'
            {...register('antibodies.test_date', {
              required: {
                value: true,
                message: 'ველი სავალდებულოა',
              },
            })}
            onFocus={(e) => (e.target.type = 'date')}
            className='border-[1px] ml-[19px] bg-white-150 outline-none px-[20px] py-2.5 w-[513px] border-neutral-850 font-normal text-lg leading-[22px] h-[50px]'
            placeholder='რიცხვი'
          />
          <div className='font-normal text-base leading-[19px] h-[19px] text-orange-650 mt-[5px] ml-[15px]'>
            <ErrorMessage errors={errors} name='antibodies.test_date' />
          </div>
          <input
            type='text'
            {...register('antibodies.number', {
              valueAsNumber: true,
              validate: {
                hasSpecialChar: (value) =>
                  /^[0-9]+$/.test(value!.toString()) || 'ველი სავალდებულოა',
              },
            })}
            className='border-[1px] ml-[19px] mt-[25px] bg-white-150 outline-none px-[20px] py-2.5 w-[513px] border-neutral-850 font-normal text-lg leading-[22px] h-[50px]'
            placeholder='ანტისხეულების რაოდენობა'
          />
          <div className='font-normal text-base leading-[19px] h-[19px] text-orange-650 mt-[5px] ml-[15px]'>
            <ErrorMessage errors={errors} name='antibodies.number' />
          </div>
        </Fragment>
      )}

      <div className='w-[145px] flex justify-between absolute bottom-[25px] left-[50%] translate-x-[-50%]'>
        <Link to={'../form/name-and-email?starting-point=backward'}>
          <ArrowLeft />
        </Link>
        <button disabled={!isValid}>
          {isValid ? <ArrowRight /> : <ArrowRightDisabled />}
        </button>
      </div>
    </form>
  );
};

export default CovidStateFormInputs;
