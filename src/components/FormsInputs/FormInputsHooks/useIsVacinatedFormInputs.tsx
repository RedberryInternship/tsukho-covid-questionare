import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { IsVacinatedFormTypes } from '~/types';

const useIsVacinatedFormInputs = () => {
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<IsVacinatedFormTypes>({
    mode: 'onChange',
    shouldUnregister: true,
    defaultValues: { had_vaccine: '', vaccination_stage: '', i_am_waiting: '' },
  });
  const userAnswers = useWatch({
    control,
    name: ['had_vaccine', 'vaccination_stage', 'i_am_waiting'],
  });

  const onSubmit = (data: IsVacinatedFormTypes) => {
    navigate('../form/covid-politic?starting-point=forward');
    console.log(data);
  };

  return { userAnswers, register, handleSubmit, isValid, onSubmit };
};

export default useIsVacinatedFormInputs;
