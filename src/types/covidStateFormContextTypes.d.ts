import { CovidStateFormTypes } from '~/types';

export type CovidStateFormFormContextTypes = {
  covidStateFormInputs: CovidStateFormTypes;
  changeCovidStateFormData: (data: CovidStateFormTypes) => void;
};
