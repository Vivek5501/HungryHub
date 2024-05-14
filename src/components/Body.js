import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import FoodType from "./FoodType";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setresList] = useState([]);
  const [filteredRestaurant,setfilteredRestaurant]=useState([]);
  const [foodType,setfoodType]=useState([]);

  const [searchText, setsearchText] = useState("");
  // console.log("Body rendered",listOfRestaurant);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6110886&lng=77.2345184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();


    
    

    setresList(
      json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(json?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfoodType(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info)
   
  };

  const online=useOnlineStatus();

  if(online==false){
    return(
    <h1>OOPS!😢😢  Check your internet connection </h1>
    )
  }
  

  if (filteredRestaurant.length == 0) {
    return <Shimmer/>;
  }
  return (

    <div className="body">
      {/* <div className="food-card">
        {
         
          foodType.map((type)=>(
            <FoodType key={type.id} typeData={type}/>
          ))
        }
      </div> */}
      <div className="flex">
        <div className="search m-4 p-2">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
           <button className="px-4 py-2 bg-blue-200 m-4 rounded-lg" onClick={()=>{
            const filteredRestaurantName=listOfRestaurant.filter((resName)=>{
                return resName.info.name.toLowerCase().includes(searchText.toLowerCase());
            });
            setfilteredRestaurant(filteredRestaurantName);
          }}>Search
          </button>
        </div>
        <div className="flex items-center"> 
        <button
          className=" bg-blue-200 px-4 py-2 rounded-lg"
          onClick={() => {
            const filter = listOfRestaurant.filter((res) => res.info.avgRating > 4.3);
            setfilteredRestaurant(filter);
          }}
        >
          Top Rated restaurant
        </button>
        </div>
       
        
      </div>
      
      <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
