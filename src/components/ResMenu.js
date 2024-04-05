import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utilities/constants";
import { useParams } from "react-router-dom";


const ResMenu=()=>{

  const [resMenuList,setresMenuList]=useState(null)

  const {resId}=useParams();
    useEffect(()=>{
        fetchMenu();
    },[]);
    
    const fetchMenu=async ()=>{
        const data= await fetch(MENU_API+resId);
    
        const json=await data.json();

        // console.log(json);
        setresMenuList(json.data);

    };

    if(resMenuList==null){
        return <Shimmer/>
    }

    console.log(resMenuList);

    const {name,cuisines,costForTwoMessage}=resMenuList?.cards[2]?.card?.card?.info || {};

    const {itemCards}=resMenuList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    console.log(itemCards)

    return(
    <div className="menu">
         <h1>{name}</h1>
    {cuisines ? (
        <p>{cuisines.join(', ')}</p>
    ) : (
        <p>No cuisines available</p>
    )}
    <p>{costForTwoMessage}</p>
        
        <ul>
            {itemCards.map((items)=>(
                <li key={items.card.info.id}> {items.card.info.name}--{items.card.info.price || items.card.info.defaultPrice}</li>
            ))}        
            
        </ul>  
    </div>
    );
};
export default ResMenu;