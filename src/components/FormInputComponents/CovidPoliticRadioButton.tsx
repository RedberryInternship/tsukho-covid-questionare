import React, { Fragment } from 'react';
import { CovidPoliticRadioButtonProps } from '~/types';

const CovidPoliticRadioButton: React.FC<CovidPoliticRadioButtonProps> = ({
  register,
  madeFor,
  value,
  buttonText,
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

export default CovidPoliticRadioButton;
