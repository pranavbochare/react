import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  console.log("category props : ", props);
  console.log(props.showItems);
  const { title } = props.categoryData;

  const handleClick = () => {
    console.log("clicked");
    props.setShowIndex();
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-150 shadow-2xl p-5">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <h1 className="font-bold text-lg">
          {title} ({props.categoryData.itemCards.length})
        </h1>
        <h1>˅</h1>
      </div>

      {props.showItems && <ItemList items={props.categoryData.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
