import { IsVacinatedFormTypes } from '~/types/isVacinatedFormInputs';

export type IsVacinatedContextTypes = {
  isVacinatedFormInputs: IsVacinatedFormTypes;
  changeIsVacinatedFormData: (data: IsVacinatedFormTypes) => void;
};
