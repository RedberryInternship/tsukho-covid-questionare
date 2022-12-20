import { useForm } from 'react-hook-form';
import { RadioButton } from '~/components';

const CovidPoliticFormInputs = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data: any) => {
    console.log(data);
  };

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
          <RadioButton
            register={register}
            madeFor={'non_formal_meetings'}
            value={'twice_a_week'}
            buttonText={'კვირაში ორჯერ'}
          />
        </div>
        <div className='flex items-center my-[20px] '>
          <RadioButton
            register={register}
            madeFor={'non_formal_meetings'}
            value={'once_a_week'}
            buttonText={'კვირაში ერთხელ'}
          />
        </div>
        <div className='flex items-center my-[20px] '>
          <RadioButton
            register={register}
            madeFor={'non_formal_meetings'}
            value={'once_in_a_two_weeks'}
            buttonText={'ორ კვირაში ერთხელ'}
          />
        </div>
        <div className='flex items-center mt-[20px] mb-[47px] '>
          <RadioButton
            register={register}
            madeFor={'non_formal_meetings'}
            value={'once_in_a_month'}
            buttonText={'თვეში ერთხელ'}
          />
        </div>

        <label
          htmlFor='number_of_days_from_office'
          className='font-bold leading-[27px] text-[22px] text-neutral-850 mb-[18px] '
        >
          კვირაში რამდენი დღე ისურვებდი ოფისიდან <br /> მუშაობას?*
        </label>
        <div className='flex items-center my-[20px]'>
          <RadioButton
            register={register}
            madeFor={'number_of_days_from_office'}
            value={'1'}
            buttonText={'1'}
          />
        </div>
        <div className='flex items-center my-[20px]'>
          <RadioButton
            register={register}
            madeFor={'number_of_days_from_office'}
            value={'2'}
            buttonText={'2'}
          />
        </div>
        <div className='flex items-center my-[20px]'>
          <RadioButton
            register={register}
            madeFor={'number_of_days_from_office'}
            value={'3'}
            buttonText={'3'}
          />
        </div>
        <div className='flex items-center my-[20px]'>
          <RadioButton
            register={register}
            madeFor={'number_of_days_from_office'}
            value={'4'}
            buttonText={'4'}
          />
        </div>
        <div className='flex items-center my-[20px]'>
          <RadioButton
            register={register}
            madeFor={'number_of_days_from_office'}
            value={'5'}
            buttonText={'5'}
          />
        </div>
        <div className='flex items-center mt-[20px] mb-[51px]'>
          <RadioButton
            register={register}
            madeFor={'number_of_days_from_office'}
            value={'6'}
            buttonText={'6'}
          />
        </div>

        <label
          htmlFor='what_about_meetings_in_live'
          className='font-bold leading-[27px] text-[22px] text-neutral-850 mb-[20px] '
        >
          რას ფიქრობ ფიზიკურ შეკრებებზე?
        </label>

        <div className='mt-[54px] flex justify-end items-center mb-[74px]'>
          <button
            type='submit'
            disabled={!isValid}
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
