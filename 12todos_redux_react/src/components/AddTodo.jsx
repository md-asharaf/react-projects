import { useDispatch } from "react-redux";
import { addTodo,removeTodo,updateTodo } from "../features/Slice";
function AddTodo({ id,setId,value, input, setInput, setValue,setDisabled }) {
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (value === "Add Todo") {
      if (!input) return;
      dispatch(addTodo(input));
    }
    else{
      setDisabled(false)
      setValue("Add Todo");
      dispatch(!input?removeTodo(id):updateTodo({id,text:input}))
      setId('')
    }
    setInput("");
  };
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="w-[50%] bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {value}
      </button>
    </form>
  );
}
export default AddTodo;
