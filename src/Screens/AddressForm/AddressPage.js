import React from "react";
import AddressForm from "./AddressForm";
import Logo from "../../Imgs/logo-future-eats-invert.png";
import { LogoImgRegister, TitleAddress } from "./styled";
import Header from "../../Components/Header";

const AddressPage = () => {
  return (
    <>
      <Header arrow="true" />
      <LogoImgRegister src={Logo} />
      <TitleAddress>
        <p>Meu endereço</p>
      </TitleAddress>
      <AddressForm />
    </>
  );
};

export default AddressPage;
