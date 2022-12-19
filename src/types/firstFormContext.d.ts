export type firstFormtypes = {
  first_name: string;
  last_name: string;
  email: string;
};

export type firstFormContextTypes = {
  firstFormInputs: firstFormtypes;
  changeFirstFormData: (data: firstFormtypes) => void;
};
