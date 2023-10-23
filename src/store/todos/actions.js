import store from "..";

import {_addTodo,_deleteTodo} from "."

export const addTodo = (data) => store.dispatch(_addTodo(data))
export const deleteTodo = (data) => store.dispatch(_deleteTodo(data))