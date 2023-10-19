
import { useEffect } from "react";
import Week1 from "./week2/Week1";
import { useState } from "react";

function App() {
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
         <Week1  key={i} poki={pokemon}/> 
        
        ))
      }

    </div>
   </div>
  );
}

export default App;
