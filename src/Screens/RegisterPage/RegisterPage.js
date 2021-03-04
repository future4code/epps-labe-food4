import React from 'react'
import RegisterForm from './RegisterForm'
import Logo from '../../Imgs/logo-future-eats-invert.png'
import { LogoImgRegister, TitleEnter, TitleRegister } from './styled'


const RegisterPage = () =>{
    return(
        <div>
            <LogoImgRegister src={Logo} />
            <TitleEnter>
                <p>Cadastrar</p>
            </TitleEnter>
            <RegisterForm/>
        </div>
    )
}

export default RegisterPage