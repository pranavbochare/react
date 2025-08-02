import RestaurantCard, { withOpenLable } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlinestatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withOpenLable(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5807719&lng=73.9787063&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log("json : ", json);

    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setListOfRestaurants(
      // optional chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // conditional rendering
  //   if (listOfRestaurants.length === 0) {
  //     return <Shimmer />;
  //   }

  const status = useOnlinestatus();
  if (status === false) return <h1>you are offline !! check your connection</h1>;

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex items-center justify-center">
        <input
          className="border mx-10 w-70 p-1"
          type="text"
          placeholder="search for restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="border p-1 mx-10 w-20"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurants);
            setSearchText("");
          }}>
          Search
        </button>
      </div>
      <div className="flex justify-center m-5">
        <button
          className="border p-1 w-60"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.3);
            setFilteredRestaurants(filteredList);
          }}>
          Top Rated Restaurants
        </button>
        <input
          className="border ml-5 p-2"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {restaurant.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
