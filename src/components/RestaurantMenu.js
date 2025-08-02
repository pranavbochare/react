import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menuData = useRestaurantMenu(resId);
  console.log("menudata : ", menuData);

  const [showIndex, setShowIndex] = useState(null);

  if (menuData === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } = menuData?.cards[2]?.card?.card?.info;
  const { itemCards } =
    menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

  const categories = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log("categories : ", categories);

  return (
    <div className="text-center ">
      <h1 className="my-2 font-bold text-2xl">{name}</h1>
      <p className="my-5 font-bold">{cuisines.join()}</p>

      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category.card.card.categoryId}
          categoryData={category.card.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={()=>setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
