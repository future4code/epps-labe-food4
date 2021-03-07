import React, { useState, useEffect } from "react";
import RegisterForm from "./RegisterForm";
import Logo from "../../Imgs/logo-future-eats-invert.png";
import { LogoImgRegister, TitleEnter, Wrapper } from "./styled";
import AddressPage from "../AddressForm/AddressPage";
import { goToFeed } from './../../Routes/Coordinator';
import { useHistory } from 'react-router-dom';

const RegisterPage = () => {
  const history = useHistory();
  const [step2, setStep2] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const hasAddress = localStorage.getItem("hasAddress");
    if (token && hasAddress) {
      goToFeed(history);
    }
    if (token && !hasAddress) {
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
