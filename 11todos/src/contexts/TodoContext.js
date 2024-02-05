import React, { createContext, useContext } from "react";
export const context = createContext({
  todos: [],
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  addTodo: (todo) => {},
});
function useTodoContext() {
  return useContext(context);
}
export const ContextProvider = context.Provider;
export default useTodoContext;
