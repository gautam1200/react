import { Button } from '@mui/material';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'

function Apiget() {
    const [data, setdata] = useState([])
    const [init, setinit] = useState({
        Name: '',
        Surname: '',
        RollNo: '',
        Gujrati: '',
        Hindi: '',
        English: '',
        Math: '',
    })
    const [edit, setedit] = useState(null)
    const Token = "WzGDj2xp8XAFeYUH "

    const handleSubmit = (values, { resetForm }) => {
        // console.log(values);
        const { _id, ...rest } = values
        if (edit !== null) {
            // axios.patch(`https://generateapi.onrender.com/api/Result/${edit}`, {
            //     Name: values.Name,
            //     Surname: values.Surname,
            //     RollNo: values.RollNo,
            //     Gujrati: values.Gujrati,
            //     English: values.English,
            //     Hindi: values.Hindi,
            //     Math: values.Math
            // }, 
            axios.patch(`https://generateapi.onrender.com/api/Result/${edit}`, rest,
                {
                    headers: {
                        Authorization: Token
                    }
                })
                .then((Response) => {
                    console.log(Response.data.Status);
                    dataget()
                    setinit({
                        Name: '',
                        Surname: '',
                        RollNo: '',
                        Gujrati: '',
                        Hindi: '',
                        English: '',
                        Math: ''
                    })

                }).catch((error) => {
                    console.error("hello", error);
                })
        } else {
            axios.post(`https://generateapi.onrender.com/api/Result`, values, {
                headers: {
                    Authorization: Token
                }
            })
                .then((Response) => {
                    // console.log(Response.data.Status);
                    dataget()
                    resetForm()
                }).catch((error) => {
                    console.error("hello", error);
                })
        }
    }

    const dataget = () => {
        axios.get(` https://generateapi.onrender.com/api/Result`, {
            headers: {
                Authorization: Token
            }
        })
            .then((Response) => {
                // console.log(Response.data.Data);
                setdata(Response.data.Data)
            }).catch((error) => {
                console.error("hello", error);
            })
    }
    dataget()

    const total = (item) => {
        return (
            parseInt(item.Gujrati) +
            parseInt(item.English) +
            parseInt(item.Hindi) +
            parseInt(item.Math)
        );
    };
    const per = (item) => {
        return (
            (parseInt(item.Gujrati) +
                parseInt(item.English) +
                parseInt(item.Hindi) +
                parseInt(item.Math)) /
            5
        );
    };

    const minimum = (item) => {
        const arr = [
            item.Gujrati,
            item.English,
            item.Hindi,
            item.Math
        ];
        return Math.min(...arr);
    };
    const maximum = (item) => {
        const arr = [
            item.Gujrati,
            item.English,
            item.Hindi,
            item.Math

        ];
        return Math.max(...arr);
    };

    const grade = (item) => {
        const total =
            parseInt(item.Gujrati) +
            parseInt(item.English) +
            parseInt(item.Hindi) +
            parseInt(item.Math)

        const per = total / 5;

        let finalGrade;

        if (per >= 90) {
            finalGrade = "A+";
        } else if (per >= 80) {
            finalGrade = "A";
        } else if (per >= 70) {
            finalGrade = "B+";
        } else if (per >= 60) {
            finalGrade = "B";
        } else if (per >= 50) {
            finalGrade = "C";
        } else if (per >= 40) {
            finalGrade = "D";
        } else {
            finalGrade = "F";
        }
        return finalGrade;
    };
    const passfail = (item) => {
        if (
            parseInt(item.Gujrati) >= 33 &&
            parseInt(item.English) >= 33 &&
            parseInt(item.Hindi) >= 33 &&
            parseInt(item.Math) >= 33
        ) {
            return grade(item);
        } else {
            return "Student has failed";
        }
    };
    const deletedata = (item) => {
        console.log(item._id);

        axios.delete(`https://generateapi.onrender.com/api/Result/${item._id}`, {
            headers: {
                Authorization: Token
            }
        })
            .then((Response) => {
                console.log(Response.data);
                dataget()
            }).catch((error) => {
                console.error("hello", error);
            })
    };
    const editdata = (item) => {
        setinit(item)
        setedit(item._id)
    }
    return (
        <>
            <Formik
                enableReinitialize
                initialValues={init}
                onSubmit={handleSubmit}>
                <Form>
                    <Field name="Name" type="text"></Field> <br /><br />
                    <Field name="Surname" type="text"></Field> <br /><br />
                    <Field name="RollNo" type="number"></Field> <br /><br />
                    <Field name="Gujrati" type="number"></Field> <br /><br />
                    <Field name="Hindi" type="number"></Field> <br /><br />
                    <Field name="English" type="number"></Field> <br /><br />
                    <Field name="Math" type="number"></Field> <br /><br />
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>

            <table
                border="1"
                cellSpacing="6"
                bgcolor="white"
                width={"100%"}
                style={{ textAlign: "center" }}
            >
                <caption>
                    <b>Students Results</b>
                </caption>
                <thead>
                    <tr>
                        <th rowSpan={2}>Name</th>
                        <th rowSpan={2}>Surname</th>
                        <th rowSpan={2}>Roll No.</th>
                        <th colSpan={9}>Score</th>
                        <th rowSpan={2}>Delete</th>
                        <th rowSpan={2}>Edit</th>
                    </tr>
                    <tr>
                        <th>Gujrati</th>
                        <th>Hindi</th>
                        <th>Math</th>
                        <th>English</th>
                        <th>Total</th>
                        <th>per</th>
                        <th>maximum</th>
                        <th>minimum</th>
                        <th>Result</th>
                    </tr>
                </thead>
                {data.map((item, index) => (
                    <>
                        <tbody>
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.Surname}</td>
                                <td>{item.RollNo}</td>
                                <td>{item.Gujrati}</td>
                                <td>{item.Hindi}</td>
                                <td>{item.Math}</td>
                                <td>{item.English}</td>
                                <td>{total(item)}</td>
                                <td>{per(item)}</td>
                                <td>{maximum(item)}</td>
                                <td>{minimum(item)}</td>
                                <td>{passfail(item)}</td>
                                <td>
                                    <Button onClick={() => deletedata(item)}>DELETE</Button>
                                </td>
                                <td>
                                    <Button onClick={() => editdata(item)}>EDIT</Button>
                                </td>
                            </tr>
                        </tbody>
                    </>
                ))}
            </table>
        </>
    )
}
// WzGDj2xp8XAFeYUH 
export default Apiget