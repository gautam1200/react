import { Box, Button } from '@mui/material'
import axios, { all } from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

function Newapi() {
    const key = 'tmTOqNDCW5aKYEu8'
    const [init, setinit] = useState({
        name: '',
        surname: '',
        number: '',
        photo: []
    })
    const [data, setdata] = useState([])
    const [edit, setedit] = useState(null)


    const submitdata = (values, { resetForm }) => {
        const formData = new FormData();
        Object.entries(values).forEach(([key, val]) => {
            formData.append(key, val);
        });
        if (edit) {
            axios.patch(`https://generateapi.onrender.com/api/new/${edit}`, formData, {
                headers: {
                    Authorization: key,
                    'Content-Type': 'multipart/form-data',
                }
            })
                .then((Response) => {
                    getdata()
                    setinit({ 
                        name: '', 
                        surname: '', 
                        number: '', 
                        photo: [""] 
                    });
                    resetForm()
                })
                .catch((error) => {
                    console.log('error');

                })
        }
        else {
            axios.post('https://generateapi.onrender.com/api/new', formData, {
                headers: {
                    Authorization: key,
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then((response) => {
                    console.log(response.data);
                    getdata();
                    resetForm();
                })
                .catch((error) => {
                    console.error('Error:', error);
                })
        }
    }


    const getdata = () => {
        axios.get(`https://generateapi.onrender.com/api/new`, {
            headers: {
                Authorization: key,
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((Response) => {
                setdata(Response.data.Data)

            })
            .catch((error) => {
                console.log("error222");
            })
    }
    const deletedata = (item) => {
        console.log(item._id);
        axios.delete(`https://generateapi.onrender.com/api/new/${item._id}`, {
            headers: {
                Authorization: key,
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((Response) => {
                console.log(Response.data);

                getdata()
            })
            .catch((error) => {
                console.log('error delete');
            })
    }
    getdata()

    const updatedata = (item) => {
        setinit({
            name: item.name,
            surname: item.surname,
            number: item.number,
            photo: item.photo[0]
        })
        setedit(item._id)
    }
    return (
        <>
            <Formik
                enableReinitialize
                initialValues={init}
                onSubmit={submitdata}>
                {({ setFieldValue }) => (

                    <Form encType='multipart/form-data'>
                        <Field name='name' type='text' placeholder='name'></Field> <br /><br />
                        <Field name='surname' type='text' placeholder='surname'></Field><br /><br />
                        <Field name='number' type='number' placeholder='Mo number'></Field><br /><br />
                        <input
                            type="file"
                            onChange={(e) => setFieldValue('photo', e.currentTarget.files[0])}
                        />
                       
                        <Button type='submit'> Submit</Button>
                    </Form>
                )}
            </Formik>

            <table border={1}>
                <tr>
                    <th>Name</th>
                    <th>surname</th>
                    <th>number</th>
                    <th>Photo</th>
                    <th>Delete</th>
                    <th>Update</th>
                </tr>
                {
                    data.map((item) => (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.surname}</td>
                            <td>{item.number}</td>
                            <td><img src={item.photo} alt="" width={'50px'} /></td>
                            <td><Button onClick={() => deletedata(item)} color='error'>delete</Button></td>
                            <td><Button onClick={() => updatedata(item)} color='primary'>Update</Button></td>
                        </tr>
                    ))
                }
            </table>

            <Box sx={{
                width:'100px',
                height:'100px',
                backgroundColor:'red',
                transition : '3s',
                '&:hover':{
                    width:'200px',
                    height:'200px',
                    backgroundColor:'yellow',
                    transition : '3s',
                    borderRadius:'0 50px 50px 0'
                }

            }}>

            </Box>

        </>
    )
}

export default Newapi
{/* //  https://generateapi.onrender.com/api/new */}