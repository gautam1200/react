// import axios from 'axios'
// import { Field, Form, Formik } from 'formik'
// import React, { useEffect, useState } from 'react'

// const ApiCallingImage = () => {

//     const [ini, setIni] = useState({
//         name: '',
//         image: ''
//     })

//     const dataView = () => {
//         axios.get('https://generateapi.onrender.com/api/userImage' , {
//             headers : {
//                 Authorization : 'CMUFZQvEMkKl8b53',
//             }
//         })
//         .then((res) => {
//             console.log(res.data.Data);
//         })
//         .catch((error) => {
//             console.log(error);
//         })
//     }

//     useEffect(() => {
//         dataView()
//     } , [])

//     const handleSubmit = (values) => {
//         // console.log(values);
//         // let data = new FormData()
//         // data.append("name" , values.name)
//         // data.append("image" , values.image)

//         axios.post('https://generateapi.onrender.com/api/userImage' , values , {
//             headers : {
//                 Authorization : 'CMUFZQvEMkKl8b53',
//                 'Content-Type' : 'multipart/form-data'
//             }
//         })
//         .then(() => {
//             console.log("Success");
//         })
//         .catch((error) => {
//             console.log(error);
//         })

//     }

//     return (
//         <div>
//             <Formik
//                 initialValues={ini}
//                 onSubmit={handleSubmit}
//             >
//                 {
//                     ({setFieldValue}) => (
//                         <Form encType='multipart/form-data'>
//                             <Field name="name"></Field> <br /><br />
//                             <input type="file" name="" id="" onChange={(e) => setFieldValue("image" , e.target.files[0])
//                             } /> <br /><br />
//                             <button type='submit'>Submit</button>
//                         </Form>
//                     )
//                 }
//             </Formik>
//         </div>
//     )
// }

// export default ApiCallingImage





// 5iPIsa9olZ9YjlB2

import { Box } from '@mui/material';
import axios from 'axios';
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'

function Nextpage() {
    const [init, setinit] = useState({
        name: "",
        image: ""
    })
    const [data, setdata] = useState([])
    const dataView = () => {
        axios.get('https://generateapi.onrender.com/api/userImage', {
            headers: {
                Authorization: 'CMUFZQvEMkKl8b53',
            }
        })
            .then((res) => {
                console.log(res.data.Data);
                setdata(res.data.Data)

            })
            .catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        dataView()
    }, [])

    const handlesubmit = (values, { resetForm }) => {
        console.log(values);
        axios.post(`  https://generateapi.onrender.com/api/userImage`, values, {
            headers: {
                Authorization: 'CMUFZQvEMkKl8b53',
                'Content-Type': 'multipart/form-data'
            }
        })

            .then(() => {
                console.log("sucsess")
                dataView();
                resetForm()
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const deletdata = (id) => {
        axios.delete(`https://generateapi.onrender.com/api/userImage/${id}`, {
            headers: {
                Authorization: 'CMUFZQvEMkKl8b53',
                'Content-Type': 'multipart/form-data'
            },
        })
            .then((res) => {
                console.log("hello");
                dataView()
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <Formik
                enableReinitialize
                initialValues={init}
                onSubmit={handlesubmit}>
                {
                    ({ setFieldValue }) => (
                        <Form encType='multipart/form-data'>
                            <Field name="name" placeholder="Name" ></Field> <br /><br />
                            <input type="file" onChange={(a) => setFieldValue("image", a.target.files[0])} />
                            <button type='submit'> submit</button>
                        </Form>
                    )
                }
            </Formik>

            <Box >
                {
                    data.map((e) => (
                        <>
                            <img src={e.image} alt="" width={'200'} />
                            <button onClick={() => deletdata(e._id)}>delete </button>
                        </>
                    ))
                }
            </Box>
        </>
    )
}

export default Nextpage
