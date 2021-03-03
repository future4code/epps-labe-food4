import axios from "axios";
import { BASE_URL } from "../Constants/Urls";

export const getUserAdress = (setUserAdress) => {
  axios
    .get(`${BASE_URL}/profile/address`, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      setUserAdress(response.data.adress);
    })
    .catch((error) => {
      console.log("Erro", error.response);
    });
};

export const placeOrder = (body, id) => {
  axios
    .post(`${BASE_URL}/${id}/order`, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      alert("O pedido foi recebido pelo resturante!");
    })
    .catch((error) => {
      const errorArray = error.message.split(" ");
      if (errorArray[errorArray.length - 1] === "409") {
        alert("Você já tem um pedido em andamento");
      }
      console.log(error.response);
    });
};
