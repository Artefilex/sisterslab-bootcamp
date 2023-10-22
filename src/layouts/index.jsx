
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
export default function MainLayout () {
   


    return (
        <div className="flex w-full flex-col tablet:flex-row">
     
         <Navbar  />     
           <div className="flex-1  py-2">
           <Outlet/> 
           </div>
        </div>
    )
}