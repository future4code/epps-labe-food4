import React from 'react'
import LoginForm from './LoginForm'
// import Logo from '../../Imgs/logo-future-eats-invert.png'
import { LogoImg, TitleEnter, TitleRegister } from './styled'

const LoginPage = () =>{
    return(
        <div>
            {/* <LogoImg src={Logo} /> */}
            <TitleEnter>
                <p>Entrar</p>
            </TitleEnter>
            <LoginForm/>
            <TitleRegister>
                <p>Não possui cadastro? Clique aqui.</p>
            </TitleRegister>
        </div>
    )
}

export default LoginPage