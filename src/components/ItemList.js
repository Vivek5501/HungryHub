import { CDN_URL } from "../utilities/constants";
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-black border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
        
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                -₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>

            <p className="text-sm">{item.card.info.description}</p>
            </div>
          <div className="3/12 p-4">
            <img className=" w-40 rounded-lg"  src={CDN_URL + item.card.info.imageId}></img>
          </div>
          
        </div>
      ))}
    </div>
  );
};
export default ItemList;
