import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo, setId } from "../features/Slice";
import logo from "../assets/edit.png";
function Todos() {
    const dispatch = useDispatch();
    let todos = useSelector((state) => state.todos);
    const id = useSelector((state) => state.id);
    if (todos.length === 0)
        return <div className="my-4 text-white text-2xl">No Todos</div>;
    return (
        <>
            <div className="my-4 text-white text-4xl border-b-[1px] border-b-gray-500 pb-4 mb-8">
                TODOS
            </div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className={`bg-zinc-800 mt-4 flex ${
                            todo.id === id ? "bg-red-600" : ""
                        } justify-between items-center  px-4 py-2 rounded`}
                        key={todo.id}
                    >
                        <div>
                            <span
                                className={`text-white ${
                                    todo.id == id || todo.completed
                                        ? "line-through text-gray-600"
                                        : ""
                                }`}
                            >
                                {todo.text}
                            </span>
                            <span className="ml-4 text-green-500 text-sm">
                                {todo.completed && "completed"}
                            </span>
                        </div>
                        <div className="flex w-1/2 lg:w-1/4 justify-between">
                            <input
                                disabled={id}
                                type="checkbox"
                                defaultChecked={todo.completed}
                                onChange={() =>
                                    dispatch(
                                        updateTodo({
                                            id: todo.id,
                                            completed: !todo.completed,
                                        })
                                    )
                                }
                                className="h-8 w-8"
                            />
                            <button
                                disabled={id}
                                className={`rounded px-2 py-1 ${
                                    todo.id == id
                                        ? "bg-red-400"
                                        : "bg-green-400"
                                } ${
                                    id
                                        ? "opacity-50"
                                        : "hover:bg-green-600 hover:scale-[0.9] opacity-100"
                                }`}
                                onClick={() => {
                                    dispatch(setId(todo.id));
                                }}
                            >
                                <img src={logo} alt="" className="h-[25px]" />
                            </button>
                            <button
                                disabled={id}
                                onClick={() => {
                                    dispatch(removeTodo(todo.id));
                                }}
                                className={`text-white bg-red-500 border-0 ${
                                    id ? "opacity-50" : "opacity-100"
                                } py-1 px-2 focus:outline-none  ${
                                    !id
                                        ? "hover:bg-red-600 hover:scale-[0.9]"
                                        : ""
                                } rounded text-md`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default Todos;
