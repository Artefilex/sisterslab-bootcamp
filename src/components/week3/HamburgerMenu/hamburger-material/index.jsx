import PropTypes from "prop-types"
export default function HamburgerMaterial ({selectedIngredients}) {
    console.log(selectedIngredients)
    const totalPrice =   selectedIngredients.reduce((total , item) =>{
        return total +(item.price * item.count)
    } ,0)
    console.log(totalPrice)
    return (
        <div className="flex  flex-col gap-4 w-[80%] mt-5">
              <h2 className="text-[1.7rem] font-bold">Malzemeler</h2>
        <ul>
          {selectedIngredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.name} x {ingredient.count}
            </li>
          ))}
        </ul>

        
          {  totalPrice > 0 &&<div className=""> Toplam Tutar :{totalPrice} TL </div>   }
       
        </div>
    )
}

HamburgerMaterial.propTypes = {
    selectedIngredients: PropTypes.array.isRequired
}