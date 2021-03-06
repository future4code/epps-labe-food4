import React from 'react'
import AddressForm from './AddressForm'
import Logo from "../../Imgs/logo-future-eats-invert.png";
import { Wrapper, LogoImgRegister, TitleAddress } from "./styled";

const AddressPage = () =>{
    return (
      <Wrapper>
        <LogoImgRegister src={Logo} />
        <TitleAddress>
          <p>Meu endereço</p>
        </TitleAddress>
        <AddressForm />
      </Wrapper>
    );
}

export default AddressPage