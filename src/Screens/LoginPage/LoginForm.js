import React from 'react'
import axios from 'axios'
import InputPassoword from '../../Components/ComponetInputs/InputPassword'
import NormalInput from '../../Components/ComponetInputs/NormalInput'
import Buttons from '../../Components/Buttons/index'
import useForm from '../../Hooks/useForm'

const LoginForm = () =>{

    const [form, onChangeInput, clearFields] = useForm({email:'', password:''})
     const onSubmitForm =(event)=>{
        event.preventDefault()
        login()

    } 
    const login = () =>{
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login', form)
        .then((res)=>{
            localStorage.setItem('token', res.data.token)
        })
        .catch((err)=>{
            alert(err.response.data.message)
        })
    }
    return(
    <div>
        <form onSubmit={onSubmitForm}>
            <NormalInput
                name={'email'}
                value={form.email}
                onChange={onChangeInput}
                label={'E-mail'}
                required
                type={'email'}
            />
            <InputPassoword
                name={'password'}
                value={form.password}
                onChange={onChangeInput}
                label={'Senha'}
                required
                type={'password'}
            />
            <Buttons
                text={'Entrar'}
                type={'subit'}
            >
                
            </Buttons>
        </form>
        
    </div>

    )
}

export default LoginForm