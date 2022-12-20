import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  nameAndEmailFormContextTypes,
  nameAndEmailFormtypes,
} from '~/types/nameAndEmailFormContext';

const NameAndEmailFormContext = createContext(
  {} as nameAndEmailFormContextTypes
);

const firstFormStorage =
  localStorage.getItem('firstForm') !== null
    ? JSON.parse(localStorage.getItem('firstForm')!)
    : { first_name: '', last_name: '', email: '' };

export const NameAndEmailFormProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [firstFormInputs, setFirstFormInputs] =
    useState<nameAndEmailFormtypes>(firstFormStorage);

  const changeFirstFormData = (data: nameAndEmailFormtypes) => {
    setFirstFormInputs(data);
  };

  useEffect(() => {
    const timer = setTimeout(
      () => localStorage.setItem('firstForm', JSON.stringify(firstFormInputs)),
      400
    );

    return () => clearTimeout(timer);
  }, [firstFormInputs]);

  return (
    <NameAndEmailFormContext.Provider
      value={{ firstFormInputs, changeFirstFormData }}
    >
      {children}
    </NameAndEmailFormContext.Provider>
  );
};

export const useFirstFormContext = () => useContext(NameAndEmailFormContext);
