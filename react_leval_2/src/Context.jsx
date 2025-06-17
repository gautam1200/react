import { Button } from '@mui/material'
import React, { createContext, useContext, useState } from 'react'
import Contextsec from './Contextsec';


export const addremove = createContext();


function Contexts() {
  const [count , setcount] = useState(0)
  const add = () => {
    return setcount(count + 1)
  }
  const remove = () => {
    return setcount(count - 1)
  }
  return (
    <>
      <addremove.Provider value ={{ setcount : count ,add , remove }}>
        <Contextsec/>
      </addremove.Provider>
      
    </>
  )
}

export default Contexts
