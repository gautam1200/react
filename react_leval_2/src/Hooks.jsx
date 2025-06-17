import { Box, Button } from '@mui/material'
// import SetContext from './SetContext';
import React, { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import UseMemo from './UseMemo';


export const AddColor = createContext();


function Hooks() {


    const [count, setcount] = useState(0)
    const change = useCallback(() => {
        setcount(count + 1)
    })



    const [num, setnum] = useState(0)
    const data = useRef(0)
    useEffect(() => {
        data.current = num
        console.log("++");

    }, [num])


    const [number, setnumber] = useState(0)
    const datas = useMemo(() => {
        console.log("--");

        return number * 4
    }, [number])


    const [color, setColor] = useState("red")

    return (
        <>
            <Box>
                <h2>UseCallback</h2>
                <h1>{count}</h1>
                <Button onClick={change} >useCallback</Button>
            </Box>


            <Box>
                <h2>UseRef</h2>

                <h1>{data.current}</h1>
                <h1>{num}</h1>
                <Button onClick={() => setnum(num + 1)} >useRef</Button>
            </Box>

            <Box>
                <h2>UseMemo</h2>

                <h1>{datas}</h1>
                <h1>{number}</h1>
                <Button onClick={() => setnumber(number + 1)} >useMemo</Button>
            </Box>



            <AddColor.Provider value={{ SetColor: color }}>
                <Box>
                    <h1 style={{ color: color }}>page 1</h1>
                    <UseMemo />
                </Box>
            </AddColor.Provider>

        </>
    )
}

export default Hooks
