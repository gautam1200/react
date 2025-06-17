import { Button } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React, { createContext, useState } from 'react'
import Formcontexts from './Formcontexts'

export const Formdatas = createContext()

function Formcontext() {
    const [init, setinit] = useState(
       {
        name : '',
        surname : '',
        number : ''
       } 
    )
    const [data , setdata] = useState([])
    const submitdata = (values ,{resetForm}) => {
        console.log(values);
        setdata([...data , values])
        resetForm()
        
    }


    return (
        <>
        <Formdatas.Provider value={{data}} >
            <Formik
                enableReinitialize
                initialValues={init}
                onSubmit={submitdata}>
                <Form>
                    <Field type='text' name='name' placeholder="name" /> <br /><br />
                    <Field type='text' name='surname' placeholder="surname" /> <br /><br />
                    <Field type='number' name='number' placeholder="number" /> <br /><br />
                    <Button type="submit"> submit </Button>
                </Form>
            </Formik>
        <Formcontexts />
        </Formdatas.Provider>

            
        </>
    )
}

export default Formcontext
