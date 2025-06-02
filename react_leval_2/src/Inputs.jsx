// import { Box, Button, Input } from '@mui/material'
// import React, { useState } from 'react'

// function Inputs() {
//     const [Name, SetName] = useState('')
//     const [SurName, SetSurName] = useState('')
//     const [list, Setlist] = useState([])
//     const Submitdata = () => {
//         if ((Name && SurName) == "") {
    
//         }
//         else {
//             const obj = { Name, SurName }
//             // console.log(Name)
//             // console.log(SurName);
//             Setlist([...list, obj])
//             SetName('')
//             SetSurName('')
//         }
//     }
//     return (
//         <>
//             <Box>
//                 <Input type="text" required value={Name} onChange={(e) => SetName(e.target.value)} />
//                 <br /><br />
//                 <Input type="text" required value={SurName} onChange={(e) => SetSurName(e.target.value)} />
//                 <br /><br />
//                 <Button onClick={Submitdata} >Submit</Button>
//             </Box>
//             <br /><br />
//             <table border={1}>
//                 <tr>
//                     <td>Id</td>
//                     <td>Name</td>
//                     <td>SurName</td>
//                 </tr>
//                 {
//                     list.map((p, index) => (
//                         <tr>
//                             <td>{index + 1}</td>

//                             <td>{p.Name}</td>
//                             <td>{p.SurName}</td>
//                         </tr>
//                     ))
//                 }
//             </table>
//         </>
//     )
// }
// export default Inputs 

import { Box, Button, Input } from '@mui/material'
import React, { useState } from 'react'

function Inputs() {
    const [Name, SetName] = useState('')
    const [email, Setemail] = useState('')
    const [list, Setlist] = useState([])
    const Submit = () =>{
        if((Name && email) == ""){

        }
        else{

            const hp = {Name , email}

            Setlist([...list,hp])
            SetName('')
            Setemail('')
        }

    }
    return (
        <>
            <Box>
                <Input type="text" value={Name} onChange={(e) => SetName(e.target.value)} />
                <br /><br />
                <Input type="email" value={email} onChange={(e) => Setemail(e.target.value)} />
                <br /><br />
                <Button onClick={Submit}>Submit</Button>
            </Box>
            <br /><br />
            <table border={1}>
                <tr >
                    <td style={{padding:'10px'}}>Id</td>
                    <td style={{padding:'10px'}}>Name</td>
                    <td style={{padding:'10px'}}>Email</td>
                </tr>
                {
                    list.map((i,index) => (
                        <tr>
                            <td>{index +1}</td>
                            <td>{i.Name}</td>
                            <td>{i.email}</td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}

export default Inputs
