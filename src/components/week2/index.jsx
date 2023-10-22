import { useEffect } from "react";
import { useState } from "react"; 
import Assigment2 from "./Assigment2";

export default function Week2 (){
  const [pokemons , setPokemons] = useState([])
  useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=90`)
      .then(res => res.json())
      .then(data => setPokemons(data.results))
    }, [])

  return (
    <div>
    <h1 className="flex">Hover item </h1>
   <div className="grid">
    
     {
       pokemons.map((pokemon , i) => (
        <Assigment2  key={i} poki={pokemon}/> 
       
       ))
     }
   
   </div>
  </div>
  )
}