import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useResmenu from "../utilities/useResmenu";
import { useParams } from "react-router-dom";


const ResMenu=()=>{

  

  const {resId}=useParams();
  const resInfo=useResmenu(resId);


    if(resInfo==null){
        return <Shimmer/>
    }


    // console.log(resMenuList);

    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info || {};

    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    if(itemCards.length==null){
        return <Shimmer/>
    }

    // console.log(itemCards);

    return(
    <div className="menu">
        {/* <button className="veg-only"
        onClick={()=>{
            const filter=itemCards.filter((veg)=>veg.card.info.itemAttribute.vegClassifier);
            setresMenuList(filter);

        }}
         ></button> */}
         <h1>{name}</h1>
    {cuisines ? (
        <p>{cuisines.join(', ')}</p>
    ) : (
        <p>No cuisines available</p>
    )}
    <p>{costForTwoMessage}</p>
        
        <ul>
            {itemCards.map((items)=>(
                <li key={items.card.info.id}> {items.card.info.name}--{items.card.info.price || items.card.info.defaultPrice}---{items.card.info.itemAttribute.vegClassifier}</li>
            ))}        
            
        </ul>  
    </div>
    );
};
export default ResMenu;