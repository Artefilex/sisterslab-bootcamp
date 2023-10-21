import { useEffect, useState } from "react";
import "./week2.css";

export default function Assigment2({ poki }) {
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
    <div className="pokemon-area flex ">
      <header className="flex pokemon-header">
        <h2> {pokemon.name} </h2>
        <h4> Deneyim Puanı = {pokemon.experience}</h4>
        <div>
          {" "}
          <h2> Type </h2>
          {pokemon.types.map((item, i) => (
            <div key={i} className="flex-row">
              {" "}
              {item.type.name}{" "}
            </div>
          ))}
        </div>
      </header>
      <img src={pokemon.img} width={150} />
    </div>
  );
}
