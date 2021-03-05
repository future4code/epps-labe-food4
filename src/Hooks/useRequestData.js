import { useEffect, useState } from "react"
import axios from "axios"

function useRequestData(url,initialState){
const [data,setData] = useState(initialState)

useEffect(()=>{
    axios.get(url,{headers:{auth:localStorage.getItem("token")}}).then(response =>{
        setData(response.data)
    }).catch(error =>{
        console.log(error)
    })
},[url])
return data
}
export default useRequestData