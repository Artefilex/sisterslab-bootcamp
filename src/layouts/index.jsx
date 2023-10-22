import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

export default function MainLayout () {

    return (
        <div className="flex w-full  ">
           <Navbar />   
           <div className="items-center justify-center flex-1 w-full px-5 py-2">
           <Outlet/> 
           </div>
        </div>
    )
}