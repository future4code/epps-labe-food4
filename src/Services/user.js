import axios from "axios";
import { BASE_URL } from "../Constants/Urls";
import { goToHome } from "../Routes/Coordinator";

export const getUserAddress = (setUserAddress) => {
  axios
    .get(`${BASE_URL}/profile/address`, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      setUserAddress(response.data.address);
    })
    .catch((error) => {});
};

export const placeOrder = (body, restaurantId, history) => {
  axios
    .post(`${BASE_URL}/restaurants/${restaurantId}/order`, body, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      alert("Seu pedido foi recebido pelo restaurante!");
      goToHome(history);
      console.log("Deu certo", response);
    })
    .catch((error) => {
      const errorArray = error.message.split(" ");
      console.log("Deu erro", error.response);
      if (errorArray[errorArray.length - 1] === "409") {
        alert("Você já tem um pedido em andamento");
      }
    });
};

export const getActiveOrder = (setOrder) => {
  axios
    .get(`${BASE_URL}/active-order`, {
      headers: {
        auth: localStorage.getItem("token"),
      },
    })
    .then((response) => {
      setOrder(response.data.order);
    })
    .catch((error) => {});
};
