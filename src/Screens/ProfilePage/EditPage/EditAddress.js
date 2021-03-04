import React from "react";
import NormalInput from "../../../Components/ComponetInputs/NormalInput";
import Buttons from "../../../Components/Buttons/index"

const EditAdress = () => {
  return (
    <div>
      <form>
        <NormalInput
          name={"logradouro"}
          label={"Logradouro"}
          required
          type={"text"}
        />
         <NormalInput
          name={"Número"}
          label={"Número"}
          required
          type={"number"}
        />
         <NormalInput
          name={"complemento"}
          label={"Complemento"}
          placeholder={"Apto. /Bloco"}
          required
          type={"text"}
        />
         <NormalInput
          name={"cidade"}
          label={"Cidade"}
          required
          type={"text"}
        />
         <NormalInput
          name={"estado"}
          label={"Estado"}
          required
          type={"text"}
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
