// import React from 'react'

// function Fom(props) {
//   return (
//     <div>
//       <h1>hello</h1>
//       <p>{props.demo}</p>
//     </div>
//   )
// }




// export default Fom
// import React from 'react'

// function Fom({demo}) {
//   return (
//     <div>
//       <h1>{demo.name}</h1>
//       <h1>{demo.age}</h1>
//     </div>
//   )
// }

// export default Fom


// import React from 'react'

// function Fom({demo}) {
//   return (
//     <div>
//       <h1>name : {demo[0].name} ||  age : {demo[0].age}</h1>
//       <h1>name : {demo[1].name} ||  age : {demo[1].age}</h1>
//       <h1>name : {demo[2].name} ||  age : {demo[2].age}</h1>
//       <h1>name : {demo[3].name} ||  age : {demo[3].age}</h1>
//     </div>
//   )
// }

// export default Fom


import React from 'react'

function Fom({demo}) {

  const main = (index) =>{
    return (index+1)+ "hello"
  }
  const main1 = (index) => {
    return index + 1
  }

  return (
    <>
      <table border={2}>
        <tr>
            <td>name</td>
            <td>age</td>
            <td>Check</td>
            <td>Passvalue</td>
        </tr>
        {
          demo.map((item , index) =>  (
              <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{main(index)}</td>
                <td>{main1(index)}</td>
              </tr>
            )
          )
        }
      </table>
    </>
  )
}
 export default Fom


