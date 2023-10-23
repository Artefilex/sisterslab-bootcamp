
import {useTodos} from "../../../../store/todos/hooks"
export default function AllTodos (){
  const {todos} = useTodos() 

    return (<div>
     {todos.length > 0 && (
      todos.map((todo) => (
         <div key={todo.id}>  {todo.text}  </div>
      ))
     )}
    </div>)

}

