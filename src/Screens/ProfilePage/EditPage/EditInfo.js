import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToProfile } from "../../../Routes/Coordinator";
import NormalInput from "../../../Components/ComponetInputs/NormalInput";
import Buttons from "../../../Components/Buttons/index";
import { BASE_URL } from "../../../Constants/Urls";
import useRequestData from "../../../Hooks/useRequestData";
import useForm from "../../../Hooks/useForm";
import axios from "axios";
import { cpfMask } from "../../RegisterPage/Mask";
import Header from "../../../Components/Header";
import { useProtectedPage } from "../../../Hooks/useProtectedPage";

const EditInfo = () => {
  useProtectedPage();
  const history = useHistory();
  const [form, onChange, clearFields, setValues] = useForm({
    name: "",
    email: "",
    cpf: "",
  });
  const formatedCPF = cpfMask(form.cpf);

  const axiosConfig = {
    headers: { auth: window.localStorage.getItem("token") },
  };

  const editInfos = (body) => {
    axios
      .put(`${BASE_URL}/profile`, body, axiosConfig)
      .then((response) => {
        window.alert("Cadastro atualizado!");
        goToProfile(history);
      })
      .catch((error) => {
        window.alert("Algo deu errado, tente novamente!");
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editInfos(form);
    clearFields();
  };

  const userData = useRequestData(`${BASE_URL}/profile`, undefined);

  useEffect(() => {
    userData && setValues(userData.user);
  }, [userData]);

  return (
    <div>
      <Header title="Editar" arrow={true} />
      <form onSubmit={handleSubmit}>
        <NormalInput
          name="name"
          label="Nome"
          required
          type="text"
          value={form.name}
          onChange={onChange}
        />
        <NormalInput
          name="email"
          label="E-mail"
          required
          type="email"
          value={form.email}
          onChange={onChange}
        />
        <NormalInput
          name="cpf"
          label="CPF"
          placeholder="000.000.000-00"
          required
          type="text"
          value={formatedCPF}
          onChange={onChange}
        />
        <Buttons text={"Salvar"} type={"submit"}></Buttons>
      </form>
    </div>
  );
};

export default EditInfo;
