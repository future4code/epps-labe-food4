import React, { useEffect } from "react";
import Loading from "../../Components/Loading/Loading";
import logo from "../../Imgs/logo-future-eats.png"
import { InitialLoadingPageContainer, LoadingContainer, Logo } from "./styled";

const InitialLoadingPage = () => {

    useEffect(() => {
        setTimeout(() => {
        //   goToHome(history)
        }, 5000)
      }, [])

    return (
        <InitialLoadingPageContainer>
            <Logo src={logo} />
            <LoadingContainer>
                <Loading />
            </LoadingContainer>
        </InitialLoadingPageContainer>
    )
}

export default InitialLoadingPage