import React,{useState} from "react";
import useMyContext from "../contexts/MyContext";
function Login() {
  const {setUser}=useMyContext()
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const onSubmit=(e) => {
    e.preventDefault()
    setUser({username,password})
  }
  return (
    <div className="w-screen grid place-content-center text-center">
      <div className="mt-20">
      <div className="flex gap-8">
        <input type="username" placeholder="username" 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        className="border rounded"
        />
        <input type="password" placeholder="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <button className='bg-slate-500 rounded-xl px-10 text-lg my-4'
      onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}
export default Login;
