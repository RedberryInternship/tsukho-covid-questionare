import { useForm } from 'react-hook-form';

const useCovidPoliticFormInputs = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return { register, handleSubmit, onSubmit, isValid };
};

export default useCovidPoliticFormInputs;
