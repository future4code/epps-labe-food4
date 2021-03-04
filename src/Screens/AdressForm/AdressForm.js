import React from 'react'
import axios from 'axios'
import InputPassoword from '../../Components/ComponetInputs/InputPassword'
import NormalInput from '../../Components/ComponetInputs/NormalInput'
import Buttons from '../../Components/Buttons/index'
import useForm from '../../Hooks/useForm'

const AdressForm = () =>{

    const [form, onChange, clearFields] = useForm({street:'', number:'', neighbourhood:'', city:'', state:'', complement:''})
    const onSubmitForm =(event)=>{
        event.preventDefault()
        adress()
    }
    
    const adress = () =>{
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/address', form ,{
            headers:{
                auth:localStorage.getItem('token')
            }
        })
        .then((res)=>{
            alert('endereco cadastrado com sucesso')
            localStorage.removeItem('token')
            localStorage.setItem('token', res.data.token)
            clearFields()
        })
        .catch((err)=>{
            alert(err)
        })
    }
    

    return(

        <div>
            <form onSubmit={onSubmitForm}>
                <NormalInput
                    name={'street'}
                    placeholder={'Rua/ Av.'}
                    value={form.street}
                    onChange={onChange}
                    label={'Logradouro'}
                    required
                    type={'Name'}                    
                />
                <NormalInput
                    name={'number'}
                    placeholder={'Número'}
                    value={form.number}
                    onChange={onChange}
                    label={'Número'}
                    required
                    type={'number'}                    
                />
                <NormalInput
                    name={'complement'}
                    placeholder={'Apto./ Bloco'}
                    value={form.complement}
                    onChange={onChange}
                    label={'Complemento'}
                    required
                    type={'text'}                    
                />
                <NormalInput
                    name={'neighbourhood'}
                    placeholder={'Bairro'}
                    value={form.neighbourhood}
                    onChange={onChange}
                    label={'Bairro'}
                    required
                    type={'text'}                    
                />
                <NormalInput
                    name={'city'}
                    placeholder={'Cidade'}
                    value={form.city}
                    onChange={onChange}
                    label={'Cidade'}
                    required
                    type={'text'}                    
                />
                <NormalInput
                    name={'state'}
                    placeholder={'Estado'}
                    value={form.state}
                    onChange={onChange}
                    label={'Estado'}
                    required
                    type={'text'}                    
                />
                <Buttons
                    text={'Salvar'}
                    type={'subit'}
                >
                    
                </Buttons>
                
                </form>
        </div>
    )
}


export default AdressForm