import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        { id: 1, text: 'My 1st todo' }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nanoid(),
                text: action.payload
            })
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((obj) => {
                return obj.id !== action.payload
            })
        },
        updateTodo: (state, action) => {
            for (let todo of state.todos) {
                if (todo.id === action.payload.id) {
                    todo = action.payload.todo;
                    break;
                }
            }
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer