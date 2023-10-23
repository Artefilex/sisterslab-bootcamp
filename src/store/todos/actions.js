import store from "..";

import {_addTodo,_deleteTodo, _editTodo} from "."

export const addTodo = (data) => store.dispatch(_addTodo(data))
export const deleteTodo = (data) => store.dispatch(_deleteTodo(data))
export const editTodo = (data) => store.dispatch(_editTodo(data))