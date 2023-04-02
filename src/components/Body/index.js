import { useEffect, useState } from "react";
import { RestaurantCard } from "../RestaurantCard";
// import { foodList } from "../../constants";
import "./style.css"; 
import { Shimmer } from "../Shimmer";
import { Link } from "react-router-dom";

export const Body = () => {
  const [filtredRestaurant, setFilterRestaurant] = useState([]);
  const [allResaturants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  function filterData(searchText, allResaturants) {
    const filter = allResaturants.filter((item) =>
      item?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filter;
  }

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

  console.log("render");

  if (!allResaturants) return null; //early return
  // if (filtredRestaurant.length === 0) return <h1>No Restaurant is found</h1>;

  return allResaturants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="search here..."
          className="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="btn"
          onClick={() => {
            const data = filterData(searchText, allResaturants);
            setFilterRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="list">
        {filtredRestaurant.map((item) => (
          <Link to={`/restaurant/${item.data.id}`} key={item.data.id}>
            <RestaurantCard {...item}/>
          </Link>
        ))}
      </div>
    </>
  );
};
