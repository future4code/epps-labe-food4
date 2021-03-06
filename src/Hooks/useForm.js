import { useState } from "react";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const clearFields = () => {
    setForm(initialState);
  };

  const setValues = (values) =>{
    setForm(values)
}


  return [form, onChange, clearFields, setValues];
};

export default useForm
