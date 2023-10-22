import { useState , useEffect} from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 799);
  const [active , setActive] = useState(false)
  useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 799);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  return (
  <div className="flex items-center w-full mobile:items-start px-4 mobile:px-0 mobile:w-[12rem]" >
  {
    !isMobile && (
      <nav className="flex flex-col gap-3 w-[12rem] h-screen bg-bg-navbar sticky top-0 text-[1.2rem] ">
      <Link to={"/week1"} > <h2>Hafta 1</h2> </Link>
      <Link to={"/week2"}> <h2> Hafta 2</h2> </Link>
      <Link to={"/week3"}> <h2>Hafta 3</h2> </Link>
    </nav>
    )
  }

 {
 isMobile && (
    <div className="fixed top-0 w-full flex items-center flex-col z-[20]" >
   <div className=" w-full flex items-center justify-between bg-bg-navbar text-white px-5 ">
   <h2 className="font-bold text-[1.75rem]"> Haftalar</h2>
   <button onClick={() => setActive(!active)}className=" h-[5rem] transition-all duration-300 rounded-sm px-4 py-2 shadow-xl  active:top-[0.2rem] ">
   
     {!active && (
                    <svg
                      viewBox="0 0 22 22"
                      className="h-8 w-8 transition-all duration-700 "
                    >
                      {" "}
                      <path
                        fill="currentColor"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      />{" "}
                    </svg>
                  )}
     {active && (
                    <svg
                      viewBox="0 0 1024 1024"
                      className="h-8 w-8 transition-all duration-700 "
                    >
                      {" "}
                      <path
                        fill="currentColor"
                        d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
                      />{" "}
                    </svg>
                  )}
    </button>
   </div>
 {
  active && (
    <div className="text-gray-500 w-full">
    <nav className="flex flex-col gap-3 items-center bg-bg-navbar  ">
       <Link to={"/week1"} > <h2>Hafta 1</h2> </Link>
        <Link to={"/week2"}> <h2> Hafta 2</h2> </Link>
       <Link to={"/week3"}> <h2>Hafta 3</h2> </Link>
    </nav>
 </div>
  )
 }
  </div> 
  )}
  </div>
  )
}

