import { Box, Button, Typography } from '@mui/material'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
function Cardapi() {
    const token = "chLoCE3bCS0wVAzC"
    const [init, setinit] = useState({
        Name: '',
        Surname: '',
        Email: '',
        Number: '',
        Description: '',
        Profileimg: ''
    })
    const [data, setdata] = useState([])
    const [file, setfile] = useState(null)
    const [edit, setedit] = useState(null)
    const submitdata = (values, { resetForm }) => {
        const formData = new FormData()
        Object.entries(values).forEach(([key, val]) => {
            formData.append(key, val)
        })
        if (edit) {
            axios.patch(`https://generateapi.onrender.com/api/Cards/${edit}`,formData, {
                headers: {
                    Authorization: token
                }
            })
                .then((Response) => {
                    console.log(Response.data);
                    getdata()
                    setinit({
                        Name: '',
                        Surname: '',
                        Email: '',
                        Number: '',
                        Description: '',
                        Profileimg: ''
                    })

                })
                .catch((error) => {
                    alert("hello")
                })
        } else {
            axios.post(`https://generateapi.onrender.com/api/Cards`, formData, {
                headers: {
                    Authorization: token
                }
            })
                .then((Response) => {
                    console.log(Response.data);
                    getdata()
                    resetForm()
                })
                .catch((error) => {
                    alert("hello")
                })
        }
    }
    const getdata = () => {
        axios.get(`https://generateapi.onrender.com/api/Cards`, {
            headers: {
                Authorization: token
            }
        })
            .then((Response) => {
                // console.log(Response.data.Data);
                setdata(Response.data.Data)
            }).catch((error) => {
                console.error("hello", error);
            })
    }
    const deletedata = (item) => {
        console.log(item._id);

        axios.delete(`https://generateapi.onrender.com/api/Cards/${item._id}`, {
            headers: {
                Authorization: token
            }
        })
            .then((Response) => {
                console.log(Response.data);
                getdata()
            }).catch((error) => {
                console.error("hello", error);
            })
    };
    getdata()

    const editdata = (item) => {
        setinit({
             Name: item.Name,
             Surname: item.Surname,
             Email: item.Email,
             Number: item.Number,
             Description: item.Description,
             Profileimg: item.Profileimg
         })
        setedit(item._id)
        setfile(item.Profileimg)
    }

    return (
        <>
            <Formik
                enableReinitialize
                initialValues={init}
                onSubmit={submitdata}
            >
                {({ setFieldValue }) => (
                    <Form>
                        <Field name="Name" type="text" placeholder="Name"></Field> <br /><br />
                        <Field name="Surname" type="text" placeholder="SurName"></Field> <br /><br />
                        <Field name="Email" type="email" placeholder="Email"></Field><br /><br />
                        <Field name="Number" type="number" placeholder="Number"></Field><br /><br />
                        <Field name="Description" type="text" placeholder="Bio"></Field><br /><br />
                        <input
                            name='Profileimg'
                            type="file"
                            accept="image/*"
                            required
                            onChange={(event) => {
                                const file = event.currentTarget.files[0]
                                if (!file) return
                                setfile(URL.createObjectURL(file))
                                setFieldValue('Profileimg', file)
                            }}
                            style={{ display: "block", marginTop: 8 }}
                        /> <br /><br />
                        <button type='submit' style={{padding:'10px 20px',
                            fontSize:'20px',
                            color:'green',
                            backgroundColor:'ButtonFace'
                        }}>submit</button>
                    </Form>)}
            </Formik>


            <Box width={'100%'} padding={'0'} display={'flex'} flexWrap={'wrap'}>
                {
                    data.map((e, index) => (
                        <Box sx={{
                            width: '29%',
                            border: '2px solid black',
                            borderRadius: '10px',
                            padding: '15px',
                            margin: '10px 10px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <Box width={'200px'} height={'200px'} borderRadius={'50%'} overflow={'hidden'}>
                                <img src={e.Profileimg} alt="" width={'140%'} />
                            </Box>
                            <Box textAlign={'center'}>
                                <Typography margin={'10px'} fontSize={'22px'} fontFamily={'math'} fontWeight={'600'}>{e.Name}     {e.Surname}</Typography>
                                <Typography fontSize={'18px'} margin={'10px 0'}>{e.Email}</Typography>
                                <Typography fontSize={'18px'} margin={'10px 0'} fontWeight={'600'} >{e.Number}</Typography>
                                <Typography>{e.Description}</Typography>
                            </Box>
                            <Box>

                            <Button onClick={() => deletedata(e)} color='error'>DELETE</Button>
                            <Button onClick={() => editdata(e)} color='primary'>UPDATE</Button>
                            </Box>
                        </Box>

                    ))
                }
            </Box>
        </>
    )
}
// chLoCE3bCS0wVAzC
export default Cardapi

// import { Box, Button, Typography } from '@mui/material'
// import axios from 'axios'
// import { Field, Form, Formik } from 'formik'
// import React, { useEffect, useState } from 'react'

// function Cardapi() {
//     const token = "chLoCE3bCS0wVAzC"
//     const [init, setInit] = useState({
//         Name: '',
//         Surname: '',
//         Email: '',
//         Number: '',
//         Description: '',
//         Profileimg: ''
//     })
//     const [data, setData] = useState([])
//     const [file, setFile] = useState(null)
//     const [edit, setEdit] = useState(null)

//     const getdata = () => {
//         axios.get(`https://generateapi.onrender.com/api/Cards`, {
//             headers: { Authorization: token }
//         })
//             .then((res) => setData(res.data.Data))
//             .catch((error) => console.error("Error fetching data:", error))
//     }

//     useEffect(() => {
//         getdata()
//     }, [])

//     const submitdata = (values, { resetForm }) => {
//         const formData = new FormData()
//         Object.entries(values).forEach(([key, val]) => {
//             if (key === "Profileimg" && (!val || typeof val === 'string')) return
//             formData.append(key, val)
//         })

//         const config = { headers: { Authorization: token } }

//         if (edit) {
//             axios.patch(`https://generateapi.onrender.com/api/Cards/${edit}`, formData, config)
//                 .then((res) => {
//                     console.log("Updated:", res.data)
//                     getdata()
//                     setEdit(null)
//                     setInit({
//                         Name: '',
//                         Surname: '',
//                         Email: '',
//                         Number: '',
//                         Description: '',
//                         Profileimg: ''
//                     })
//                     resetForm()
//                     setFile(null)
//                 })
//                 .catch((error) => {
//                     console.error("Error updating:", error)
//                 })
//         } else {
//             axios.post(`https://generateapi.onrender.com/api/Cards`, formData, config)
//                 .then((res) => {
//                     console.log("Created:", res.data)
//                     getdata()
//                     resetForm()
//                     setFile(null)
//                 })
//                 .catch((error) => {
//                     console.error("Error creating:", error)
//                 })
//         }
//     }

//     const deletedata = (item) => {
//         axios.delete(`https://generateapi.onrender.com/api/Cards/${item._id}`, {
//             headers: { Authorization: token }
//         })
//             .then((res) => {
//                 console.log("Deleted:", res.data)
//                 getdata()
//             })
//             .catch((error) => console.error("Error deleting:", error))
//     }

//     const editdata = (item) => {
//          setInit({
//              Name: item.Name,
//              Surname: item.Surname,
//              Email: item.Email,
//              Number: item.Number,
//              Description: item.Description,
//              Profileimg: item.Profileimg
//          })
//         setEdit(item._id)
//         setFile(item.Profileimg)
//     }

//     return (
//         <>
//             <Formik
//                 enableReinitialize
//                 initialValues={init}
//                 onSubmit={submitdata}
//             >
//                 {({ setFieldValue }) => (
//                     <Form>
//                         <Field name="Name" type="text" placeholder="Name" /> <br /><br />
//                         <Field name="Surname" type="text" placeholder="Surname" /> <br /><br />
//                         <Field name="Email" type="email" placeholder="Email" /> <br /><br />
//                         <Field name="Number" type="number" placeholder="Number" /> <br /><br />
//                         <Field name="Description" type="text" placeholder="Bio" /> <br /><br />
//                         <input
//                             name="Profileimg"
//                             type="file"
//                             accept="image/*"
//                             onChange={(event) => {
//                                 const file = event.currentTarget.files[0]
//                                 if (!file) return
//                                 setFile(URL.createObjectURL(file))
//                                 setFieldValue('Profileimg', file)
//                             }}
//                             style={{ display: "block", marginTop: 8 }}
//                             required={!edit}
//                         />
//                         {file && (
//                             <Box marginTop={2}>
//                                 <img src={file} alt="Preview" width="100" height="100" style={{ borderRadius: '10px' }} />
//                             </Box>
//                         )}
//                         <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}>
//                             {edit ? "Update" : "Submit"}
//                         </Button>
//                     </Form>
//                 )}
//             </Formik>

//             <Box width="100%" padding="0" display="flex" flexWrap="wrap">
//                 {data.map((e) => (
//                     <Box
//                         key={e._id}
//                         sx={{
//                             width: '29%',
//                             border: '2px solid black',
//                             borderRadius: '10px',
//                             padding: '15px',
//                             margin: '10px 10px',
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center'
//                         }}
//                     >
//                         <Box width="200px" height="200px" borderRadius="50%" overflow="hidden">
//                             <img src={e.Profileimg} alt={`${e.Name} ${e.Surname}`} width="140%" />
//                         </Box>
//                         <Box textAlign="center" marginTop={2}>
//                             <Typography fontSize="22px" fontFamily="math" fontWeight="600">{e.Name} {e.Surname}</Typography>
//                             <Typography fontSize="18px" margin="10px 0">{e.Email}</Typography>
//                             <Typography fontSize="18px" margin="10px 0" fontWeight="600">{e.Number}</Typography>
//                             <Typography>{e.Description}</Typography>
//                         </Box>
//                         <Button onClick={() => deletedata(e)} color="error">DELETE</Button>
//                         <Button onClick={() => editdata(e)} color="primary">UPDATE</Button>
//                     </Box>
//                 ))}
//             </Box>
//         </>
//     )
// }

// export default Cardapi
// // POST : https://generateapi.onrender.com/api/Cards
// // GET : https://generateapi.onrender.com/api/Cards
// // DELETE : https://generateapi.onrender.com/api/Cards/:id
// // PATCH : https://generateapi.onrender.com/api/Cards/:id
