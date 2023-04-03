import { useEffect, useState } from "react";

const useFetchRestaurant=()=>{

    const [allResaturants, setAllRestaurants] = useState([]);
    const [filtredRestaurant, setFilterRestaurant] = useState([]);
    
    useEffect(() => {
        getRestaurant();
      }, []);
    
      async function getRestaurant() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.582905&lng=88.427264&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilterRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        console.log(json)
      }
      return {allResaturants,filtredRestaurant,setFilterRestaurant}
}
export default useFetchRestaurant