import React, {lazy,Suspense} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import About from "./components/About";
import Contact from "./components/Contact";
import ResMenu from "./components/ResMenu";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
// import Grocery from "./components/Grocery";




// We build a seprate component for restaurant card because we need many card
// so we build seprate component so that we can call it repeateadly

  



// props are just arguments to the function

const Grocery=lazy(()=> import("./components/Grocery"));


const AppLayout=()=>{
  return (
     <div className="app">
      <Header/>
      <Outlet/>
     </div>

  )
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading....</h1>}><Grocery/></Suspense>
      },
      {
        path:"/restaurants/:resId",
        element:<ResMenu/>,

      },
    ],
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
