import { useEffect, useState } from "react";

const useResaurant = (id) => {
  const [restaurant, setRestaurant] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu();
  }, []);

  async function getMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.626316299999985&lng=77.2958688&restaurantId=${id}&submitAction=ENTER`
    );
    const json = await data.json();
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    setMenu(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards
    );
    // console.log(json);
  }
  return { restaurant, menu };
};
export default useResaurant;
