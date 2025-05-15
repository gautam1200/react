// import React, { useState } from 'react'

// function State() {
//     const [text , setText] =useState('hello')
//   return (
//     <div>
//         {text}
//         {setText}

// <br /><br />
//         <button onClick={() => setText("hello gautam")}>hello gautam</button>
//     </div>
    
//   )
// }

// export default State
//    const [text , setText] = useState("hello")    

import React, { useState } from 'react'

function State() {
const [text , setText] = useState("HYY");

const [num , setNum] = useState(0)

function main(){
    setText("gautam")
}
function gautam(){
    setText("hello gautam")
    document.getElementsByClassName('red')[0].style.color = "green"
}
function gautam1(){
    setText("Good morning")
    document.getElementsByClassName('red')[0].style.color = "red"
}
function gautam2(){
    setText("Good Afternoon")
    document.getElementsByClassName('red')[0].style.color = "blue"
}
function gautam3(){
    setText("Good night")
    document.getElementsByClassName('red')[0].style.color = "yellow"
}
// function main1(item){
//     setNum(num - item)
// }
  return (
    <>
    <h1 className='red'>{text}</h1>

     <button onClick={gautam }>Hello gautam</button>
     <button onClick={gautam1}>Good morning</button>
     <button onClick={gautam2}>Good Afternoon</button>
     <button onClick={gautam3}>Good night</button>
     <br /><br />
    <h2>{num}</h2>
     <button onClick={() => setNum(num + 1 )}>+1</button>
     <button onClick={() => setNum(num - 1 )}>-1</button>
     <button onClick={() => setNum(num + 5)}> +5</button>
     <button onClick={() => setNum(num - 5)}> +5</button>
    </>
  )
} 
export default State


