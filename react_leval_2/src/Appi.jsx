import { Box, Button } from '@mui/material'
import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

function Appi() {
    const key = "SLuHa8G2soql5Snt"
    const [init, setinit] = useState({
        name: '',
        surname: '',
        number: ''
        
    })
    const [data, setdata] = useState([]);
    const [edit , setedit] = useState(null)

    const submitdata = (values, { resetForm }) => {
        const formData = new FormData()
        Object.entries(values).forEach(([key, val]) => {
            formData.append(key, val)
        })
        if(edit) {
            axios.patch(`https://generateapi.onrender.com/api/api/${edit}` ,formData , {
                headers : {
                    Authorization : key
                }
            })
            .then((Response) => {
                console.log(Response.data);
                getdata()
                setinit({
                    name : '',
                    surname : '',
                    number : '',
              
                })
                
            })
            .catch((error) => {
                console.log('error');
                
            })
        }
        else{
            axios.post(`https://generateapi.onrender.com/api/api`, formData, {
                headers: {
                    Authorization: key
                }
            })
                .then((Response) => {
                    console.log(Response.data)
                    getdata()
                    resetForm()
                })
                .catch((error) => {
                    console.log("hello");
                })
        }
    }
    const getdata = () => {
        axios.get(`https://generateapi.onrender.com/api/api`, {
            headers: {
                Authorization: key
            }
        })
            .then((Response) => {
                setdata(Response.data.Data)
            })
            .catch((error) => {
                console.log("error222");
            })
    }
    const delereData = (item) => {
        console.log(item._id);
        
        axios.delete(`https://generateapi.onrender.com/api/api/${item._id}`,{
            headers:{
                Authorization:key
            }
        })
        .then((Response) => {
            console.log(Response.data); 
            getdata() 
        })
        .catch((error) => {
            console.log('error12');
        })
    }
    getdata()

    const updateData = (item) => {
        setinit({
            name : item.name,
            surname : item.surname,
            number : item.number
        })
        setedit(item._id)
    }
    return (
        <>
            <Formik
                enableReinitialize
                initialValues={init}
                onSubmit={submitdata}>
                <Form>
                    <Field name="name" type="text" placeholder="Name" /> <br /><br />
                    <Field name="surname" type="text" placeholder="surname" /><br /><br />
                    <Field name="number" type="number" placeholder="number" /><br /><br />
                    <button type='submit' style={{
                        padding: '10px 20px',
                        fontSize: '20px',
                        color: 'green',
                        backgroundColor: 'ButtonFace'
                    }}>submit</button>
                </Form>
            </Formik>
                        <table border={1}>
                            <tr>
                                <th>name</th>
                                <th>Surname</th>
                                <th>Number</th>
                                <th>delete</th>
                                <th>update</th>
                            </tr>
                {
                    data.map((e, index) => (
                        <tr>
                            <td>{e.name}</td>
                            <td>{e.surname}</td>
                            <td>{e.number}</td>
                            <td><Button onClick={() => delereData(e)} color='error'>DELETE</Button></td>
                            <td><Button onClick={() => updateData(e)} color='primary'>UPDATE</Button></td>
                        </tr>
                    ))
                }
                </table>
        </>
    )
}
export default Appi