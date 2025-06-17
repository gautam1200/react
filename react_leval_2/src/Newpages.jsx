// import React, { useContext } from 'react'
import { useContext } from 'react';
import { AddColor } from './Hooks';
// import { AddColor } from './UseContext'

function NewPage() {

    const {SetColor} = useContext(AddColor)
    console.log(SetColor);
    

    return (
    <div>
        <h1 style={{color:SetColor}}>page 3</h1>
        <h2 style={{color:SetColor}}>hello</h2>
    </div>
  )
}

export default NewPage