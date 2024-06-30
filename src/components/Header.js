import { Logo_URL } from "../utilities/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";

const Header=()=>{
  const [btnName,setbtnName]=useState("Login");
  const isOnline=useOnlineStatus();
  // console.log("header rendered")
    return(
      
      <div className="flex justify-between bg-green-100 shadow-lg">
        <div className="logo-container">
          <img className="bg-green-200 w-32"  src={Logo_URL}/>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4">Online Status:{isOnline ?"✅" : "🔴"}</li>
          <li>
            <Link to="/">Home </Link></li>
          <li className="px-4"> <Link to="/about">About Us</Link></li>
          <li className="px-4"> <Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
          <button className="login"
          onClick={()=>{
            btnName=="Login"? setbtnName("Logout"):setbtnName("Login");
            
          }}
          >{btnName}</button>
          </ul> 
        </div>
      </div>
    )
  }

  export default Header;
