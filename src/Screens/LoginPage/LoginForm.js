import React, { useContext } from "react";
import axios from "axios";
import InputPassoword from "../../Components/ComponetInputs/InputPassword";
import NormalInput from "../../Components/ComponetInputs/NormalInput";
import Buttons from "../../Components/Buttons/index";
import useForm from "../../Hooks/useForm";
import { useHistory } from "react-router-dom";
import { goToFeed, goToRegister } from "../../Routes/Coordinator";
import GlobalStateContext from './../../GlobalState/GlobalStateContext';

const LoginForm = () => {
  const history = useHistory();
  const { setters } = useContext(GlobalStateContext);

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
        setters.setAddress(res.data.user.hasAddress);
        if (res.data.user.hasAddress === true) {
          goToFeed(history);
        } else {
          setters.setAddress(res.data.user.hasAddress);
          goToRegister(history);
        }
        clearFields();
        goToFeed();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  // const [address, setAddress] = useState();
  // const getProfile = () => {
  //   axios
  //     .get(
  //       `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile`,
  //       {
  //         headers: {
  //           auth: localStorage.getItem("token"),
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       setters.setAddress(res.data.user.hasAddress);
  //       if (states.address === true) {
  //         goToFeed(history);
  //       } else {
  //         goToRegister(history);
  //       }
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // };

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
