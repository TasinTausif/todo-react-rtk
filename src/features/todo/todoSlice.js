// Reducers are named as slicers in the RTK
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: nanoid(),
        text: "Work to do"
    }],
}

// Creating a slice(reducer used to call in RTK)
export const todoSlice = createSlice({
    // 3 mandatory properties required here name, initialState and reducers
    name: "todo",//Name is used for the prefix of action type and used only by the redux devtools, so can't match it with the array key of state
    initialState,
    reducers: {
        // whereas in context Api, function is declared in here, Here function has to be defined
        // from a reducer, we'll get 2 items. 1, a state and another one is the action that'll bring params for the function when it is called
        addToDo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeToDo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id != action.payload)
        },
    }
})

// Have to export individual actions in the store to use them
export const {addToDo, removeToDo} = todoSlice.actions

export default todoSlice.reducer