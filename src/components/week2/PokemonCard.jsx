import { useEffect, useState } from "react";


export default function PokemonCard({ poki }) {
  const { url } = poki;

  const [pokemon, setPokemon] = useState({
    id: "",
    name: "",
    types: [],
    sprites_back_default: "",
    base_experience: "",
  });
  useEffect(() => {
    const fetchdata = async () => {
      await fetch(`${url}`)
        .then((res) => res.json())
        .then((data) =>
          setPokemon({
            id: data.id,
            name: data.name,
            types: data.types,
            img: data.sprites.back_default,
            experience: data.base_experience,
          })
        );
    };
    fetchdata();
  }, [url]);

  return (
    <div className="relative w-[20rem] flex flex-col items-center justify-center gap-2 min-h-[20rem] bg-bg-pokemon-card rounded-lg tablet:w-[16rem] group opacity-70 hover:opacity-100 transition-all duration-500" >
      <header className="absolute text-center opacity-0 group-hover:opacity-100 items-center flex-col transition duration-300 top-9">
        <h2 className="uppercase font-extrabold text-center text-[1.5rem] "> {pokemon.name} </h2>
        <h4 className="font-semibold text-[1.2rem] "> Deneyim Puanı = {pokemon.experience}</h4>
        <div className="flex flex-col gap-2">
          <h2 className="font-semibold text-[1.2rem] border-b-2 border-bg-navbar"> TYPE </h2>
          <div className="flex flex-col gap-2 items-start">
          {pokemon.types.map((item, i) => (
            <h3 key={i} className="text-[1rem] font-semibold capitalize ">
              * {item.type.name}
            </h3> ))}
          </div>
        
         
        </div>
      </header>
      <img src={pokemon.img}   className="absolute  group-hover:scale-x-0  group-hover:opacity-0 duration-300  object-cover min-h-[15rem]"/>
    </div>
  );
}
