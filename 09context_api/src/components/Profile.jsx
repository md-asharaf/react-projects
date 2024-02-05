import React from 'react'
import useMyContext from '../contexts/MyContext'
function Profile() {
  const {user}=useMyContext()
  if(!user) return <div>please login</div>
  return <div className='w-screen grid place-content-center'>welcome {user.username}</div>
}

export default Profile