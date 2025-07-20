const RestaurantCard = (resData) => {
  console.log(resData.resData.name);
  console.log("response data : ", resData);
  const { name, cuisines, rating, price, image } = resData.resData;
  return (
    <div className="card">
      <img className="image" src={image}></img>
      <h3 className="name">{name}</h3>
      <p className="cuisine">{cuisines.join(", ")}</p>
      <p className="rating">{rating}</p>
      <p className="price">{price}</p>
    </div>
  );
};

export default RestaurantCard;
