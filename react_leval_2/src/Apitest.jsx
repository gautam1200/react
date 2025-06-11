import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'

const Apitest = () => {

    const token = 'D0hDHkIZ3RowxrNR'

    const [ini, setIni] = useState({
        username: '',
        password: ''
    })

    // const [no , setNo] = useState(0)

    const [data, setData] = useState([])
    const [editId, setEditID] = useState(null)

    const handleSubmit = (values, { resetForm }) => {
        const { _id, ...rest } = values

        if (editId != null) {
            // axios.patch(`https://generateapi.onrender.com/api/user/${editId}` , {
            //     username : values.username,
            //     password : values.password
            // } , {
            //     headers : {
            //         Authorization : token
            //     }
            // })

            axios.patch(`https://generateapi.onrender.com/api/user/${editId}`, rest, {
                headers: {
                    Authorization: token
                }
            })
                .then((res) => {
                    console.log(res.data.Status);
                    setIni({
                        username: '',
                        password: ''
                    })
                    dataView()
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        else {
            axios.post('https://generateapi.onrender.com/api/user', values, {
                headers: {
                    Authorization: token
                }
            })
                .then((res) => {
                    console.log(res.data.Status);
                    resetForm()
                    dataView()
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    const dataView = () => {
        axios.get('https://generateapi.onrender.com/api/user', {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                console.log(res.data.Data);
                setData(res.data.Data)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const deleteData = (id) => {
        // console.log(id);
        // axios.delete('https://generateapi.onrender.com/api/user/'+id)
        axios.delete(`https://generateapi.onrender.com/api/user/${id}`, {
            headers: {
                Authorization: token
            }
        })
            .then((res) => {
                console.log(res.data.Status);
                dataView()
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const updateData = (item) => {
        // console.log("==>" , item);
        setIni(item)
        setEditID(item._id)
    }


    // dependency
    // [] => empty [one]
    // [no [state]]
    // [value , value]

    useEffect(() => {
        dataView()
    }, [])


    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={ini}
                onSubmit={handleSubmit}
            >
                <Form>
                    <Field name="username"></Field> <br /><br />
                    <Field name="password"></Field> <br /><br />
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>


            <table border={1}>
                <tr>
                    <td>Id</td>
                    <td>username</td>
                    <td>password</td>
                    <td>DELETE</td>
                    <td>Update</td>
                </tr>
                {
                    data.map((i, index) => (
                        <tr>
                            <td>{index + 1}</td>
                            <td>{i.username}</td>
                            <td>{i.password}</td>
                            <td>
                                <button onClick={() => deleteData(i._id)}>DELETE</button>
                            </td>
                            <td>
                                <button onClick={() => updateData(i)}>UPDATE</button>
                            </td>
                        </tr>
                    ))
                }
            </table>

            {/* <button></button> */}

        </div>
    )
}

export default Apitest
