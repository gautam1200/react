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
    const [edit,setedit] = useState(null)
    const Submit = () =>{
        const hp = {Name , email}
        if((Name && email) == ""){

        }
        if(edit != null){
            const copydata = [...list]
            copydata[edit] = hp  
            Setlist(copydata)
            setedit(null)

        }
        else{
            Setlist([...list,hp])
        }
            SetName('')
            Setemail('')

        
    }
    const editdata = (item ,index) => {
        SetName(item.Name)
        Setemail(item.email)
        setedit(index)
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
                    <td style={{padding:'10px'}}>Button</td>

                </tr>
                {
                    list.map((i,index) => (
                        <tr>
                            <td>{index +1}</td>
                            <td>{i.Name}</td>
                            <td>{i.email}</td>
                            <td><Button onClick={() => editdata(i,index)}>edit</Button></td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}

export default Inputs








// import { Button, Input } from '@mui/material'
// import React, { useState } from 'react'

// function Inputs() {

//     const [name, setName] = useState('')
//     const [surname, setSurname] = useState('')
//     const [number, setNumber] = useState('')
//     const [password, setPassword] = useState('')
//     const [entries, setEntries] = useState([])
//     const [editId , setEditId] = useState(null)

//     const handleSubmit = () => {
//         if (!name || !surname || !number || !password) {
//             alert('Please enter all data')
//         } else {

//             const newEntry = { name, surname, number, password }

//             if(editId != null)
//                 {
//                     let copyData = [...entries]
//                     copyData[editId] = newEntry
//                     setEntries(copyData)
//                     setEditId(null)
//                 }
//                 else
//                 {
//                 setEntries([...entries, newEntry])
//             }
//             setName('')
//             setSurname('')
//             setNumber('')
//             setPassword('')
//         }
//     }

//     const deleteData = (index) => {
//         // console.log(index);

//         let copyData = [...entries]
//         copyData.splice(index,1)
//         setEntries(copyData)

//     }

//     const editData = (item , index) => {
//         console.log(item);
//         setName(item.name)
//         setSurname(item.surname)
//         setNumber(item.number)
//         setPassword(item.password)
//         setEditId(index)

//     }

//     return (
//         <>
//             <Input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
//             <br />
//             <Input type="text" value={surname} placeholder="Surname" onChange={(e) => setSurname(e.target.value)} />
//             <br />
//             <Input type="number" value={number} placeholder="Number" onChange={(e) => setNumber(e.target.value)} />
//             <br />
//             <Input type="password"  value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//             <br />
//             <Button variant="contained" onClick={handleSubmit}>Submit</Button>

//             <br /><br /><br />
//             <table border={1} style={{ width: '50%', margin: 'auto', textAlign: 'center' }}>
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Name</th>
//                         <th>Surname</th>
//                         <th>Number</th>
//                         <th>Password</th>
//                         <th>DELETE</th>
//                         <th>UPDATE</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {entries.map((entry, index) => (
//                         <tr key={index}>
//                             <td>{index + 1}</td>
//                             <td>{entry.name}</td>
//                             <td>{entry.surname}</td>
//                             <td>{entry.number}</td> 
//                             <td>{entry.password}</td>
//                             <td>
//                                 <button onClick={() => deleteData(index)}>DELETE</button>
//                             </td>
//                             <td>
//                                 <button onClick={() => editData(entry , index)}>EDIT</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </>
//     )
// }

// export default Inputs






// import { Box, Button, Input } from '@mui/material'
// import React, { useState } from 'react'

// function Inputs() {
//     const [Name, setName] = useState('')
//     const [SurName, setSurName] = useState('')
//     const [Number, setNumber] = useState('')
//     const [email, Setemail] = useState('')
//     const [password, setPassword] = useState('')
//     const [list, Setlist] = useState([])
//     const [editId, setEditId] = useState(null)


//     const jp = { Name, SurName, Number, email, password }
//     const data = () => {
//         if (!Name || !SurName || !Number || !email || !password) {
//             alert('enter data')
//         }
//         else {
//             if (editId != null) {
//                 let copydata = [...list]
//                 copydata[editId] = jp
//                 Setlist(copydata)
//                 setEditId(null)
//             }
//             else {
//                 Setlist([...list, jp])
//             }
//             setName('')
//             setSurName('')
//             setNumber('')
//             setPassword('')
//             Setemail('')
//         }
//     }
//     const updetdeta = (item, index) => {
//         console.log(item);
//         setName(item.Name)
//         setSurName(item.SurName)
//         setNumber(item.Number)
//         setPassword(item.password)
//         Setemail(item.email)
//         setEditId(index)
//     }

//     const deletedata = (index) => {
//         // console.log(index)
//         let copydata = [...list]
//         copydata.splice(index, 1)
//         Setlist(copydata)
//     }


//     return (
//         <>
//             <Box>
//                 <Input width="400px" type="text" value={Name} onChange={(e) => setName(e.target.value)} /> <br />
//                 <Input type="text" value={SurName} onChange={(e) => setSurName(e.target.value)} /> <br />
//                 <Input type="number" value={Number} onChange={(e) => setNumber(e.target.value)} /> <br />
//                 <Input type="email" value={email} onChange={(e) => Setemail(e.target.value)} /> <br />
//                 <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
//                 <Button onClick={data}>Submit</Button> <br /><br />

//                 <table border={10} style={{ width: '80%', margin: 'auto', textAlign: 'center' }}>
//                     <tr>
//                         <td style={{ padding: '10px', fontFamily: 'math', fontSize: '20px', fontWeight: '600', background: ' linear-gradient(135deg, #D16BA5 0%, #F0A202 25%, #F9F7CF 50%, #86A8E7 75%, #5B3E96 100%)' }}>Id</td>
//                         <td style={{ padding: '10px', fontFamily: 'math', fontSize: '20px', fontWeight: '600', background: ' linear-gradient(135deg, #D16BA5 0%, #F0A202 25%, #F9F7CF 50%, #86A8E7 75%, #5B3E96 100%)' }}>Name</td>
//                         <td style={{ padding: '10px', fontFamily: 'math', fontSize: '20px', fontWeight: '600', background: ' linear-gradient(135deg, #D16BA5 0%, #F0A202 25%, #F9F7CF 50%, #86A8E7 75%, #5B3E96 100%)' }}>SurName</td>
//                         <td style={{ padding: '10px', fontFamily: 'math', fontSize: '20px', fontWeight: '600', background: ' linear-gradient(135deg, #D16BA5 0%, #F0A202 25%, #F9F7CF 50%, #86A8E7 75%, #5B3E96 100%)' }}>Number</td>
//                         <td style={{ padding: '10px', fontFamily: 'math', fontSize: '20px', fontWeight: '600', background: ' linear-gradient(135deg, #D16BA5 0%, #F0A202 25%, #F9F7CF 50%, #86A8E7 75%, #5B3E96 100%)' }}>Email</td>
//                         <td style={{ padding: '10px', fontFamily: 'math', fontSize: '20px', fontWeight: '600', background: ' linear-gradient(135deg, #D16BA5 0%, #F0A202 25%, #F9F7CF 50%, #86A8E7 75%, #5B3E96 100%)' }}>Password</td>
//                         <td style={{ padding: '10px', fontFamily: 'math', fontSize: '20px', fontWeight: '600', background: ' linear-gradient(135deg, #D16BA5 0%, #F0A202 25%, #F9F7CF 50%, #86A8E7 75%, #5B3E96 100%)' }}>Delete</td>
//                         <td style={{ padding: '10px', fontFamily: 'math', fontSize: '20px', fontWeight: '600', background: ' linear-gradient(135deg, #D16BA5 0%, #F0A202 25%, #F9F7CF 50%, #86A8E7 75%, #5B3E96 100%)' }}>Updet</td>
//                     </tr>
//                     {
//                         list.map((entry, index) => (
//                             <tr>
//                                 <td>{index + 1}</td>
//                                 <td>{entry.Name}</td>
//                                 <td>{entry.SurName}</td>
//                                 <td>{entry.Number}</td>
//                                 <td>{entry.email}</td>
//                                 <td>{entry.password}</td>
//                                 <td><Button onClick={() => deletedata(index)}>Delete</Button></td>
//                                 <td><Button onClick={() => updetdeta(entry, index)}>Updet</Button></td>
//                             </tr>
//                         ))
//                     }
//                 </table>

//             </Box>
//         </>
//     )
// }
// export default Inputs













// import { Box } from '@mui/material'
// import React from 'react'

// function Inputs() {
//     return (
//         <>
            {/* <Box class="space-tunnel">
  <Box class="cube-frame"></Box>
  <Box class="cube-frame"></Box>
  <Box class="cube-frame"></Box>
  <Box class="cube-frame"></Box>
  <Box class="cube-frame"></Box>
  <Box class="cube-frame"></Box>
  <Box class="cube-frame"></Box>
  <Box class="cube-frame"></Box>
</Box>


<Box class="description-container">
  <Box class="title">3D Tunnel</Box>
  <Box class="subtitle">pure css</Box>
</Box>

<Box class="author-container">
  <Box class="picture"></Box>
  <Box class="title">@SylvainGarnot</Box>
</Box> */}
            {/* <div class="wrapper">
                <div class="container">
                    <div class="wall">
                        <div class="surface"></div>
                        <div class="surface"></div>
                        <div class="left"></div>
                        <div class="top"></div>
                    </div>
                    <div class="wall">
                        <div class="surface"></div>
                        <div class="surface"></div>
                        <div class="left"></div>
                        <div class="top"></div>
                    </div>
                    <div class="wall">
                        <div class="surface"></div>
                        <div class="surface"></div>
                        <div class="left"></div>
                        <div class="top"></div>
                    </div>
                    <div class="wall">
                        <div class="surface"></div>
                        <div class="surface"></div>
                        <div class="left"></div>
                        <div class="top"></div>
                    </div>
                    <div class="wall">
                        <div class="surface"></div>
                        <div class="surface"></div>
                        <div class="left"></div>
                        <div class="top"></div>
                    </div>
                    <div class="wall">
                        <div class="surface"></div>
                        <div class="surface"></div>
                        <div class="left"></div>
                        <div class="top"></div>
                    </div>
                    <div class="ball-container">
                        <div class="ball"></div>
                    </div>
                </div>
            </div> */}
          {/* <Box className="scene">

  <Box className="back"></Box>

  <Box className="slider" style={{ "--t": 0 }}>
    <i style={{ "--i": 0 }}></i>
    <i style={{ "--i": 1 }}></i>
    <i style={{ "--i": 2 }}></i>
    <i style={{ "--i": 3 }}></i>
    <i style={{ "--i": 4 }}></i>
    <i style={{ "--i": 5 }}></i>
  </Box>

  <Box className="slider" style={{ "--t": 1 }}>
    <i style={{ "--i": 0 }}></i>
    <i style={{ "--i": 1 }}></i>
    <i style={{ "--i": 2 }}></i>
    <i style={{ "--i": 3 }}></i>
    <i style={{ "--i": 4 }}></i>
    <i style={{ "--i": 5 }}></i>
  </Box>

  <Box className="slider" style={{ "--t": 2 }}>
    <i style={{ "--i": 0 }}></i>
    <i style={{ "--i": 1 }}></i>
    <i style={{ "--i": 2 }}></i>
    <i style={{ "--i": 3 }}></i>
    <i style={{ "--i": 4 }}></i>
    <i style={{ "--i": 5 }}></i>
  </Box>

  <Box className="slider" style={{ "--t": 3 }}>
    <i style={{ "--i": 0 }}></i>
    <i style={{ "--i": 1 }}></i>
    <i style={{ "--i": 2 }}></i>
    <i style={{ "--i": 3 }}></i>
    <i style={{ "--i": 4 }}></i>
    <i style={{ "--i": 5 }}></i>
  </Box>

  <Box className="slider" style={{ "--t": 4 }}>
    <i style={{ "--i": 0 }}></i>
    <i style={{ "--i": 1 }}></i>
    <i style={{ "--i": 2 }}></i>
    <i style={{ "--i": 3 }}></i>
    <i style={{ "--i": 4 }}></i>
    <i style={{ "--i": 5 }}></i>
  </Box>

  <Box className="slider" style={{ "--t": 5 }}>
    <i style={{ "--i": 0 }}></i>
    <i style={{ "--i": 1 }}></i>
    <i style={{ "--i": 2 }}></i>
    <i style={{ "--i": 3 }}></i>
    <i style={{ "--i": 4 }}></i>
    <i style={{ "--i": 5 }}></i>
  </Box>

  <Box className="slider" style={{ "--t": 6 }}>
    <i style={{ "--i": 0 }}></i>
    <i style={{ "--i": 1 }}></i>
    <i style={{ "--i": 2 }}></i>
    <i style={{ "--i": 3 }}></i>
    <i style={{ "--i": 4 }}></i>
    <i style={{ "--i": 5 }}></i>
  </Box>

  <Box className="slider" style={{ "--t": 7 }}>
    <i style={{ "--i": 0 }}></i>
    <i style={{ "--i": 1 }}></i>
    <i style={{ "--i": 2 }}></i>
    <i style={{ "--i": 3 }}></i>
    <i style={{ "--i": 4 }}></i>
    <i style={{ "--i": 5 }}></i>
  </Box>

  <Box className="slider" style={{ "--t": 8 }}>
    <i style={{ "--i": 0 }}></i>
    <i style={{ "--i": 1 }}></i>
    <i style={{ "--i": 2 }}></i>
    <i style={{ "--i": 3 }}></i>
    <i style={{ "--i": 4 }}></i>
    <i style={{ "--i": 5 }}></i>
  </Box>

  <Box className="slider" style={{ "--t": 9 }}>
    <i style={{ "--i": 0 }}></i>
    <i style={{ "--i": 1 }}></i>
    <i style={{ "--i": 2 }}></i>
    <i style={{ "--i": 3 }}></i>
    <i style={{ "--i": 4 }}></i>
    <i style={{ "--i": 5 }}></i>
  </Box>

  <Box className="ball">
    <Box className="innerBall"></Box>
  </Box>

</Box> */}

{/* 
        </>
    )
}

export default Inputs */}
