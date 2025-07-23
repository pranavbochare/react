import { IMG_CDN } from "../utils/constants";

const RestaurantCard = (resData) => {
  console.log("response data : ", resData);
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData.resData;
  console.log("cloudinary image id :", cloudinaryImageId);
  return (
    <div className="card">
      <img className="image" src={IMG_CDN + cloudinaryImageId}></img>
      <h3 className="name">{name}</h3>
      <p className="cuisine">{cuisines.join(", ")}</p>
      <p className="rating">{avgRating}</p>
      <p className="price">{costForTwo}</p>
    </div>
  );
};

export default RestaurantCard;
