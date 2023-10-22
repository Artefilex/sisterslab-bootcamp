
import { Link } from "react-router-dom";

export default function Navbar() {
  return <nav className="flex flex-col gap-3 w-[12rem] h-screen bg-bg-navbar sticky top-0">
     <Link to={"/week1"} > <h2>Hafta 1</h2> </Link>
     <Link to={"/week2"}> <h2> Hafta 2</h2> </Link>
     <Link to={"/week3"}> <h2>Hafta 3</h2> </Link>
  </nav>;
}

