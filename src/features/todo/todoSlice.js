// Reducers are named as slicers in the RTK
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: "Work to do"
    }],
}

// Creating a slice(reducer used to call in RTK)
export const todoSlice = createSlice({
    // 3 mandatory properties required here name, initialState and reducers
    name: "todos",
    initialState,
    reducers: {
        // whereas in context Api, function is declared in here, Here function has to be defined
        // from a reducer, we'll get 2 items. 1, a state and another one is the action that'll bring params for the function when it is called
        addToDo: (state, action) => {
            const todo = {
                id: nanoid,
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeToDo: (state, action) => {
            state.todos.filter(todo => todo.id != action.payload)
        },
    }
})

// Have to export individual actions and reducers too in the store to use them
export const {addToDo, removeToDo} = todoSlice.actions

export default todoSlice.reducer