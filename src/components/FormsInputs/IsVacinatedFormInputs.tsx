import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useIsVacinatedFormInputs } from '~/components/FormsInputs/FormInputsHooks';
import { ArrowLeft, ArrowRight, ArrowRightDisabled } from '~/components/icons';

const IsVacinatedFormInputs = () => {
  const { userAnswers, register, handleSubmit, isValid, onSubmit } =
    useIsVacinatedFormInputs();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label
        htmlFor='had_vaccine'
        className='font-bold leading-[27px] text-[22px] text-neutral-850 mb-[18px] '
      >
        გაქვს გადატანილი Covid-19?*
      </label>
      <div className='flex items-center my-[20px] '>
        <input
          type='radio'
          {...register('had_vaccine', { required: true })}
          id='yes'
          value={'true'}
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
          {...register('had_vaccine', { required: true })}
          value={'false'}
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
      {userAnswers[0] === 'true' && (
        <Fragment>
          <label
            htmlFor='vaccination_stage'
            className='font-bold leading-[27px] text-[22px] text-neutral-850 mb-[18px] '
          >
            აირჩიე რა ეტაპზე ხარ*
          </label>
          <div className='flex items-center my-[20px] '>
            <input
              type='radio'
              {...register('vaccination_stage', { required: true })}
              id='first_dosage_and_registered_on_the_second'
              value={'first_dosage_and_registered_on_the_second'}
              className='mx-[19px] radio-button'
            />
            <label
              htmlFor='first_dosage_and_registered_on_the_second'
              className='font-normal text-xl leading-6 text-neutral-850'
            >
              პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
            </label>
          </div>
          <div className='flex items-center mb-[20px]'>
            <input
              type='radio'
              {...register('vaccination_stage', { required: true })}
              value={'fully_vaccinated'}
              id='fully_vaccinated'
              className='mx-[19px] radio-button'
            />
            <label
              htmlFor='fully_vaccinated'
              className='font-normal text-xl leading-6 text-neutral-850'
            >
              სრულად აცრილი ვარ
            </label>
          </div>
          <div className='flex items-center mb-[20px]'>
            <input
              type='radio'
              {...register('vaccination_stage', { required: true })}
              value={'first_dosage_and_not_registered_yet'}
              id='first_dosage_and_not_registered_yet'
              className='mx-[19px] radio-button'
            />
            <label
              htmlFor='first_dosage_and_not_registered_yet'
              className='font-normal text-xl leading-6 text-neutral-850'
            >
              პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
            </label>
          </div>
        </Fragment>
      )}

      {userAnswers[0] === 'false' && (
        <Fragment>
          <label
            htmlFor='i_am_waiting'
            className='font-bold leading-[27px] text-[22px] text-neutral-850 mb-[18px] '
          >
            რას ელოდები?*
          </label>
          <div className='flex items-center my-[20px] '>
            <input
              type='radio'
              {...register('i_am_waiting', { required: true })}
              id='registered_and_waiting'
              value={'registered_and_waiting'}
              className='mx-[19px] radio-button'
            />
            <label
              htmlFor='registered_and_waiting'
              className='font-normal text-xl leading-6 text-neutral-850'
            >
              დარეგისტრირებული ვარ და ველოდები რიცხვს
            </label>
          </div>
          <div className='flex items-center mb-[20px]'>
            <input
              type='radio'
              {...register('i_am_waiting', { required: true })}
              value={'not_planning'}
              id='not_planning'
              className='mx-[19px] radio-button'
            />
            <label
              htmlFor='not_planning'
              className='font-normal text-xl leading-6 text-neutral-850'
            >
              არ ვგეგმავ
            </label>
          </div>
          <div className='flex items-center mb-[20px]'>
            <input
              type='radio'
              {...register('i_am_waiting', { required: true })}
              value={'had_covid_and_planning_to_be_vaccinated'}
              id='had_covid_and_planning_to_be_vaccinated'
              className='mx-[19px] radio-button'
            />
            <label
              htmlFor='had_covid_and_planning_to_be_vaccinated'
              className='font-normal text-xl leading-6 text-neutral-850'
            >
              გადატანილი მაქვს და ვგეგმავ აცრას
            </label>
          </div>
        </Fragment>
      )}

      {userAnswers[1] === 'first_dosage_and_not_registered_yet' && (
        <div className='font-normal text-xl leading-6 text-neutral-850 mt-[51px] ml-[61px]'>
          რომ არ გადადო, <br /> ბარემ ახლავე დარეგისტრირდი
          <br />
          <a
            href='htts://booking.moh.gov.ge/'
            target='_blank'
            rel='noreferrer'
            className='text-cyan-650'
          >
            https://booking.moh.gov.ge/
          </a>
        </div>
      )}

      {userAnswers[2] === 'had_covid_and_planning_to_be_vaccinated' && (
        <div className='font-normal text-xl leading-6 text-neutral-850 mt-[51px] ml-[61px] w-[491px]'>
          ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის
          გაკეთება.
          <br />
          <br />
          👉 რეგისტრაციის ბმული
          <br />
          <a
            href='htts://booking.moh.gov.ge/'
            target='_blank'
            rel='noreferrer'
            className='text-cyan-650'
          >
            https://booking.moh.gov.ge/
          </a>
        </div>
      )}

      <div className='w-[145px] flex justify-between absolute bottom-[25px] left-[50%] translate-x-[-50%]'>
        <Link to={'../form/covid-state?starting-point=backward'}>
          <ArrowLeft />
        </Link>
        <button disabled={!isValid}>
          {isValid ? <ArrowRight /> : <ArrowRightDisabled />}
        </button>
      </div>
    </form>
  );
};

export default IsVacinatedFormInputs;
