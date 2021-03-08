import React from "react";
import { useHistory } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import { BaseContainer, MainContainer, Divisor, Text } from "./Styled";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import {
  HistoryCardNone,
  HistoryCardNoneContent,
} from "../../Components/HistoryCard/styled";
import HistoryCard from "../../Components/HistoryCard/HistoryCard";
import { BASE_URL } from "../../Constants/Urls";
import useRequestData from "../../Hooks/useRequestData";
import { goToProfileAddress, goToProfileInfo } from "../../Routes/Coordinator";
import Loading from "../../Components/Loading/Loading";
import Footer from "../../Components/Footer/index";
import Header from "../../Components/Header/index";
import { useProtectedPage } from "../../Hooks/useProtectedPage";

const ProfilePage = () => {
  useProtectedPage();
  const history = useHistory();
  const profileInfo = useRequestData(`${BASE_URL}/profile`, undefined);
  const ordersHistory = useRequestData(`${BASE_URL}/orders/history`);

  return profileInfo ? (
    <div>
      <Header title="Meu perfil" arrow="true" />

      <MainContainer>
        <BaseContainer>
          <Text>{profileInfo.user.name}</Text>
          <IconButton
            style={{ color: "black", padding: "1px" }}
            onClick={() => goToProfileInfo(history)}
          >
            <EditOutlinedIcon />
          </IconButton>
        </BaseContainer>
        <Text>{profileInfo.user.email}</Text>
        <Text>{profileInfo.user.cpf}</Text>
      </MainContainer>
      <MainContainer greyBackground>
        <BaseContainer>
          <Text color="textSecondary">Endereço cadastrado</Text>
          <IconButton
            style={{ color: "black", padding: "1px" }}
            onClick={() => goToProfileAddress(history)}
          >
            <EditOutlinedIcon />
          </IconButton>
        </BaseContainer>
        <Text>{profileInfo.user.address}</Text>
      </MainContainer>
      <MainContainer>
        <Text>Histórico de pedidos</Text>
        <Divisor />
        {ordersHistory && ordersHistory.orders.length > 0 ? (
          ordersHistory.orders.map((order) => {
            return (
              <HistoryCard
                key={order.id}
                totalPrice={order.totalPrice}
                restaurantName={order.restaurantName}
                date={order.createdAt}
              />
            );
          })
        ) : (
          <HistoryCardNone>
            <HistoryCardNoneContent>
              Você não realizou nenhum pedido
            </HistoryCardNoneContent>
          </HistoryCardNone>
        )}
      </MainContainer>
      <Footer />
    </div>
  ) : (
    <div>
      <Loading />
    </div>
  );
};

export default ProfilePage;
