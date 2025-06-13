import React, { useCallback, useState } from 'react'

function UseCallback() {
    const [count, setCount] = useState(0)

    const Change = useCallback(() => {
        setCount(count + 1)
    })
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={Change}>click me</button>
        </div>
    )
}

export default UseCallback