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
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={todo.text} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
