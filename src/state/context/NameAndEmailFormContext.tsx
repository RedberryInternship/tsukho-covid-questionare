import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  firstFormContextTypes,
  firstFormtypes,
} from '~/types/firstFormContext';

const NameAndEmailFormContext = createContext({} as firstFormContextTypes);

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
    useState<firstFormtypes>(firstFormStorage);

  const changeFirstFormData = (data: firstFormtypes) => {
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
