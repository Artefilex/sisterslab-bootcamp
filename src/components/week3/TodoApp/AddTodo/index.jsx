import { useCallback,  useState } from "react";
import { addTodo } from "../../../../store/todos/actions";
import { v4 as uuidv4} from "uuid";
export default function AddTodo() {
  const todoId =uuidv4();
  const [todo, setTodo] = useState({
    id: "",
    text: "",
  });

  const handleChange = (e) => {
    setTodo({
        id: todoId,
        text: e.target.value,
      });
  };
  const handleSubmit = useCallback((e) => {
      e.preventDefault();
      if (todo.text === "") {
        return alert("boş veri girme");
      }
      addTodo(todo);

      setTodo({
        id: "",
       text: "" 
      });
    },
    [todo]
  );

  return (
      <form onSubmit={handleSubmit} className="w-[90%] flex items-center  justify-center">
        <input type="text" onChange={handleChange} value={todo.text}  className="w-[80%] h-[3rem] px-4 py-2 bg-transparent outline-none border-2 border-bg-pokemon-card rounded-l-3xl border-r-0  text-white"/>
        <button className="border-2 border-bg-pokemon-card h-[3rem] px-4 py-2  font-bold text-white  border-l-0 rounded-r-3xl relative hover:bg-bg-navbar transition-colors duration-300" type="submit">Submit</button>
      </form>
   
  );
}
