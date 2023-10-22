import { useState } from 'react';
import ingredientsToAdd from '../../../constants/week3';

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
  return (
    <div>
      <h1>Hamburger App</h1>
      <div>
        <h2>Malzemeler</h2>
        <ul>
          {selectedIngredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.name} x {ingredient.count}
            </li>
          ))}
        </ul>

        <h2>Eklenecek Malzemeler</h2>
        <ul>
          {ingredientsToAdd.map((ingredient) => (
            <li key={ingredient.id}>
              <p>
                {ingredient.name} <b />
                <button onClick={() => addIngredient(ingredient)}>Ekle</button>
                <button onClick={() => removeIngredient(ingredient)}>
                  Cikar
                </button>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerApp;