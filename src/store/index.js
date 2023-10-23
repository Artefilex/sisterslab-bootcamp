import { configureStore } from "@reduxjs/toolkit";
import todos from "./todos/index";
const store = configureStore({
    reducer:{
        todos
    }
})

export default store
