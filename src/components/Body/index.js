import {  useState } from "react";
import { RestaurantCard } from "../RestaurantCard";
// import { foodList } from "../../constants";
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
      <div className=" my-5 p-3">
        <input
          type="text"
          placeholder="search here..."
          className=" py-2 border border-blue-700 rounded-lg p-3 outline-none focus:border-red-500 w-96"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className=" bg-green-400 px-3 py-2 ml-3 rounded-lg hover:text-white hover:bg-blue-600"
          data-testid='search-btn'
          onClick={() => {
            const data = filterData(searchText, allResaturants);
            setFilterRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-5 m-6 gap-[20px]" data-testid='res-list'>
        {filtredRestaurant.map((item) => (
          <Link to={`/restaurant/${item.data.id}`} key={item.data.id}>
            <RestaurantCard {...item} />
          </Link>
        ))}
      </div>
    </>
  );
};
