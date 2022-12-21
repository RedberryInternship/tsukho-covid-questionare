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

export const IsVacinatedFormProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
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

  return (
    <IsVacinatedFormContext.Provider
      value={{ isVacinatedFormInputs, changeIsVacinatedFormData }}
    >
      {children}
    </IsVacinatedFormContext.Provider>
  );
};

export const useIsVacinatedFormContext = () =>
  useContext(IsVacinatedFormContext);
