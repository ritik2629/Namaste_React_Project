import { useEffect, useState } from "react";
import { RestaurantCard } from "../RestaurantCard";
// import { foodList } from "../../constants";
import "./style.css";
import { Shimmer } from "../Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper";
import useFetchRestaurant from "../../utils/useFetchRestaurant";

export const Body = () => {
  const [searchText, setSearchText] = useState("");
  const { allResaturants, filtredRestaurant, setFilterRestaurant } =useFetchRestaurant();

  if (!allResaturants) return null; //early return

  return allResaturants?.length === 0  ? (
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
            <RestaurantCard {...item} />
          </Link>
        ))}
      </div>
    </>
  );
};
