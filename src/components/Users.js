import { useState } from "react";
const User=({name})=>{
const[count,setcount]=useState(0);
console.log("user rendered");
return ( 
    <div className="about-user">
    
    
    <h1>Count:{count}</h1>
    <button className="count"
    onClick={()=>{
        setcount(count+1);
        
    }}

    >Count Increased</button>
    <button onClick={()=>{
        setcount(count-1);
    }}>Count Decreased</button>
    <h2>Name:{name}</h2>
    <h3>Location:Gzb</h3>
</div>
);
};
export default User;