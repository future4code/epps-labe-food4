import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import Logo from "../../Imgs/logo-future-eats-invert.png";
import { LogoImg, TitleEnter, TitleRegister } from "./styled";
import { useHistory, Link } from "react-router-dom";
import { goToFeed, goToRegister } from "../../Routes/Coordinator";
import InitialLoadingPage from "../InitialLoadingPage/InitialLoadingPage";


const LoginPage = () => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const hasAddress = localStorage.getItem("hasAddress");
    if (token && hasAddress) {
      goToFeed(history);
    }
  }, [history]);

  return (
    <>
      {loading ? (
        <InitialLoadingPage setLoading={setLoading} />
      ) : (
        <>
          <LogoImg src={Logo} />
          <TitleEnter>
            <p onClick={() => goToFeed(history)}>Entrar</p>
          </TitleEnter>
          <LoginForm />
          <TitleRegister>
            <p>
              Não possui cadastro?{" "}
              {/* <Link to="/register/1"> */}
                <b onClick={() => goToRegister(history)}>Clique aqui.</b>
              {/* </Link> */}
            </p>
          </TitleRegister>
        </>
      )}
    </>
  );
};
export default LoginPage;
