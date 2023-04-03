import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useResaurant from "../utils/useRestaurant";

export const RestaurantMenu = () => {
  const { id } = useParams();
  
  const restaurant=useResaurant(id)

  return (
    <div>
      <h1>Menu Item : {id}</h1>
      <img src={`${IMG_CDN_URL}${restaurant?.cloudinaryImageId}`} alt="" />
      <h2>{restaurant?.name}</h2>
      <p>{restaurant?.areaName}D</p>
      <p>{restaurant?.locality}D</p>
    </div>
  );
};
