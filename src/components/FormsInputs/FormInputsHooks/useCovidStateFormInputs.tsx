import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useCovidStateFormContext } from '~/state/context/CovidStateFormContext';
import { CovidStateFormTypes } from '~/types';

const useCovidStateFormInputs = () => {
  const { covidStateFormInputs, changeCovidStateFormData } =
    useCovidStateFormContext();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    getValues,
  } = useForm<CovidStateFormTypes>({
    mode: 'onChange',
    shouldUnregister: true,
    defaultValues: covidStateFormInputs,
  });

  const userAnswers = useWatch({
    control,
    name: [
      'had_covid',
      'had_antibody_test',
      'antibodies.number',
      'antibodies.test_date',
    ],
  });

  useEffect(() => {
    changeCovidStateFormData(getValues());
  }, [userAnswers]);

  const onSubmit = (data: CovidStateFormTypes) => {
    changeCovidStateFormData(data);
    navigate('../form/is-vacinated?starting-point=forward');
  };

  return { register, handleSubmit, errors, isValid, userAnswers, onSubmit };
};

export default useCovidStateFormInputs;