import PropTypes from "prop-types"
import { useState } from "react"
import { useEffect } from "react"
export default function HamburgerMaterial ({selectedIngredients}) {
 
    const totalPrice =   selectedIngredients.reduce((total , item) =>{
        return total +(item.price * item.count)
    } ,0)
  
   const [convert , setConvert] = useState(null)

    useEffect(()=>{
      fetchData()
    },[])
   useEffect(()=>{
    const updateInterval = 2 * 60 * 60 * 1000; 
    const updateData = () => {
      fetchData()
    }
    const intervalId = setInterval(updateData, updateInterval)
    return () => {
      clearInterval(intervalId); // Component unmount olduğunda interval'i temizle
    };
   },[])

    const fetchData = ()=> {
      fetch(`https://v6.exchangerate-api.com/v6/${import.meta.env.VITE_BANK_DATA_API}/latest/TRY`)
       .then((res) => res.json())
      .then((data) => setConvert(data.conversion_rates))
    }
   
    return (
        <div className="flex  flex-col gap-4 w-full max-w-[35rem] mt-5 tablet:mt-0 ">
              <h2 className="text-[1.7rem] font-bold">Malzemeler</h2>
        <ul>
          {selectedIngredients.map((ingredient) => (
            <li key={ingredient.id}>
              {ingredient.name} x {ingredient.count}
            </li>
          ))}
        </ul>

        
          {  totalPrice > 0 && (
            <div className="flex flex-col gap-2 border-none outline-none"> 
            <span>Toplam Tutar :{totalPrice} TL</span>
            <select className="p-2.5  bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-[1.6rem]"> 
              <option  value={convert.USD} selected > {(totalPrice * convert.USD) / convert.TRY } USD</option>
              <option value={convert.GBT}>  {(totalPrice * convert.GBP) / convert.TRY} PAUND</option>
              <option value={convert.GBT}>  {(totalPrice * convert.EUR) / convert.TRY} EURO</option>
              <option value={convert.GBT}>  {(totalPrice * convert.RUB) / convert.TRY} RUS Rublesi</option>
            </select> 
            </div>
          )  }
       
        </div>
    )
}

HamburgerMaterial.propTypes = {
    selectedIngredients: PropTypes.array.isRequired
}