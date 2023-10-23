import { useTodos } from "../../../../store/todos/hooks";
import { deleteTodo } from "../../../../store/todos/actions";
import { useState } from "react";
import EditTodo from "../EditTodo";
export default function AllTodos() {
  const { todos } = useTodos();
const [show, setShow] = useState(false) 

  return (
    <div className="w-[80%] flex flex-col items-start   mt-[5rem] text-[1.5rem] text-bg-pokemon-card">
      {todos.length > 0 &&
        todos.map((todo) => (
          <div
            key={todo.id}
            className="w-full flex flex-col items-center p-5 "
          >
         <div  className="w-full flex justify-between items-center p-5 min-h-[4rem] ">
         <div className="uppercase"> {todo.text} </div>{" "}
            <div>
              <button
                onClick={() => deleteTodo(`${todo.id}`)}
                className="bg-bg-red opacity-50  px-4 py-3 hover:opacity-100 transition-opacity duration-300"
              >
                Delete
              </button>
              <button
                onClick={() => setShow(!show)}
                className="bg-bg-green opacity-50  px-4 py-3 hover:opacity-100 transition-opacity duration-300"
              >
                Edit Todo
              </button>
            </div>
         </div>
         {todos.length > 0 &&  show && <EditTodo id={todo.id}/>}
       
          </div>
        ))}
    </div>
  );
}
