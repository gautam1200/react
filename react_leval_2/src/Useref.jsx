import { Box, Button } from '@mui/material'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

function UseRef() {



  const [num, setnum] = useState(0)
  const data = useRef(0)
  useEffect(() => {
    data.current = num
  }, [num])



  const [number, setnumber] = useState(0)
  const datas = useMemo(() => {
    return number + 2
  }, [number])



  const [count, setCount] = useState(0)
  const change = useCallback(() => {
    setCount(count + 1)
  })



  return (
    <>

      <Box>
        <h1>{data.current}</h1>
        <h1>{num}</h1>
        <Button onClick={() => setnum(num + 1)}>useRef</Button>
      </Box>


      <Box>
        <h1>{datas}</h1>
        <h1>{number}</h1>
        <Button onClick={() => setnumber(number + 1)} >useMemo</Button>
      </Box>

      <Box>
        <h1>{count}</h1>
        <Button onClick={change} >useCallback</Button>
      </Box>
    </>
  )
}
export default UseRef