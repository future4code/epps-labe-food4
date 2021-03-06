import React, { useEffect, useState } from "react";
import { CategoryFilter } from "../../Components/CategoryFilter/CategoryFilter";
import RestaurantsCard from "../../Components/RestaurantsCard/RestaurantsCard";
import { SearchFilter } from "../../Components/SearchFilter/SearchFilter";
import axios from "axios";
import {
  ContainerCardFeed,
  IconContainer,
  OrderBar,
  SubTotalText,
  TextOrderContainer,
  TextOrder,
  FeedPageContainer,
} from "./styled";
import { getActiveOrder } from "../../Services/user";
import clock from "../../Imgs/clock.png";
import Footer from "../../Components/Footer/index";

function FeedPage() {
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
            auth:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imd2dVE5MkxBSXdMVm5RdjBjY3dyIiwibmFtZSI6IkRhbmllbFIiLCJlbWFpbCI6ImRhbm4ucmliQGdtYWlsLmNvbSIsImNwZiI6IjE2NS4xNTIuNzc3LTAwIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEpvc8OpIGd1aW1hcsOjZXMsIDE3NywgNzEgLSBCb2FjYSBkbyBSaW8iLCJpYXQiOjE2MTQ3MDg2NTh9.GoVyPdn8CYzkQuw2Mw3d0juipqDlsvQBhqmhCr2d2UQ",
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
    return (
      <RestaurantsCard
        key={res.id}
        img={res.logoUrl}
        restaurant={res.name}
        deliveryTime={res.deliveryTime}
        tax={res.shipping}
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

  console.log(render);

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
