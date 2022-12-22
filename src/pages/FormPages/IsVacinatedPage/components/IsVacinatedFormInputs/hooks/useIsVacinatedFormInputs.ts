import { useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useCovidStateFormContext, useIsVacinatedFormContext } from '~/state';
import { IsVacinatedFormTypes } from '~/types';

const useIsVacinatedFormInputs = () => {
  const { isCovidStateFilled } = useCovidStateFormContext();
  const {
    isVacinatedFormInputs,
    changeIsVacinatedFormData,
    setIsIsVacinatedFilled,
  } = useIsVacinatedFormContext();
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { isValid },
    getValues,
  } = useForm<IsVacinatedFormTypes>({
    mode: 'onChange',
    defaultValues: isVacinatedFormInputs,
    shouldUnregister: true,
  });
  const userAnswers = useWatch({
    control,
    name: ['had_vaccine', 'vaccination_stage', 'i_am_waiting'],
  });

  const onSubmit = (data: IsVacinatedFormTypes) => {
    navigate('../form/covid-politic?starting-point=forward');
    setIsIsVacinatedFilled(true);
    changeIsVacinatedFormData(data);
  };

  useEffect(() => {
    if (!isCovidStateFilled)
      navigate('../form/covid-state?starting-point=forward');
  }, []);

  useEffect(() => {
    changeIsVacinatedFormData(getValues());
  }, [userAnswers]);

  return { userAnswers, register, handleSubmit, isValid, onSubmit };
};

export default useIsVacinatedFormInputs;
