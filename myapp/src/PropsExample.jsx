// import React from 'react'

// const PropsExample = (props) => {
//   return (
//     <div>
//         <h1>{props.demo}</h1>
//     </div>
//   )
// }

// export default PropsExample

// import React from 'react'

// const PropsExample = ({demo}) => {
//   return (
//     <div>
//         <h1>{demo}</h1>
//     </div>
//   )
// }

// export default PropsExample

// import React from 'react'

// const PropsExample = ({demo}) => {
//   return (
//     <div>
//         <h1>{demo.name}</h1>
//         <h1>{demo.age}</h1>
//     </div>
//   )
// }

// export default PropsExample


// import React from 'react'

// const PropsExample = ({demo}) => {
//   return (
//     <div>
//         <h1>{demo[0].name}</h1>
//         <h1>{demo[0].age}</h1>
//         <h1>{demo[1].name}</h1>
//         <h1>{demo[1].age}</h1>
//     </div>
//   )
// }

// export default PropsExample



import React from 'react'

const PropsExample = ({demo}) => {


    const checkFunction = () => {
        return "hello"
    }

    const passValue = (index) => {
        return index + 1
    }


  return (
    <div>
        <table border={1}>
            <tr>
                <td>Name</td>
                <td>AGe</td>
                <td>check</td>
                <td>passValue</td>
            </tr>
            {
                demo.map((item , index) => {
                    return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    )
                })
            }
            {/* {
                demo.map((item , index) => (
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{checkFunction()}</td>
                        <td>{passValue(index)}</td>
                    </tr>
                ))
            } */}
        </table>
    </div>
  )
}

export default PropsExample