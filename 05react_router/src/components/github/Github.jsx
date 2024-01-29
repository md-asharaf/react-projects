import React, { useEffect } from 'react'
import { useState } from 'react';
function Github() {
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch('https://api.github.com/users/md-asharaf')
        .then((response)=>response.json())
        .then((d)=>{setData(d)})
    },[])

  return (<>
    <div className='text-center bg-gray-500 max-w-xs mx-auto my-4'>Followers: {data.followers}</div>
    <img src={data.avatar_url} className='rounded-[50%] w-[300px] h-[300px] mx-auto mb-4' alt="github profile image" />
    </>
  )
}

export default Github