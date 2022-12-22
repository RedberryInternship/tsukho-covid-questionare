import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useFirstFormContext } from '~/state';
import { useCovidStateFormContext } from '~/state/context/CovidStateFormContext';
import { CovidStateFormTypes } from '~/types';

const useCovidStateFormInputs = () => {
  const {
    covidStateFormInputs,
    changeCovidStateFormData,
    setIsCovidStateFilled,
  } = useCovidStateFormContext();
  const { isNameAndEmailFilled } = useFirstFormContext();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    getValues,
    setValue,
  } = useForm<CovidStateFormTypes>({
    mode: 'onChange',
    shouldUnregister: true,
    defaultValues: covidStateFormInputs,
  });

  useEffect(() => {
    if (!isNameAndEmailFilled)
      navigate('../form/name-and-email?starting-point=forward');
  }, []);

  const userAnswers = useWatch({
    control,
    name: [
      'had_covid',
      'had_antibody_test',
      'antibodies.number',
      'antibodies.test_date',
      'covid_sickness_date',
    ],
  });

  useEffect(() => {
    changeCovidStateFormData(getValues());
  }, [userAnswers]);

  const onSubmit = (data: CovidStateFormTypes) => {
    changeCovidStateFormData(data);
    setIsCovidStateFilled(true);
    navigate('../form/is-vacinated?starting-point=forward');
  };

  return {
    register,
    handleSubmit,
    errors,
    isValid,
    userAnswers,
    onSubmit,
    setValue,
  };
};

export default useCovidStateFormInputs;
