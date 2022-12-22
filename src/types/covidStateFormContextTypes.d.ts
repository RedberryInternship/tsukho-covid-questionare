import { CovidStateFormTypes } from '~/types';

export type CovidStateFormFormContextTypes = {
  covidStateFormInputs: CovidStateFormTypes;
  changeCovidStateFormData: (data: CovidStateFormTypes) => void;
  isCovidStateFilled: boolean;
  setIsCovidStateFilled: React.Dispatch<React.SetStateAction<boolean>>;
};
