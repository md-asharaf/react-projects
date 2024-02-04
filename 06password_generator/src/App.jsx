import { useCallback, useEffect, useState,useRef } from 'react'

function App() {
  const [password,setPassword] = useState("")
  const [length,setLength] = useState(8)
  const [numAlllowed,setNumAlllowed] = useState(false)
  const [charAlllowed,setCharAlllowed] = useState(false)
  const passwordRef=useRef(null)
  const generatePassword=useCallback(()=>{
    let pass=""
    let set="QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm"
    if(charAlllowed) set+='`$;:"?}{)(*&^%$#@!~`-_=+'
    if(numAlllowed) set+=`1234567890`
    for (let i = 0; i < length; i++) {
      const element = set.charAt(Math.floor(Math.random()*set.length))
      pass+=element 
    }
    setPassword(pass)
  },[length,charAlllowed,numAlllowed,setPassword])
  useEffect(generatePassword,[length,charAlllowed,numAlllowed,setPassword])
  return (
    <>
      <div className='w-full max-w-lg shadow-md rounded-lg bg-gray-800 mx-auto my-8 px-8 py-6 text-orange-500'>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
              <input 
              type="text"
              value={password}
              placeholder='password'
              className='outline-none w-full py-1 px-3'
              ref={passwordRef}
              readOnly 
              />
              <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
              onClick={()=>{
                passwordRef.current?.select()
                window.navigator.clipboard.writeText(password)
              }}>copy</button>
          </div>
          <div className='flex gap-x-3'>
            <input type="range" min={8} max={30} className='' value={length} onChange={(e)=>setLength(e.target.value)}/>
            <label >Length:{length}</label>
            <input type="checkbox" id='numberInput' defaultChecked={numAlllowed} onChange={()=>setNumAlllowed(!numAlllowed)} />
            <label htmlFor='numberInput'>Numbers</label>
            <input type="checkbox" id='characterInput' defaultChecked={charAlllowed} onChange={()=>setCharAlllowed(!charAlllowed)} />
            <label htmlFor='characterInput'>Characters</label>
          </div>
      </div>
    </>
  )
}

export default App
