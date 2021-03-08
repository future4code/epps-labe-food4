import React from "react";
import axios from "axios";
import NormalInput from "../../Components/ComponetInputs/NormalInput";
import Buttons from "../../Components/Buttons/index";
import useForm from "../../Hooks/useForm";
import { goToFeed } from "../../Routes/Coordinator";
import { useHistory } from "react-router-dom";

const AddressForm = () => {
  const [form, onChange] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });
  const history = useHistory();
  const onSubmitForm = (event) => {
    event.preventDefault();
    address();
  };

  const address = () => {
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/address",
        form,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        alert("Cadastrado finalizado com sucesso");
        localStorage.removeItem("token");
        localStorage.removeItem("reg-body");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("hasAddress", true);
        goToFeed(history);
      })
      .catch((err) => {
        const errorArray = err.message.split(" ");
        if (errorArray[errorArray.length - 1] === "409") {
          alert("Endereço já cadastrado para esse usuário");
        } else {
          alert(err.message);
        }
      });
  };

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <NormalInput
          name={"street"}
          placeholder={"Rua/ Av."}
          value={form.street}
          onChange={onChange}
          label={"Logradouro*"}
          required
          type={"Name"}
        />
        <NormalInput
          name={"number"}
          placeholder={"Número"}
          value={form.number}
          onChange={onChange}
          label={"Número*"}
          required
          type={"number"}
        />
        <NormalInput
          name={"complement"}
          placeholder={"Apto./ Bloco"}
          value={form.complement}
          onChange={onChange}
          label={"Complemento"}
          required
          type={"text"}
        />
        <NormalInput
          name={"neighbourhood"}
          placeholder={"Bairro"}
          value={form.neighbourhood}
          onChange={onChange}
          label={"Bairro*"}
          required
          type={"text"}
        />
        <NormalInput
          name={"city"}
          placeholder={"Cidade"}
          value={form.city}
          onChange={onChange}
          label={"Cidade*"}
          required
          type={"text"}
        />
        <NormalInput
          name={"state"}
          placeholder={"Estado"}
          value={form.state}
          onChange={onChange}
          label={"Estado*"}
          required
          type={"text"}
        />
        <Buttons text={"Salvar"} type={"submit"}></Buttons>
      </form>
    </div>
  );
};

export default AddressForm;
