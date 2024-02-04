import React, { useState } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';
import { UserContextProvider } from './contexts/useMyContext';
function App() {
  const [user,setUser]=useState({})
  return (
    <UserContextProvider value={{user,setUser}}>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
