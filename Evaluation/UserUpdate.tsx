import React, { useState} from 'react'

const State = () => {
    const [user ,setUser]=useState({name:"user"})

    const handleCick=()=>{
        const updatedUser={name:"updated user"}
        setUser(updatedUser)
    }

  return (
    <>
    <button onClick={handleCick}>Click</button>
    <h3>{user.name}</h3>
    </>
  )
}

export default State;