
import {useTodos} from "../../../../store/todos/hooks"
import { deleteTodo } from "../../../../store/todos/actions"
export default function AllTodos (){
  const {todos} = useTodos() 
  

    return (<div className="w-[80%] flex flex-col items-start   mt-[5rem] text-[1.5rem] text-bg-pokemon-card">
     {todos.length > 0 && (
      todos.map((todo) => (
         <div key={todo.id} className="w-full flex justify-between items-center p-5 min-h-[4rem] "> 
           <div className="uppercase"> {todo.text} </div>  <button onClick={()=> deleteTodo(`${todo.id}`)} className="bg-bg-red opacity-50  px-4 py-3 hover:opacity-100 transition-opacity duration-300"> Delete</button>
          </div>
      ))
     )}
    </div>)

}

