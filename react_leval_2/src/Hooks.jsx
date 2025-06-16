import { Box, Button } from '@mui/material'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

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
        </>
    )
}

export default Hooks
