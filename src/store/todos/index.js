import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}


const todos = createSlice({
    name : "todos",
    initialState,
    reducers:{
    _addTodo : (state, action) =>{
       state.todos.push(action.payload)
    },
    _deleteTodo: (state,action) =>{
     const updateTodos = state.todos.filter((todo) => todo.id !== action.payload)
       state.todos = updateTodos
    },
    _editTodo: (state,action) =>{
        const { id, text } = action.payload;
        const updatedTodos = state.todos.map((todo) => {
            if (todo.id === id) {
              // Eşleşme varsa, metni güncelle
              return { ...todo, text };
            } else {
              // Eşleşme yoksa, aynı todo öğesini koru
              return todo;
            }
          });
        state.todos =  updatedTodos
    }

    }
})

export const {_addTodo , _deleteTodo , _editTodo} = todos.actions

export default todos.reducer