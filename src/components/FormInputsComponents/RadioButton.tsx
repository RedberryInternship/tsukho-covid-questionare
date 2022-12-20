import { Fragment } from 'react';
import { UseFormRegister } from 'react-hook-form';

const RadioButton = ({
  register,
  madeFor,
  value,
  buttonText,
}: {
  register: UseFormRegister<any>;
  madeFor: string;
  value: string;
  buttonText: string;
}) => {
  return (
    <Fragment>
      <input
        type='radio'
        {...register(madeFor, {
          required: true,
        })}
        id={value}
        value={value}
        className='mx-[19px] radio-button'
      />
      <label
        htmlFor={value}
        className='font-normal text-xl leading-6 text-neutral-850'
      >
        {buttonText}
      </label>
    </Fragment>
  );
};

export default RadioButton;
