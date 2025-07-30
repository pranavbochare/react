import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menuData = useRestaurantMenu(resId);
  console.log("menudata : ", menuData);

  if (menuData === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } = menuData?.cards[2]?.card?.card?.info;
  const { itemCards } =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join()}</p>
      <p>{costForTwoMessage}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            rs
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
