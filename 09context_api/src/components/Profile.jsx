import React from 'react'
import UseMyContext from '../contexts/useMyContext'
function Profile() {
  const {user}=UseMyContext()
  if(!user) return <div>please login</div>
  return <div className='w-screen grid place-content-center'>welcome {user.username}</div>
}

export default Profile