import { createSlice, nanoid } from '@reduxjs/toolkit';
const todos = JSON.parse(localStorage.getItem("todos")) || [];
export const slice = createSlice(
    {
        name: "todo",
        initialState: {
            id: "",
            todos
        },
        reducers: {
            addTodo: (state, action) => {
                state.todos.push({
                    id: nanoid(),
                    text: action.payload,
                    completed: false
                })
                localStorage.setItem("todos", JSON.stringify(state.todos))
            },
            removeTodo: (state, action) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload)
                state.id = "";
                localStorage.setItem("todos", JSON.stringify(state.todos))
            },
            updateTodo: (state, action) => {
                const { id, text, completed } = action.payload;
                if (text) { state.todos = state.todos.map((todo) => todo.id === id ? { ...todo, text } : todo) }
                else {
                    state.todos = state.todos.map((todo) => todo.id === id ? { ...todo, completed } : todo)
                }
                state.id = "";
                localStorage.setItem("todos", JSON.stringify(state.todos))
            },
            setId: (state, action) => {
                state.id = action.payload
            }
        }
    }
);
export const { addTodo, removeTodo, updateTodo, setId } = slice.actions
export default slice.reducer;