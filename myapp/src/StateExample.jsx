import React, { useState } from 'react'

const StateExample = () => {

    // get set
    // alpha , num , null , unde , [] , {} , [{}] , ''
    const [text , setText] = useState('demo1')
    const [num, setNum] = useState(0)

    const changeFunction = () => {
        setText("change")
    }

    const changeNum = (item) => {
        setNum(num - item)
    }

  return (
    <div>
        {text}

        <h2>{num}</h2>
        <br /><br />
        {/* run time , argu pass */}

        <button onClick={() => setText('Good Afternoon') }>Good Afternoon</button>

        <button onClick={changeFunction}>Function</button>

        <button onClick={() => setNum(num + 1)}>++++</button>

        <button onClick={() => changeNum(10)}>-----</button>
    </div>
  )
}

export default StateExample
