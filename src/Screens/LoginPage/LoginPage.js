import React from 'react'
import LoginForm from './LoginForm'
import Logo from '../../Imgs/logo-future-eats-invert.png'
import { LogoImg, TitleEnter, TitleRegister } from './styled'
import { useHistory } from 'react-router'
import { goToRegister, goToFeed } from '../../Routes/Coordinator'

const LoginPage = () =>{
     const history = useHistory()
    return(
        <div>
            <LogoImg src={Logo} />
            <TitleEnter>
                <p onClick={() => goToFeed(history)}>Entrar</p>
            </TitleEnter>
            <LoginForm/>
            <TitleRegister>
                <p onClick={() => goToRegister(history)}>Não possui cadastro? Clique aqui.</p>
            </TitleRegister>
        </div>
    )
}

export default LoginPage