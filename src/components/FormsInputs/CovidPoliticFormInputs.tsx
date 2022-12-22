import { ErrorMessage } from '@hookform/error-message';
import { CovidPoliticRadioButton } from '~/components';
import useCovidPoliticFormInputs from '~/components/FormsInputs/FormInputsHooks/useCovidPoliticFormInputs';

const CovidPoliticFormInputs = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    saveCovidPoliticsInformation,
  } = useCovidPoliticFormInputs();

  return (
    <div className='w-[622px]'>
      <p className=' font-normal text-[22px] leading-[27px] text-neutral-850'>
        რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
        რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
        განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან
        გადმოსვლის.
        <br />
        <br />
        პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
        ყოველდღიური კომუნიკაციაც გაიშვიათდა.
      </p>
      <form className='mt-[44px]' onSubmit={handleSubmit(onSubmit)}>
        <label
          htmlFor='non_formal_meetings'
          className='font-bold leading-[27px] text-[22px] text-neutral-850 mb-[18px] '
        >
          რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები,
          სადაც ყველა სურვილისამებრ ჩაერთვება?*
        </label>
        <div className='flex items-center my-[20px] '>
          <CovidPoliticRadioButton
            register={register}
            madeFor={'non_formal_meetings'}
            value={'twice_a_week'}
            buttonText={'კვირაში ორჯერ'}
          />
        </div>
        <div className='flex items-center my-[20px] '>
          <CovidPoliticRadioButton
            register={register}
            madeFor={'non_formal_meetings'}
            value={'once_a_week'}
            buttonText={'კვირაში ერთხელ'}
          />
        </div>
        <div className='flex items-center my-[20px] '>
          <CovidPoliticRadioButton
            register={register}
            madeFor={'non_formal_meetings'}
            value={'once_in_a_two_weeks'}
            buttonText={'ორ კვირაში ერთხელ'}
          />
        </div>
        <div className='flex items-center mt-[20px] '>
          <CovidPoliticRadioButton
            register={register}
            madeFor={'non_formal_meetings'}
            value={'once_in_a_month'}
            buttonText={'თვეში ერთხელ'}
          />
        </div>
        <div className='font-normal text-xl leading-[19px] h-[19px] text-orange-650 mt-[15px] ml-[15px] mb-[28px]'>
          <ErrorMessage errors={errors} name='non_formal_meetings' />
        </div>

        <label
          htmlFor='number_of_days_from_office'
          className='font-bold leading-[27px] text-[22px] text-neutral-850 mb-[18px] '
        >
          კვირაში რამდენი დღე ისურვებდი ოფისიდან <br /> მუშაობას?*
        </label>
        <div className='flex items-center my-[20px]'>
          <CovidPoliticRadioButton
            register={register}
            madeFor={'number_of_days_from_office'}
            value={'1'}
            buttonText={'1'}
          />
        </div>
        <div className='flex items-center my-[20px]'>
          <CovidPoliticRadioButton
            register={register}
            madeFor={'number_of_days_from_office'}
            value={'2'}
            buttonText={'2'}
          />
        </div>
        <div className='flex items-center my-[20px]'>
          <CovidPoliticRadioButton
            register={register}
            madeFor={'number_of_days_from_office'}
            value={'3'}
            buttonText={'3'}
          />
        </div>
        <div className='flex items-center my-[20px]'>
          <CovidPoliticRadioButton
            register={register}
            madeFor={'number_of_days_from_office'}
            value={'4'}
            buttonText={'4'}
          />
        </div>
        <div className='flex items-center my-[20px]'>
          <CovidPoliticRadioButton
            register={register}
            madeFor={'number_of_days_from_office'}
            value={'5'}
            buttonText={'5'}
          />
        </div>
        <div className='flex items-center mt-[20px] '>
          <CovidPoliticRadioButton
            register={register}
            madeFor={'number_of_days_from_office'}
            value={'6'}
            buttonText={'6'}
          />
        </div>
        <div className='font-normal text-xl leading-[19px] h-[19px] text-orange-650 mt-[15px] ml-[15px] mb-[32px]'>
          <ErrorMessage errors={errors} name='number_of_days_from_office' />
        </div>

        <label
          htmlFor='what_about_meetings_in_live'
          className='font-bold leading-[27px] text-[22px] text-neutral-850 mb-[20px] '
        >
          რას ფიქრობ ფიზიკურ შეკრებებზე?
        </label>
        <textarea
          {...register('what_about_meetings_in_live')}
          onBlur={saveCovidPoliticsInformation}
          id='what_about_meetings_in_live'
          cols={30}
          rows={10}
          className='bg-white-150 w-[622px] h-[182px] border-[1px] border-neutral-850 mt-[20px] px-[15px] py-[10px] font-normal text-xl text-neutral-850 mb-[47px]'
        ></textarea>

        <label
          htmlFor='tell_us_your_opinion_about_us'
          className='font-bold leading-[27px] text-[22px] text-neutral-850 mb-[20px] '
        >
          რას ფიქრობ არსებულ გარემოზე: <br /> რა მოგწონს, რას დაამატებდი, რას
          შეცვლიდი?
        </label>
        <textarea
          {...register('tell_us_your_opinion_about_us')}
          id='tell_us_your_opinion_about_us'
          onBlur={saveCovidPoliticsInformation}
          cols={30}
          rows={10}
          className='bg-white-150 w-[622px] h-[182px] border-[1px] border-neutral-850 mt-[20px] px-[15px] py-[10px] font-normal text-xl text-neutral-850 '
        ></textarea>

        <div className='mt-[54px] flex justify-end items-center mb-[74px]'>
          <button
            type='submit'
            className='w-[180px] h-[56px] rounded-[42px] bg-cyan-750 text-lg text-white-100 leading-[22px]'
          >
            დასრულება
          </button>
        </div>
      </form>
    </div>
  );
};

export default CovidPoliticFormInputs;
