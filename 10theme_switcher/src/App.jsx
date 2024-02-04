import { useEffect, useState } from "react";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import { ContextProvider } from "./contexts/UseContext";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = ()=>{
    const root=document.getElementById('root')
    root.classList.remove('dark','light')
    root.classList.add(theme)
  }
  useEffect(toggleTheme, [theme]);

  return (
    <ContextProvider value={{ theme, setTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;