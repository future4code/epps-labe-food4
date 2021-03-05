import React, { useState } from 'react'
import axios from 'axios'
import InputPassoword from '../../Components/ComponetInputs/InputPassword'
import NormalInput from '../../Components/ComponetInputs/NormalInput'
import Buttons from '../../Components/Buttons/index'
import useForm from '../../Hooks/useForm'
import { useHistory } from 'react-router-dom'

const LoginForm = () => {
      /* const history = useHistory() */

     const [form, onChange, clearFields] = useForm({email:'', password:''})
     const onSubmitForm =(event)=>{
        event.preventDefault()
        login()
    } 
    const login = () =>{
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login', form)
        .then((res)=>{
            localStorage.setItem('token', res.data.token)
            clearFields()
            alert('Login feito com sucesso!')
            getProfile()
        })
        .catch((err)=>{
            alert(err.response.data.message)
        })
    }

    const [adress, setAdress]= useState()

    const getProfile = () =>{
      axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile`,{
        headers:{
          auth:localStorage.getItem('token')
        }
      })
      .then((res)=>{
        setAdress(res.data.user.hasAddress)
/*         if(adress === true){
          goToRestaurant(history)
        }else{
          goToAddressPage(history)
        } */
      })
      .catch((err)=>{
        console.log(err)
      })
    }
        
    return (
      <div>
        <form onSubmit={onSubmitForm}>
          <NormalInput
            name={"email"}
            value={form.email}
            onChange={onChange}
            placeholder={"email@email.com"}
            label={"E-mail*"}
            required
            type={"email"}
          />
          <InputPassoword
            name={"password"}
            value={form.password}
            onChange={onChange}
            placeholder={"Mínimo de 6 caracteres"}
            label={"Senha*"}
            required
            type={"password"}
          />
          <Buttons text={"Entrar"} type={"submit"}></Buttons>
        </form>
      </div>
    );

}

export default LoginForm