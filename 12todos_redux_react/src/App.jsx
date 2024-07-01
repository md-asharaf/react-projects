import { useState } from "react";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
function App() {
    const [id, setId] = useState("");
    return (
        <div className="w-1/2 mx-auto text-center">
            <AddTodo id={id} setId={setId} />
            <Todos id={id} setId={setId} />
        </div>
    );
}

export default App;
