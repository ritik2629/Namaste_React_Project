import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";

export const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant,setRestaurant]=useState([])
  const [menu,setMenu]=useState({})
  useEffect(() => {
    getMenu()
  },[]);
  async function getMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.626316299999985&lng=77.2958688&restaurantId=${id}&submitAction=ENTER`
    );
    const json =await data.json()
    setRestaurant(json?.data?.cards[0]?.card?.card?.info)
    // setMenu(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
    // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
    // console.log(json)
  }
  return (
    <div>
      <h1>Menu Item : {id}</h1>
      <img src={`${IMG_CDN_URL}${restaurant?.cloudinaryImageId}`} alt="" />
      <h2>{restaurant?.name}</h2>
      <p>{restaurant?.areaName}D</p>
      <p>{restaurant?.locality}D</p>
      {/* <div>
        {Object.values(menu).map((item)=>{
            const {}
        })}
      </div> */}
    </div>
  );
};
