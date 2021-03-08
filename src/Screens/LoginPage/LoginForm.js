import React from "react";
import axios from "axios";
import InputPassoword from "../../Components/ComponetInputs/InputPassword";
import NormalInput from "../../Components/ComponetInputs/NormalInput";
import Buttons from "../../Components/Buttons/index";
import useForm from "../../Hooks/useForm";
import { useHistory } from "react-router-dom";
import { goToFeed, goToRegister } from "../../Routes/Coordinator";

const LoginForm = () => {
  const history = useHistory();

  const [form, onChange, clearFields] = useForm({ email: "", password: "" });
  const onSubmitForm = (event) => {
    event.preventDefault();
    login();
  };
  const login = () => {
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login",
        form
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("hasAddress", res.data.user.hasAddress);
        if (res.data.user.hasAddress === true) {
          goToFeed(history);
        } else {
          goToRegister(history);
        }
        clearFields();
        goToFeed();
      })
      .catch((err) => {});
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <NormalInput
          name={"email"}
          value={form.email}
          onChange={onChange}
          placeholder={"email@email.com"}
          label={"E-mail*"}
          required
          type={"email"}
        />
        <InputPassoword
          name={"password"}
          value={form.password}
          onChange={onChange}
          placeholder={"Mínimo de 6 caracteres"}
          label={"Senha*"}
          required
          type={"password"}
        />
        <Buttons text={"Entrar"} type={"submit"}></Buttons>
      </form>
    </div>
  );
};
export default LoginForm;
