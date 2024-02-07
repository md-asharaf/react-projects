import {createSlice,nanoid} from '@reduxjs/toolkit';
export const slice=createSlice(
    {
        name:"todo",
        initialState:{
            todos:[]
        },
        reducers:{
            addTodo:(state,action)=>{
                state.todos.push({
                    id:nanoid(),
                    text:action.payload
                })
            },
            removeTodo:(state,action)=>{
                state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
            }
        }
    }
);
export const {addTodo, removeTodo}=slice.actions
export default slice.reducer;