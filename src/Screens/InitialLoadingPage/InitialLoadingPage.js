import React, { useEffect } from "react";
import logo from "../../Imgs/logo-future-eats.png";
import { InitialLoadingPageContainer, LoadingContainer, Logo } from "./styled";

const InitialLoadingPage = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.setLoading(false);
    }, 1000);
  }, []);

  return (
    <InitialLoadingPageContainer>
      <Logo src={logo} />
    </InitialLoadingPageContainer>
  );
};

export default InitialLoadingPage;
