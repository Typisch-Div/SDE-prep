import { useState } from 'react';

/**
 * Custom hook for managing form inputs
 * Makes form handling reusable and clean
 */
export function useInputForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const reset = () => {
    setValues(initialValues);
  };

  return [values, handleChange, reset];
}