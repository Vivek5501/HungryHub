import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useResmenu from "../utilities/useResmenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";


const ResMenu=()=>{

  

  const {resId}=useParams();
  const resInfo=useResmenu(resId);


    if(resInfo==null){
        return <Shimmer/>
    }


    // console.log(resMenuList);

    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info || {};

    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const catagories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(catagories);

    if (!itemCards || itemCards.length === 0) {
        return <Shimmer />;
    }
    

    // console.log(itemCards);

    return(
    <div className="menu text-center">
        {/* <button className="veg-only"
        onClick={()=>{
            const filter=itemCards.filter((veg)=>veg.card.info.itemAttribute.vegClassifier);
            setresMenuList(filter);

        }}
         ></button> */}
         <h1 className=" font-bold mt-6 text-2xl">{name}</h1>
    {cuisines ? (
        <p className="font-bold text-lg">{cuisines.join(', ')}</p>
    ) : (
        <p>No cuisines available</p>
    )}
    <p>{costForTwoMessage}</p>

    {catagories.map((category)=>(
        <RestaurantCategory data={category?.card?.card}/>
    ))}
        
    </div>
    );
};
export default ResMenu;