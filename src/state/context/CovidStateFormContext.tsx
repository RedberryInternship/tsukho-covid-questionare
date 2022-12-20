import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { CovidStateFormTypes } from '~/types';
import { CovidStateFormFormContextTypes } from '~/types/covidStateFormContextTypes';

const CovidStateFormContext = createContext(
  {} as CovidStateFormFormContextTypes
);

const covidStateFormStorage =
  localStorage.getItem('covidStateForm') !== null
    ? JSON.parse(localStorage.getItem('covidStateForm')!)
    : { had_covid: '' };

export const CovidStateFormProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [covidStateFormInputs, setCovidStateFormInputs] =
    useState<CovidStateFormTypes>(covidStateFormStorage);
  const changeCovidStateFormData = (data: CovidStateFormTypes) => {
    setCovidStateFormInputs(data);
  };

  useEffect(() => {
    const timer = setTimeout(
      () =>
        localStorage.setItem(
          'covidStateForm',
          JSON.stringify(covidStateFormInputs)
        ),
      400
    );

    return () => clearTimeout(timer);
  }, [covidStateFormInputs]);

  return (
    <CovidStateFormContext.Provider
      value={{ covidStateFormInputs, changeCovidStateFormData }}
    >
      {children}
    </CovidStateFormContext.Provider>
  );
};

export const useCovidStateFormContext = () => useContext(CovidStateFormContext);
