import React, { useContext, useState, useEffect } from "react";
import RegisterForm from "./RegisterForm";
import Logo from "../../Imgs/logo-future-eats-invert.png";
import { LogoImgRegister, TitleEnter, Wrapper } from "./styled";
import AddressPage from "../AddressForm/AddressPage";
import GlobalStateContext from "./../../GlobalState/GlobalStateContext";

const RegisterPage = () => {
  const { states } = useContext(GlobalStateContext);
  const [step2, setStep2] = useState(false);

  useEffect(() => {
    if (!states.address) {
      setStep2(true);
    }
  }, []);

  return (
    <>
      {!step2 ? (
        <Wrapper>
          <LogoImgRegister src={Logo} />
          <TitleEnter>
            <p>Cadastrar</p>
          </TitleEnter>
          <RegisterForm setStep2={setStep2} />
        </Wrapper>
      ) : (
        <AddressPage />
      )}
    </>
  );
};

export default RegisterPage;
