import { UseFormRegister } from 'react-hook-form';

export type CovidPoliticRadioButtonProps = {
  register: UseFormRegister<any>;
  madeFor: string;
  value: string;
  buttonText: string;
};
