import React, { useEffect } from "react";
import RegisterForm from "./RegisterForm";
import Logo from "../../Imgs/logo-future-eats-invert.png";
import { LogoImgRegister, TitleEnter } from "./styled";
import { goToAddressPage, goToFeed } from "./../../Routes/Coordinator";
import { useHistory } from "react-router-dom";
import Header from "../../Components/Header";
import { useProtectedPage } from "../../Hooks/useProtectedPage";

const RegisterPage = () => {
  useProtectedPage();
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const hasAddress = localStorage.getItem("hasAddress");
    if (token && hasAddress) {
      goToFeed(history);
    }
    if (token && !hasAddress) {
      goToAddressPage(history);
    }
  }, [history]);

  return (
    <>
      <Header arrow="true" />
      <LogoImgRegister src={Logo} />
      <TitleEnter>
        <p>Cadastrar</p>
      </TitleEnter>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
