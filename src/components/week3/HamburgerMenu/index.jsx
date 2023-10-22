import { useState } from "react";
import ingredientsToAdd from "../../../constants/week3";
import HamburgerMaterial from "./hamburger-material";

const HamburgerApp = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const addIngredient = (ingredient) => {
    const isAdded = selectedIngredients.find(
      (item) => item.id === ingredient.id
    );

    if (isAdded) {
      setSelectedIngredients(
        selectedIngredients.map((item) => {
          if (item.id === ingredient.id) {
            return { ...item, count: item.count + 1 };
          }
          return item;
        })
      );
    } else {
      setSelectedIngredients([
        ...selectedIngredients,
        {
          ...ingredient,
          count: 1,
        },
      ]);
    }
  };
 
  const  removeIngredient = (ingredient) =>{
    const isAdded = selectedIngredients.find(
      (item) => item.id === ingredient.id
    );
    if(isAdded ){
      setSelectedIngredients(
        selectedIngredients.map((item) => {
          if (item.id === ingredient.id) {
            return { ...item, count: item.count > 0 ? item.count -1 : 0 };
          }
          return item;
        })
      );
    }
  }
  return (
    <div className="w-full flex items-center flex-col">
      <h1 className="w-[80%] text-center text-[2rem] my-8 py-3 border-b-4 border-white">  Hamburger App </h1>
    
      <div className="w-full flex flex-col tablet:flex-row items-center tablet:items-start justify-around text-white text-[1.4rem]">     
        <div className="flex flex-col gap-5  ">
          <h2 className="text-[1.7rem] font-bold">Eklenecek Malzemeler</h2>
          <ul className="w-full flex flex-col gap-5">
            {ingredientsToAdd.map((ingredient) => (
              <li key={ingredient.id} className="flex justify-between gap-9 w-full">
               <span> {ingredient.name}</span>
              <div className="flex gap-8">
              <button className="font-bold border px-5 bg-bg-green hover:opacity-50 transition-opacity outline-none duration-300 relative active:top-[2px]" onClick={() => addIngredient(ingredient)}>Ekle</button>
             {selectedIngredients.filter((item) => item.id=== ingredient.id).map((item) =>(
             ( item.count > 0) && (
                <button  className="font-bold border px-5 bg-bg-red hover:opacity-50 transition-opacity outline-none duration-300 relative active:top-[2px]"  key={ingredient.id} onClick={() => removeIngredient(ingredient)} > Çıkar </button>
              ) 
             )) }
              </div>
              </li>
            ))}
            
          </ul>
        </div>
        <HamburgerMaterial selectedIngredients={selectedIngredients} />

      </div>
    </div>
  );
};

export default HamburgerApp;
