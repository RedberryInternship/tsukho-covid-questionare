import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { IsVacinatedFormTypes } from '~/types';
import { IsVacinatedContextTypes } from '~/types/isVacinatedContextTypes';

const IsVacinatedFormContext = createContext({} as IsVacinatedContextTypes);

const isVacinatedFormStorage =
  localStorage.getItem('isVacinatedForm') !== null
    ? JSON.parse(localStorage.getItem('isVacinatedForm')!)
    : { had_vaccine: '' };

const isIsVacinatedFilledStorage =
  localStorage.getItem('covidStateForm') !== null
    ? JSON.parse(localStorage.getItem('isIsVacinatedFilled')!)
    : false;

export const IsVacinatedFormProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isIsVacinatedFilled, setIsIsVacinatedFilled] = useState<boolean>(
    isIsVacinatedFilledStorage
  );

  const [isVacinatedFormInputs, setIsVacinatedFormInputs] =
    useState<IsVacinatedFormTypes>(isVacinatedFormStorage);
  const changeIsVacinatedFormData = (data: IsVacinatedFormTypes) => {
    setIsVacinatedFormInputs(data);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.removeItem('isVacinatedForm');
      localStorage.setItem(
        'isVacinatedForm',
        JSON.stringify(isVacinatedFormInputs)
      );
    }, 400);

    return () => clearTimeout(timer);
  }, [isVacinatedFormInputs]);

  useEffect(() => {
    localStorage.setItem(
      'isIsVacinatedFilled',
      JSON.stringify(isIsVacinatedFilled)
    );
  }, [isIsVacinatedFilled]);

  return (
    <IsVacinatedFormContext.Provider
      value={{
        isVacinatedFormInputs,
        changeIsVacinatedFormData,
        isIsVacinatedFilled,
        setIsIsVacinatedFilled,
      }}
    >
      {children}
    </IsVacinatedFormContext.Provider>
  );
};

export const useIsVacinatedFormContext = () =>
  useContext(IsVacinatedFormContext);
