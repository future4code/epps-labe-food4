import React, { useEffect, useState } from "react";
import axios from "axios";
import { CategoryFilter } from "../../Components/CategoryFilter/CategoryFilter";
import RestaurantsCard from "../../Components/RestaurantsCard/RestaurantsCard";
import { SearchFilter } from "../../Components/SearchFilter/SearchFilter";
import clock from "../../Imgs/clock.png";
import {
  Wrapper,
  ContainerCardFeed,
  FeedPageContainer,
  OrderBar,
  IconContainer,
  TextOrderContainer,
  TextOrder,
  SubTotalText,
} from "./styled";
import { useProtectedPage } from "./../../Hooks/useProtectedPage";
import { goToRestaurant } from "../../Routes/Coordinator";
import { useHistory } from "react-router-dom";
import { getActiveOrder } from "../../Services/user";
import Footer from "../../Components/Footer";

function FeedPage() {
  useProtectedPage();
  const history = useHistory();
  const [restaurants, setRestaurants] = useState([]);
  const [category, setCategory] = useState("");
  const [inputName, setInputName] = useState("");
  const [order, setOrder] = useState(null);

  useEffect(() => {
    getRestaurants();
    getOrder();
  }, []);

  const getRestaurants = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants`,
        {
          headers: {
            auth: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setRestaurants(res.data.restaurants);
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  const getOrder = () => {
    getActiveOrder(setOrder);
  };

  const filterList = () => {
    const list =
      restaurants &&
      restaurants
        .filter((restaurant) => {
          return restaurant.category.includes(category);
        })
        .filter((restaurant) =>
          restaurant.name.toLowerCase().includes(inputName.toLowerCase())
        );

    return list;
  };

  const filteredList = filterList();

  const render = filteredList.map((res) => {
    let deliveryTime = "";
    if (res.deliveryTime <= 15) {
      deliveryTime = "0 - 15";
    }
    if (res.deliveryTime > 15 && res.deliveryTime <= 30) {
      deliveryTime = "15 - 30";
    }
    if (res.deliveryTime > 30 && res.deliveryTime <= 45) {
      deliveryTime = "30 - 45";
    }
    if (res.deliveryTime > 45 && res.deliveryTime <= 60) {
      deliveryTime = "45 - 60";
    }
    if (res.deliveryTime > 60) {
      deliveryTime = "60+";
    }
    return (
      <RestaurantsCard
        key={res.id}
        img={res.logoUrl}
        restaurant={res.name}
        deliveryTime={res.deliveryTime}
        tax={res.shipping}
        onClick={() => goToRestaurant(history, res.id)}
      />
    );
  });

  //capturando o value da categoria clicada e chamando a função que filtra os restaurantes
  const onClickCategory = (categoryValue) => {
    setCategory(categoryValue);
    filterList(categoryValue, inputName);
  };

  //capturando o value do input e chamando a função que filtra os restaurantes
  const onChangeName = (e) => {
    setInputName(e.target.value);
    filterList(category, inputName);
  };

  return (
    <FeedPageContainer>
      <SearchFilter
        onChangeName={onChangeName}
        name={inputName}
        restaurants={restaurants}
        setRestaurants={setRestaurants}
      />
      <CategoryFilter
        restaurants={restaurants}
        onClickCategory={onClickCategory}
      />

      <ContainerCardFeed>{render}</ContainerCardFeed>
      {order && (
        <OrderBar>
          <IconContainer>
            <img src={clock} />
          </IconContainer>
          <TextOrderContainer>
            <TextOrder>Pedido em andamento</TextOrder>
            {order.restaurantName}
            <SubTotalText>SUBTOTAL R$ {order.totalPrice}</SubTotalText>
          </TextOrderContainer>
        </OrderBar>
      )}
      <Footer />
    </FeedPageContainer>
  );
}

export default FeedPage;
