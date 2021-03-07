import React, { useEffect } from "react";
import Loading from "../../Components/Loading/Loading";
import logo from "../../Imgs/logo-future-eats.png"
import { InitialLoadingPageContainer, LoadingContainer, Logo, Wrapper } from "./styled";

const InitialLoadingPage = (props) => {

    useEffect(() => {
        setTimeout(() => {
        props.setLoading(false)
        }, 1000)
      }, [])

    return (
      <Wrapper>
        <InitialLoadingPageContainer>
          <Logo src={logo} />
          <LoadingContainer>
            {/* <Loading /> */}
          </LoadingContainer>
        </InitialLoadingPageContainer>
      </Wrapper>
    );
}

export default InitialLoadingPage