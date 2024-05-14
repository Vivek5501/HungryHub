import { CDN_URL } from "../utilities/constants";


const RestaurantCard=(props)=>{

    const { resData}=props;
  
    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}=resData?.info || {};
    
    return(
       <div className="res-card m-2 p-4 w-[200px] bg-gray-200 hover:bg-blue-200 hover:shadow-lg hover: scale-100 transition-all duration-500  ease-out" >
        <img className="food-img rounded-lg" alt="foodLogo" 
        src={CDN_URL
           + 
       cloudinaryImageId }
        />
       <h3 className=" py-4 font-bold text-lg">{name}</h3>
       <h4>{cuisines?.join(", ")}</h4>
       <h4>{avgRating}</h4>
       <h4>{costForTwo}</h4>
       <h4>{deliveryTime}</h4>
       </div>
    );
  };

  export default RestaurantCard;