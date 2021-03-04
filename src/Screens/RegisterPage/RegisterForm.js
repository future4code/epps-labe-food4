import React from 'react'
import axios from 'axios'
import InputPassoword from '../../Components/ComponetInputs/InputPassword'
import NormalInput from '../../Components/ComponetInputs/NormalInput'
import Buttons from '../../Components/Buttons/index'
import useForm from '../../Hooks/useForm'

const RegisterForm = () => {

    const [form, onChange, clearFields] = useForm({name:'', email:'', cpf:'', password:'', confirmPassword:''})

    const onSubmitForm =(event)=>{
        event.preventDefault()
        validatePassword()
    }

    const registerUser = () =>{
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/signup`, form)
        .then((res)=>{
            alert('Usuário cadastrado com sucesso!')
            localStorage.setItem('token', res.data.token)
            clearFields()
        })
        .catch((err)=>{
            alert(err.response.data.message)
        })
    }

    const validatePassword = (event) => {
        const firstPassword = form.password
        const secondPassword = form.confirmPassword
      
        if( firstPassword === secondPassword) {
            registerUser(form, /* history */)
        } else {
            alert ("Confirme sua senha!")
        } 
    }
    return(
        <div>
            <form onSubmit={onSubmitForm}>
                <NormalInput
                    name={'name'}
                    placeholder={'Nome e sobrenome'}
                    value={form.name}
                    onChange={onChange}
                    label={'Name'}
                    required
                    type={'Name'}
                    
                />
                <NormalInput
                    name={'email'}
                    placeholder={'email@email.com'}
                    value={form.email}
                    onChange={onChange}
                    label={'E-mail'}
                    required
                    type={'email'}
                />
                <NormalInput
                    name={'cpf'}
                    placeholder={'000.000.000-00'}
                    value={form.cpf}
                    onChange={onChange}
                    label={'CPF'}
                    required
                    type={'text'}
                    pattern={'/(\d{3})(\d{3})(\d{3})(\d{2})/'} 
                />
                <InputPassoword
                    name={'password'}
                    placeholder={'Mínimo de 6 caracteres'}
                    value={form.password}
                    onChange={onChange}
                    label={'Senha'}
                    required
                    type={'password'}
                    pattern={"^.{6,}"}
                />
                    <InputPassoword
                    name={'confirmPassword'}
                    placeholder={'Confirme a senha anterior'}
                    value={form.confirmPassword}
                    onChange={onChange}
                    label={'Confirmar'}
                    required
                    type={'password'}
                    confirmPassword={validatePassword}
                    
                />
                <Buttons
                    text={'Criar'}
                    type={'subit'}
                >
                    
                </Buttons>
            </form>
        
    </div>
    )

}

export default RegisterForm