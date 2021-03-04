import React from "react";
import NormalInput from "../../../Components/ComponetInputs/NormalInput";
import Buttons from "../../../Components/Buttons/index"

const EditAdress = () => {
  return (
    <div>
      <form>
        <NormalInput
          name={"email"}
          label={"Logradouro"}
          required
          type={"email"}
        />
         <NormalInput
          name={"email"}
          label={"Número"}
          required
          type={"email"}
        />
         <NormalInput
          name={"email"}
          label={"Complemento"}
          placeholder={"Apto. /Bloco"}
          required
          type={"email"}
        />
         <NormalInput
          name={"Cidade"}
          label={"Cidade"}
          required
          type={"text"}
        />
         <NormalInput
          name={"email"}
          label={"Estado"}
          required
          type={"email"}
        />
      </form>
      <Buttons
        text={'Salvar'}
        type={'Submit'}
      >

     </Buttons>

    </div>
  );
};

export default EditAdress;
