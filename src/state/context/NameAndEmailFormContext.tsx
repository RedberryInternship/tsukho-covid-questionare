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

const isNameAndEmailFilledStorage =
  localStorage.getItem('covidStateForm') !== null
    ? JSON.parse(localStorage.getItem('isNameAndEmailFilled')!)
    : false;
export const NameAndEmailFormProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isNameAndEmailFilled, setIsNameAndEmailFilled] = useState<boolean>(
    isNameAndEmailFilledStorage
  );
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

  useEffect(() => {
    localStorage.setItem(
      'isNameAndEmailFilled',
      JSON.stringify(isNameAndEmailFilled)
    );
  }, [isNameAndEmailFilled]);

  return (
    <NameAndEmailFormContext.Provider
      value={{
        nameAndEmailFormInputs,
        changeNameAndEmailFormData,
        isNameAndEmailFilled,
        setIsNameAndEmailFilled,
      }}
    >
      {children}
    </NameAndEmailFormContext.Provider>
  );
};

export const useFirstFormContext = () => useContext(NameAndEmailFormContext);
