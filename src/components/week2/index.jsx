import { useEffect } from "react";
import { useState } from "react"; 

import PokemonCard from "./PokemonCard";
import Assigment from "./assigment";

export default function Week2 (){
  const [pokemons , setPokemons] = useState([])
  useEffect(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=90`)
      .then(res => res.json())
      .then(data => setPokemons(data.results))
    }, [])

  return (
    <div className="w-full flex flex-col items-center justify-center">
       <h1 className="w-full text-center text-[2rem] my-8 py-3 border-y-4 border-white">Alıştırmalar</h1>
        <Assigment/>
    <h1 className="w-full text-center text-[2rem] mt-8 py-3 border-y-4 border-white">Hover item </h1>

    <div className=" grid grid-cols-1 tablet:grid-cols-2 deskop:grid-cols-3 place-content-center gap-8 py-8">    
    {
      pokemons.map((pokemon , i) => (
       <PokemonCard  key={i} poki={pokemon}/> 
      
      ))
    }

  
 
    </div>
  
   

  </div>
  )
}