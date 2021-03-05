import React, { useState } from 'react'
import axios from 'axios'
import InputPassoword from '../../Components/ComponetInputs/InputPassword'
import NormalInput from '../../Components/ComponetInputs/NormalInput'
import Buttons from '../../Components/Buttons/index'
import useForm from '../../Hooks/useForm'
import { cpfMask } from './Mask'

const RegisterForm = () => {

    const onChangeCpf =(e)=>{
        setDocumentId(cpfMask(e.target.value))
    }
    const [documentId, setDocumentId] = useState('')
    const [form, onChange, clearFields] = useForm({name:'', email:'', password:'', confirmPassword:''})
    const [errorPassword, setErrorPassword] = useState()
    const body = {
        name: form.name,
        email: form.email,
        cpf: documentId,
        password: form.password,
        confirmPassword: form.confirmPassword
    }
       

    const onSubmitForm =(event)=>{
        event.preventDefault()
        validatePassword()
    }
    console.log('CPF',cpfMask)

    const registerUser = () =>{
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/signup`, body)
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
            setErrorPassword(false)
            registerUser(form, /* history */)
        } else {
            /* alert ("Confirme sua senha!") */
            setErrorPassword(true)
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
                    label={'Name*'}
                    required
                    type={'Name'}
                    
                />
                <NormalInput
                    name={'email'}
                    placeholder={'email@email.com'}
                    value={form.email}
                    onChange={onChange}
                    label={'E-mail*'}
                    required
                    type={'email'}
                />
                <NormalInput
                    name={'cpf'}
                    placeholder={'000.000.000-00'}
                    value={documentId}
                    onChange={onChangeCpf}
                    label={'CPF*'}
                    required
                    type={'text'}
                    pattern={'/(\d{3})(\d{3})(\d{3})(\d{2})/'}
                    maxLength='14'
                />
                <InputPassoword
                    name={'password'}
                    placeholder={'Mínimo de 6 caracteres'}
                    value={form.password}
                    onChange={onChange}
                    label={'Senha*'}
                    required
                    type={'password'}
                    pattern={"^.{6,}"}
                />
                    <InputPassoword
                    name={'confirmPassword'}
                    placeholder={'Confirme a senha anterior'}
                    value={form.confirmPassword}
                    onChange={onChange}
                    label={'Confirmar*'}
                    required
                    type={'password'}
                    confirmPassword={validatePassword}
                    errorPassword={errorPassword}
                    
                />
                <Buttons
                    text={'Criar'}
                    type={'subimit'}
                >
                    
                </Buttons>
            </form>
        
    </div>
    )

}

export default RegisterForm