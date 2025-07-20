import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input className="input" type="text" placeholder="search for restaurants"></input>
        <button className="btn">Search</button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard
          resName="Meghana Foods"
          cuisine="Biryani,North Indian"
          rating="4.5 stars"
          rate="1000rs"
        />
        <RestaurantCard resName="KFC" cuisine="Burger" rating="4.2 stars" rate="200rs" /> */}
        {resObj.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
