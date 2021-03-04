import React from "react";
import NormalInput from "../../../Components/ComponetInputs/NormalInput";
import Buttons from "../../../Components/Buttons/index"

const EditInfo = () => {
  return (
    <div>
      <form>
        <NormalInput
          name={"nome"}
          label={"Nome"}
          required
          type={"text"}
        />
         <NormalInput
          name={"email"}
          label={"E-mail"}
          required
          type={"email"}
        />
         <NormalInput
          name={"cpf"}
          label={"CPF"}
          placeholder={"000.000.000-00"}
          pattern="[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}"
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

export default EditInfo;