import { CDN_URL } from "../utilities/constants";


import { CDN_URL } from "../utilities/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.info || {};

  return (
    <div className="res-card m-5 p-4 w-[250px] bg-gray-200 hover:bg-blue-200 hover:shadow-lg hover:scale-100 transition-all duration-500 ease-out relative">
      <img className="food-img rounded-lg top-0 left-0 w-full h-48 object-cover" alt="foodLogo"
           src={CDN_URL + cloudinaryImageId} />
      <div className="relative z-10 mt-8">
        <h3 className="py-4 font-bold text-lg">{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
