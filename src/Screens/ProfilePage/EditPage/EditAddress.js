import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToProfile } from "../../../Routes/Coordinator";
import NormalInput from "../../../Components/ComponetInputs/NormalInput";
import Buttons from "../../../Components/Buttons/index";
import { BASE_URL } from "../../../Constants/Urls";
import useForm from "../../../Hooks/useForm";
import useRequestData from "../../../Hooks/useRequestData";
import axios from "axios";
import Header from "../../../Components/Header";
import { useProtectedPage } from "../../../Hooks/useProtectedPage";

const EditAddressPage = () => {
  useProtectedPage();
  const history = useHistory();
  const [form, onChange, clearFields, setValues] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const axiosConfig = {
    headers: { auth: window.localStorage.getItem("token") },
  };

  const addAdress = (body) => {
    axios
      .put(`${BASE_URL}/address`, body, axiosConfig)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        window.alert("Endereço atualizado com sucesso!");
        goToProfile(history);
      })
      .catch((error) => {
        window.alert("Algo deu errado!");
      });
  };

  const getAllAddress = useRequestData(
    `${BASE_URL}/profile/address`,
    undefined
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    clearFields();
    addAdress(form);
  };

  useEffect(() => {
    getAllAddress && setValues(getAllAddress.address);
  }, [getAllAddress]);

  return (
    <div>
      <Header title="Endereço" arrow={true} />
      <form onSubmit={handleSubmit}>
        <NormalInput
          label="Logradouro*"
          placeholder="Rua/Av."
          name="street"
          value={form.street}
          onChange={onChange}
        />
        <NormalInput
          label="Número*"
          placeholder="Número"
          name="number"
          value={form.number}
          onChange={onChange}
          type="number"
        />
        <NormalInput
          label="Complemento"
          placeholder="Apto. /Bloco"
          name="complement"
          value={form.complement}
          onChange={onChange}
        />
        <NormalInput
          label="Bairro*"
          placeholder="Bairro"
          name="neighbourhood"
          value={form.neighbourhood}
          onChange={onChange}
        />
        <NormalInput
          label="Cidade*"
          placeholder="Cidade"
          name="city"
          value={form.city}
          onChange={onChange}
        />
        <NormalInput
          label="Estado*"
          placeholder="Estado"
          name="state"
          value={form.state}
          onChange={onChange}
        />

        <Buttons text={"Salvar"} type={"Submit"}></Buttons>
      </form>
    </div>
  );
};

export default EditAddressPage;
