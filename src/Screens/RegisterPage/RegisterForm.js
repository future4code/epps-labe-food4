import React, { useState } from "react";
import axios from "axios";
import InputPassoword from "../../Components/ComponetInputs/InputPassword";
import NormalInput from "../../Components/ComponetInputs/NormalInput";
import Buttons from "../../Components/Buttons/index";
import useForm from "../../Hooks/useForm";
import { useHistory } from "react-router-dom";
import { cpfMask } from "./Mask";
import AddressPage from "./../AddressForm/AddressPage";

const RegisterForm = (props) => {
  const onChangeCpf = (e) => {
    setDocumentId(cpfMask(e.target.value));
  };
  const [documentId, setDocumentId] = useState("");
  const [form, onChange, clearFields] = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorPassword, setErrorPassword] = useState();
  const body = {
    name: form.name,
    email: form.email,
    cpf: documentId,
    password: form.password,
    confirmPassword: form.confirmPassword,
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    validatePassword();
  };
  console.log("CPF", cpfMask);

  const registerUser = () => {
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/signup`,
        body
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clearFields();
        props.setStep2(true);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const validatePassword = () => {
    const firstPassword = form.password;
    const secondPassword = form.confirmPassword;

    if (firstPassword === secondPassword) {
      setErrorPassword(false);
      registerUser();
    } else {
      setErrorPassword(true);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <NormalInput
          name={"name"}
          placeholder={"Nome e sobrenome"}
          value={form.name}
          onChange={onChange}
          label={"Nome*"}
          required
          type={"Name"}
        />
        <NormalInput
          name={"email"}
          placeholder={"email@email.com"}
          value={form.email}
          onChange={onChange}
          label={"E-mail*"}
          required
          type={"email"}
        />
        <NormalInput
          name={"cpf"}
          placeholder={"000.000.000-00"}
          value={documentId}
          onChange={onChangeCpf}
          label={"CPF*"}
          required
          type={"text"}
          pattern={"/(d{3})(d{3})(d{3})(d{2})/"}
          maxLength="14"
        />
        <InputPassoword
          name={"password"}
          placeholder={"Mínimo de 6 caracteres"}
          value={form.password}
          onChange={onChange}
          label={"Senha*"}
          required
          type={"password"}
          pattern={"^.{6,}"}
        />
        <InputPassoword
          name={"confirmPassword"}
          placeholder={"Confirme a senha anterior"}
          value={form.confirmPassword}
          onChange={onChange}
          label={"Confirmar*"}
          required
          type={"password"}
          confirmPassword={validatePassword}
          errorPassword={errorPassword}
        />
        <Buttons text={"Criar"} type={"subimit"}></Buttons>
      </form>
    </div>
  );
};

export default RegisterForm;
