import { IMG_CDN } from "../utils/constants";

const RestaurantCard = (resData) => {
  console.log("response data : ", resData);
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData.resData;
  console.log("cloudinary image id :", cloudinaryImageId);
  return (
    <div className="border-2 w-65 m-10 h-120 rounded-2xl hover:shadow-2xl">
      <img className="w-65 h-65 rounded-t-2xl" src={IMG_CDN + cloudinaryImageId}></img>
      <h3 className="p-2 font-bold">{name}</h3>
      <p className="p-2">{cuisines.join(", ")}</p>
      <p className="p-2 font-bold">{avgRating}</p>
      <p className="p-2">{costForTwo}</p>
    </div>
  );
};

export const withOpenLable = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 ml-6 rounded-2xl">Open</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
