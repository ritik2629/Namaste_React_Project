import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useResaurant from "../utils/useRestaurant";

export const RestaurantMenu = () => {
  const { id } = useParams();

  const { restaurant, menu } = useResaurant(id);
  console.log(menu);

  return (
    <div className=" flex gap-10">
      <div className=" mx-2 w-96 h-150 border border-gray-200 mt-3 p-3 flex flex-col rounded-lg text-center shadow-lg hover:shadow-blue-200">
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
      <div className=" border border-yellow-300 px-3 mt-3 bg-yellow-50 rounded-lg shadow-lg">
        <h1 className=" font-semibold text-center text-2xl">Menu</h1>
        {menu.map((item) => {
          return (
            <div className=" text-gray-500">
              <ul>
                <li>{item.card.info.name}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};
