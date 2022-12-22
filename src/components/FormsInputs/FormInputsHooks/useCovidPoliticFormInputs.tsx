import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import instance from '~/services/axios';
import {
  useCovidStateFormContext,
  useFirstFormContext,
  useIsVacinatedFormContext,
} from '~/state';
import { CovidPoliticsTypes } from '~/types';

const covidPoliticFormStorage =
  localStorage.getItem('covidPoliticForm') !== null
    ? JSON.parse(localStorage.getItem('covidPoliticForm')!)
    : {
        non_formal_meetings: '',
        number_of_days_from_office: '',
        what_about_meetings_in_live: '',
        tell_us_your_opinion_about_us: '',
      };

const useCovidPoliticFormInputs = () => {
  const navigate = useNavigate();
  const { covidStateFormInputs } = useCovidStateFormContext();
  const { nameAndEmailFormInputs } = useFirstFormContext();
  const { isVacinatedFormInputs } = useIsVacinatedFormContext();

  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm<CovidPoliticsTypes>({
    mode: 'onChange',
    defaultValues: covidPoliticFormStorage,
  });

  const userRadioButtonAnswers = useWatch({
    control,
    name: ['non_formal_meetings', 'number_of_days_from_office'],
  });

  useEffect(() => {
    const timer = setTimeout(
      () =>
        localStorage.setItem('covidPoliticForm', JSON.stringify(getValues())),
      400
    );

    return () => clearTimeout(timer);
  }, [userRadioButtonAnswers]);

  const saveCovidPoliticsInformation = () =>
    localStorage.setItem('covidPoliticForm', JSON.stringify(getValues()));

  const onSubmit = async (data: CovidPoliticsTypes) => {
    const formData = {
      ...data,
      ...covidStateFormInputs,
      ...nameAndEmailFormInputs,
      ...isVacinatedFormInputs,
      number_of_days_from_office: +data.number_of_days_from_office,
      had_antibody_test: covidStateFormInputs.had_antibody_test === 'true',
      had_vaccine: isVacinatedFormInputs.had_vaccine === 'true',
    };

    const response = await instance.post('/', formData);

    if (response.statusText === 'Created') {
      navigate('../form/covid-politic?starting-point=backward');
      setTimeout(() => navigate('../success'), 700);
      localStorage.clear();
    } else {
      navigate('../form/name-and-email?starting-point=forward');
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    saveCovidPoliticsInformation,
  };
};

export default useCovidPoliticFormInputs;
