import {  useEffect, useState } from "react";
import { Card } from "./Card";

export const Body = () => {

  const [allResaturants,setAllRestaurants]=useState([])
  useEffect(()=>{
    getFetchRestaurant()
  },[])

  async function getFetchRestaurant(){
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.582905&lng=88.427264&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }
  return  (
    <>
      <div className="restaurant-list">
        {allResaturants.map((item) => (
            <Card {...item} />
        ))}
      </div>
    </>
  );
};
