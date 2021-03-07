import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import Logo from "../../Imgs/logo-future-eats-invert.png";
import { Wrapper, LogoImg, TitleEnter, TitleRegister } from "./styled";
import { useHistory, Link } from "react-router-dom";
import { goToFeed } from "../../Routes/Coordinator";
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
  }, []);

  return (
    <div>
      {loading ? (
        <InitialLoadingPage setLoading={setLoading} />
      ) : (
        <Wrapper>
          <LogoImg src={Logo} />
          <TitleEnter>
            <p onClick={() => goToFeed(history)}>Entrar</p>
          </TitleEnter>
          <LoginForm />
          <TitleRegister>
            <p>
              Não possui cadastro?{" "}
              <Link to="/register">
                <b>Clique aqui.</b>
              </Link>
            </p>
          </TitleRegister>
        </Wrapper>
      )}
    </div>
  );
};
export default LoginPage;