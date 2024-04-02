import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import FoodType from "./FoodType";

const Body = () => {
  const [listOfRestaurant, setresList] = useState([]);
  const [filteredRestaurant,setfilteredRestaurant]=useState([]);
  const [foodType,setfoodType]=useState([]);

  const [searchText, setsearchText] = useState("");
  console.log("Body rendered")

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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
           <button className="search-btn" onClick={()=>{
            const filteredRestaurantName=listOfRestaurant.filter((resName)=>{
                return resName.info.name.toLowerCase().includes(searchText.toLowerCase());
            });
            setfilteredRestaurant(filteredRestaurantName);
          }}>Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filter = listOfRestaurant.filter((res) => res.info.avgRating > 4.3);
            setfilteredRestaurant(filter);
          }}
        >
          Top Rated restaurant
        </button>
      </div>
      
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
