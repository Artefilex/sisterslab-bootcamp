import AddTodo from "./AddTodo";
import AllTodos from "./AllTodos";

export default function TodoApp() {
  return (
    <div className="flex flex-col items-center justify-center px-2 mb-[20rem]">
      <h1 className="w-[80%] text-center text-[2rem] my-8 py-3 border-b-4 border-white"> Todo App</h1>
      <AddTodo />
      <AllTodos />
    </div>
  );
}
