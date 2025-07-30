import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setMenuData(json.data);
    console.log("json menu data :", data);
  };
  return menuData;
};

export default useRestaurantMenu;
