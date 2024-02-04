import { useState } from 'react'
function Html() {
  const [color, setColor] = useState("olive")
    return (
        <>
        <div style={{backgroundColor: color}} id="main" className="w-screen h-screen text-white">
            <div id="white-container" className="fixed flex flex-wrap justify-center py-2 bg-white gap-7 bottom-24 rounded-3xl inset-x-0 mx-40">
                <button onClick={()=>setColor("red")} className="rounded-2xl px-4 py-1 shadow-lg" style={{backgroundColor:"red"}}>red</button>
                <button onClick={()=>setColor("green")} className="rounded-2xl px-4 py-1 shadow-lg" style={{backgroundColor:"green"}}>green</button>
                <button onClick={()=>setColor("blue")} className="rounded-2xl px-4 py-1 shadow-lg" style={{backgroundColor:"blue"}}>blue</button>
                <button onClick={()=>setColor("olive")} className="rounded-2xl px-4 py-1 shadow-lg" style={{backgroundColor:"olive"}}>olive</button>
                <button onClick={()=>setColor("gray")} className="rounded-2xl px-4 py-1 shadow-lg" style={{backgroundColor:"gray"}}>gray</button>
                <button onClick={()=>setColor("yellow")} className="rounded-2xl text-black px-4 py-1 shadow-lg" style={{backgroundColor:"yellow"}}>yellow</button>
                <button onClick={()=>setColor("pink")} className="rounded-2xl text-black px-4 py-1 shadow-lg" style={{backgroundColor:"pink"}}>pink</button>
                <button onClick={()=>setColor("purple")} className="rounded-2xl px-4 py-1 shadow-lg" style={{backgroundColor:"purple"}}>purple</button>
                <button onClick={()=>setColor("lavender")} className="rounded-2xl text-black px-4 py-1 shadow-lg" style={{backgroundColor:"lavender"}}>lavender</button>
                <button onClick={()=>setColor("white")} className="rounded-2xl text-black px-4 py-1 shadow-lg" style={{backgroundColor:"white"}}>white</button>
                <button onClick={()=>setColor("black")} className="rounded-2xl px-4 py-1 shadow-lg" style={{backgroundColor:"black"}}>black</button>
            </div>
        </div>
        </>
    )
}
export default Html