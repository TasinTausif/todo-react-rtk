import { configureStore } from "@reduxjs/toolkit";
import {todoReducer} from "../features/todo/todoSlice"

// Store takes an obj as it's param
export const store = configureStore({
    reducer: todoReducer()
})