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
        state.todos.filter((todo) => todo.id !== action.payload)
    }

    }
})

export const {_addTodo , _deleteTodo} = todos.actions

export default todos.reducer