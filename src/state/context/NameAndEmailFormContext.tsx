import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  NameAndEmailFormContextTypes,
  NameAndEmailFormInputsTypes,
} from '~/types';

const NameAndEmailFormContext = createContext(
  {} as NameAndEmailFormContextTypes
);

const nameAndEmailFormStorage =
  localStorage.getItem('nameAndEmailFormStorage') !== null
    ? JSON.parse(localStorage.getItem('nameAndEmailFormStorage')!)
    : { first_name: '', last_name: '', email: '' };

export const NameAndEmailFormProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [nameAndEmailFormInputs, setNameAndEmailFormInputs] =
    useState<NameAndEmailFormInputsTypes>(nameAndEmailFormStorage);

  const changeNameAndEmailFormData = (data: NameAndEmailFormInputsTypes) => {
    setNameAndEmailFormInputs(data);
  };

  useEffect(() => {
    const timer = setTimeout(
      () =>
        localStorage.setItem(
          'nameAndEmailFormStorage',
          JSON.stringify(nameAndEmailFormInputs)
        ),
      400
    );

    return () => clearTimeout(timer);
  }, [nameAndEmailFormInputs]);

  return (
    <NameAndEmailFormContext.Provider
      value={{ nameAndEmailFormInputs, changeNameAndEmailFormData }}
    >
      {children}
    </NameAndEmailFormContext.Provider>
  );
};

export const useFirstFormContext = () => useContext(NameAndEmailFormContext);
