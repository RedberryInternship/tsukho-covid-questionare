import { NameAndEmailFormInputsTypes } from '~/types/nameAndEmailForm';

export type NameAndEmailFormContextTypes = {
  nameAndEmailFormInputs: NameAndEmailFormInputsTypes;
  changeNameAndEmailFormData: (data: NameAndEmailFormInputsTypes) => void;
  isNameAndEmailFilled: boolean;
  setIsNameAndEmailFilled: React.Dispatch<React.SetStateAction<boolean>>;
};
