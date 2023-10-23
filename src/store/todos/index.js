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
    }

    }
})

export const {_addTodo , _deleteTodo} = todos.actions

export default todos.reducer