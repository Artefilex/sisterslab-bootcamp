import { useState } from "react"
import { editTodo } from "../../../../store/todos/actions"
import PropTypes from "prop-types"
import { useTodos } from "../../../../store/todos/hooks"
export default function EditTodo ({id}) {
   
    const {todos} = useTodos()
    const filteredTodo =  todos.find((todo) => todo.id === id)
    console.log(filteredTodo)
     const [updateTodo , setUpdateTodo] = useState({ text: filteredTodo.text })
    

    const handleSubmit = (e) => {
     e.preventDefault()
     editTodo({ id: filteredTodo.id, text: updateTodo.text });
    }
    const handleChange = (e) =>  {
       setUpdateTodo((prevState) =>({
        ...prevState,
        text :  e.target.value
       }))   
    }
    return (
        <form onSubmit={handleSubmit} className="w-full flex items-center   justify-center">
          <input type="text" onChange={handleChange} value={updateTodo.text}  className="w-[90%] h-[3rem] px-5 py-3 bg-transparent outline-none border-2 border-bg-pokemon-card rounded-l-3xl border-r-0  text-white"/>
           <button className="border-2 border-bg-pokemon-card h-[3rem] px-4 py-2  font-bold text-white  border-l-0 rounded-r-3xl relative hover:bg-bg-navbar transition-colors duration-300" type="submit">Submit</button>
      </form>
    )
}

EditTodo.propTypes = {
 id : PropTypes.any.isRequired
}