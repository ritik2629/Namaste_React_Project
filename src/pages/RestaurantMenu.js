import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useResaurant from "../utils/useRestaurant";

export const RestaurantMenu = () => {
  const { id } = useParams();

  const restaurant = useResaurant(id);

  return (
    <div className=" mx-2 w-96 border border-gray-200 mt-3 p-3 flex flex-col rounded-lg text-center shadow-lg hover:shadow-blue-200">
      <h1>Menu Item : {id}</h1>
      <img
        src={`${IMG_CDN_URL}${restaurant?.cloudinaryImageId}`}
        alt=""
        className=" rounded-lg h-96 shadow-lg"
      />
      <h2>{restaurant?.name}</h2>
      <p>{restaurant?.areaName}D</p>
      <p>{restaurant?.locality}D</p>
    </div>
  ); 
};
