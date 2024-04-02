import { useEffect, useState } from "react";


const ResMenu=()=>{

  const [resMenuList,setresMenuList]=useState(null)
    useEffect(()=>{
        fetchMenu();
    },[]);
    
    const fetchMenu=async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6110886&lng=77.2345184&restaurantId=8620&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
    
        const json=await data.json();

        setresMenuList(json?.cards[0]?.card?.card?.info);

        console.log(json);
    };
    return(
    <div className="menu">
        <h1>{resMenuList?.name}</h1>
        <ul>
            <li>Biryani</li>
            <li>Biryani</li>
            <li>Biryani</li>
        </ul>
    </div>
    );
};
export default ResMenu;