import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { goToRegister } from "../Routes/Coordinator";

export const useProtectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const hasAddress = localStorage.getItem("hasAddress");

    if (!token) {
      history.push("/");
    } else {
      if (!hasAddress) {
        goToRegister(history);
      }
    }
  }, [history]);
};