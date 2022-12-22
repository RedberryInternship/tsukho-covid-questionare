import { IsVacinatedFormTypes } from '~/types/isVacinatedFormInputs';

export type IsVacinatedContextTypes = {
  isVacinatedFormInputs: IsVacinatedFormTypes;
  changeIsVacinatedFormData: (data: IsVacinatedFormTypes) => void;
  isIsVacinatedFilled: boolean;
  setIsIsVacinatedFilled: React.Dispatch<React.SetStateAction<boolean>>;
};
