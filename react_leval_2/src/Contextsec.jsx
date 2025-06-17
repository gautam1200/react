import { Button } from '@mui/material'
import React, { useContext } from 'react'
import Contexts, { addremove } from './Context'

function Contextsec() {
    
const {setcount} = useContext(addremove)
const {add} = useContext(addremove)
const {remove} = useContext(addremove)

    return (
        <>
        <h1>{setcount}</h1>
            <Button onClick={add}>add</Button>
            <Button onClick={remove}>remove</Button>
        </>
    )
}

export default Contextsec
