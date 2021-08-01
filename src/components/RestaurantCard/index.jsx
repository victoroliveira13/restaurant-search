import React from "react";
import ReactStars from "react-rating-stars-component";

import {
    Restaurant,
    RestaurantInfo,
    Title,
    Address,
    RestaurantPhoto
} from './style';

import restaurante from '../../assets/restaurante-fake.png';

const RestaurantCard = () => {
  return (
    <Restaurant>
      <RestaurantInfo>
        <Title>Nome do restaurante</Title>
        <ReactStars
          count={5}
          isHalf
          value={4}
          edit={false}
          activeColor="#e7711c"
        />
        <Address>Avenida João Naves de Ávila, 888</Address>
      </RestaurantInfo>
      <RestaurantPhoto src={restaurante} />
    </Restaurant>
  );
}

export default RestaurantCard;
