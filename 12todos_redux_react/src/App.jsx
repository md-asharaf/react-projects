import { useState } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
function App() {
    const [input, setInput] = useState("");
    const [value, setValue] = useState("Add Todo");
    const [id, setId] = useState("");
    const [disabled, setDisabled] = useState(false);
    return (
        <div className="w-1/2 mx-auto text-center">
            <AddTodo
                id={id}
                setId={setId}
                value={value}
                input={input}
                setInput={setInput}
                setValue={setValue}
                setDisabled={setDisabled}
            />
            <Todos
                setInput={setInput}
                setValue={setValue}
                setId={setId}
                id={id}
                disabled={disabled}
                setDisabled={setDisabled}
            />
        </div>
    );
}

export default App;
