import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useFirstFormContext } from '~/state';
import { NameAndEmailFormInputsTypes } from '~/types';

const useNameAndEmailFormInputs = () => {
  const navigate = useNavigate();
  const { nameAndEmailFormInputs, changeNameAndEmailFormData } =
    useFirstFormContext();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isValid },
  } = useForm<NameAndEmailFormInputsTypes>({
    mode: 'onChange',
    defaultValues: nameAndEmailFormInputs,
  });

  const onSubmit = (data: NameAndEmailFormInputsTypes) => {
    changeNameAndEmailFormData(data);
    navigate('../form/covid-state?starting-point=forward');
  };

  return {
    changeNameAndEmailFormData,
    register,
    handleSubmit,
    getValues,
    errors,
    isValid,
    onSubmit,
  };
};

export default useNameAndEmailFormInputs;
