import { useState } from "react";

const useForm = ({ initialValues, onSubmit, validate }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate ? validate(values) : {};
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);
      onSubmit(values);
    }
  };

  const togglePasswordVisibility = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    togglePasswordVisibility
  };
};

export default useForm;
