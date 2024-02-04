import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(10)
  const increaseCount = ()=>{
    if(count<20){
      setCount(count+1)
    }
  }
  const decreaseCount = ()=>{
    if(count>0){
      setCount(count-1)
    }
  }
  return (
    <>
      <button onClick={increaseCount} className="text-3xl font-bold underline">increase counter : {count}</button>
      <button onClick={decreaseCount} className="text-3xl font-bold underline">decrease counter : {count}</button>
    </>
  )
}

export default App
