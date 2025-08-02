import { IMG_CDN } from "../utils/constants";

const ItemList = (items) => {
  console.log("items List : ", items);
  return (
    <div>
      {items.items.map((item) => (
        <div key={item.card.info.id} className="m-2 border-b-2 border-gray-500 text-left">
          <div className="flex justify-between">
            <div>
              <span className="flex m-1">{item.card.info.name}</span>
              <span className="m-1">- ₹{item.card.info.price ? item.card.info.price / 100 : 100}</span>
              <p className="text-xs m-1">{item.card.info.description}</p>
            </div>
            <div className="mx-5">
              <img src={IMG_CDN + item.card.info.imageId} className="w-20 h-20" />
              <button className="bg-amber-300 rounded-xl w-15 ml-3 mb-2">Add+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
