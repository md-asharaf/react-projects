import React, { useState } from "react";
import useTodoContext from "../contexts/useTodoContext";

function TodoItem({ todoItem }) {
  const { deleteTodo, updateTodo } = useTodoContext();
  const [todo, setTodo] = useState(todoItem.todo);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        isCompleted ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={isCompleted}
        onChange={() => {
          setIsCompleted(!isCompleted);
        }}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isEditable ? "border-black/10 px-2" : "border-transparent"
        } ${isCompleted ? "line-through" : ""}`}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        readOnly={!isEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (isEditable) {
            updateTodo(todoItem.id, todo);
          }
          setIsEditable(!isEditable);
        }}
        disabled={isCompleted}
      >
        {isEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todoItem.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
