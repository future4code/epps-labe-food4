import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToRegister } from "../Routes/Coordinator";
import GlobalStateContext from "./../GlobalState/GlobalStateContext";

export const useProtectedPage = () => {
  const { states, setters } = useContext(GlobalStateContext);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      history.push("/");
    } else {
      if (!states.address) {
        goToRegister(history);
      }
    }
  }, [history]);
};
