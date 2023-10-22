const pokemons = [
    { id: 3, name: 'Bulbasaur', type: 'Grass', experience: 64 },
    { id: 7, name: 'Charmander', type: 'Fire', experience: 62 },
    { id: 13, name: 'Squirtle', type: 'Water', experience: 63 },
    { id: 56, name: 'Caterpie', type: 'Bug', experience: 39 },
    { id: 1408, name: 'Ekans', type: 'Poison', experience: 58 },
    { id: 63, name: 'Eevee', type: 'Normal', experience: 65 },
    { id: 27, name: 'Pikachu', type: 'Electric', experience: 112 },
    { id: 31, name: 'Pidgey', type: 'Flying', experience: 50 },
    { id: 21, name: 'Meowth', type: 'Normal', experience: 58 },
    { id: 22, name: 'Snorlax', type: 'Normal', experience: 154 },
    { id: 35, name: 'Psyduck', type: 'Water', experience: 64 },
  ];

  const typeWater = pokemons.filter((pokemon) => pokemon.type == "Water")
  console.log(typeWater)
  console.log(typeWater.map((pokemon) => pokemon.name))

  const doubledExperience = pokemons.map(pokemon => {
    return {
        name: pokemon.name,
        experience: pokemon.experience * 2
    };
});

console.log(doubledExperience)

const allWaterPokemonsHighExperience = pokemons.filter((pokemon) => pokemon.type === "Water").every((pokemon) => pokemon.experience > 60 )

console.log(
  "Tüm 'Water' türündeki Pokemonlar deneyim puanı en az 60 mı?",
  allWaterPokemonsHighExperience
);
 


const someFirePokemonHighExperience = pokemons.some((pokemon) => pokemon.type === "Fire " >= 70)

  console.log(
    "'Fire' türündeki Pokemonlardan en az biri deneyim puanı 70 veya daha fazla mı?",
    someFirePokemonHighExperience
  );


const  totalElectricExperience = pokemons.filter((pokemon) => pokemon.type === "Electric").reduce((total , pokemon ) => {
    return total + pokemon.experience
}, 0 )

  console.log(
    "Electric türündeki Pokemon'ların toplam deneyim puanı: " +
      totalElectricExperience
  );



  
  const typeAverages =    pokemons.reduce((accumulator, pokemon) => {
    const { type, experience } = pokemon;
    if (!accumulator[type]) {
        accumulator[type] = { total: 0, count: 0 };
    }
    accumulator[type].total += experience;
    accumulator[type].count += 1;
    return accumulator;
}, {});
for (const type in typeAverages) {
    typeAverages[type] = typeAverages[type].total / typeAverages[type].count;
}
console.log(typeAverages) 


export default pokemons