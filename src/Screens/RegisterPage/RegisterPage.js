import React, { useState, useEffect } from "react";
import RegisterForm from "./RegisterForm";
import Logo from "../../Imgs/logo-future-eats-invert.png";
import { LogoImgRegister, TitleEnter } from "./styled";
import { goToFeed } from "./../../Routes/Coordinator";
import { useHistory } from "react-router-dom";
import Header from "../../Components/Header";
import { useProtectedPage } from "../../Hooks/useProtectedPage";

const RegisterPage = () => {
  useProtectedPage();
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
      <Header arrow="true" />
      <LogoImgRegister src={Logo} />
      <TitleEnter>
        <p>Cadastrar</p>
      </TitleEnter>
      <RegisterForm setStep2={setStep2} />
    </>
  );
};

export default RegisterPage;
