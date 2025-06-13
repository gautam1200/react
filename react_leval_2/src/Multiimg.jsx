
import { Box } from '@mui/material';
import axios from 'axios';
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'

function Multiimg() {
   const [init, setinit] = useState({
        name: "",
        images: []
    })
    const [data, setdata] = useState([])
    const dataView = () => {
        axios.get('https://generateapi.onrender.com/api/multiphoto', {
            headers: {
                Authorization: 'LUdnjyzlN2az7Acq',
            }
        })
            .then((res) => {
                console.log("hyy");
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
        axios.post(` https://generateapi.onrender.com/api/multiphoto`, values, {
            headers: {
                Authorization: 'LUdnjyzlN2az7Acq',
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
        axios.delete(`https://generateapi.onrender.com/api/multiphoto/${id}`, {
            headers: {
                Authorization: 'LUdnjyzlN2az7Acq',
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
                            <input type="file" multiple onChange={(a) => setFieldValue("images", a.target.files[0])} />
                            <button type='submit'> submit</button>
                        </Form>
                    )
                }
            </Formik>

            <Box >
                {
                    data.map((e) => (
                        <>
                            <img src={e.images} alt="" width={'200'} />
                            <button onClick={() => deletdata(e._id)}>delete </button>
                        </>
                    ))
                }
            </Box>
        </>
    )
}

export default Multiimg


// LUdnjyzlN2az7Acq


// POST : https://generateapi.onrender.com/api/multiphoto
// GET : https://generateapi.onrender.com/api/multiphoto
// DELETE : https://generateapi.onrender.com/api/multiphoto/:id
// PATCH : https://generateapi.onrender.com/api/multiphoto/:id
// images



