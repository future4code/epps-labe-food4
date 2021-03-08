import React from "react";
import logo from "../../Imgs/logo-future-eats-invert.png";
import { Container, LogoImg } from "./styled";
import Header from "../../Components/Header/index";

function ErrorPage() {
  return (
    <>
      <Header title="Erro" arrow="true" />
      <Container>
        <LogoImg src={logo} />
        <h1>Página não encontrada :(</h1>
      </Container>
    </>
  );
}
export default ErrorPage;
