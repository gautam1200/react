import { Margin, Padding } from '@mui/icons-material';
import { Button, colors, List } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from "yup";


const Results = () => {
    const [list, setList] = useState([]);
    const [edit, setedit] = useState(null)
    const [init, setinit] = useState({
        Name: '',
        SurName: '',
        RollNo: '',
        Gujrati: '',
        Hindi: '',
        Math: '',
        English: ''
    })
    const datastor = (values, { resetForm }) => {
        if (edit != null) {
            const copydata = [...list]
            copydata[edit] = values
            setList(copydata)
            setedit(null)
            // resetForm()
            setinit({
                Name: '',
                SurName: '',
                RollNo: '',
                Gujrati: '',
                Hindi: '',
                Math: '',
                English: ''
            })
        } else {
            setList([...list, values])
        }
        console.log(values);
        resetForm()
    }
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
            parseInt(item.math) >= 33
        ) {
            return grade(item);
        } else {
            return "Student has failed";
        }
    };
    const deletedata = (index) => {
        const copydata = [...list];
        copydata.splice(index, 1);
        setList(copydata);
    };
    const editdata = (item, index) => {
        setinit({
            Name: item.Name,
            SurName: item.SurName,
            RollNo: item.RollNo,
            Gujrati: item.Gujrati,
            English: item.English,
            Hindi: item.Hindi,
            Math: item.Math
        })
        setedit(index)
    }
    const validationSchema = Yup.object({
        Name: Yup.string().required("Enter Name").min(2, "Too Short!").max(20, "Too Long!"),
        SurName: Yup.string().required("Enter Surname").min(2, "Too Short!").max(20, "Too Long!"),
        RollNo: Yup.string().required("Enter Roll No").min(2, "Too Short!").max(20, "Too Long!"),
        Gujrati: Yup.number().typeError("Enter valid marks").required("Enter Marks").min(0, "Min 0").max(100, "Max 100"),
        Hindi: Yup.number().typeError("Enter valid marks").required("Enter Marks").min(0, "Min 0").max(100, "Max 100"),
        English: Yup.number().typeError("Enter valid marks").required("Enter Marks").min(0, "Min 0").max(100, "Max 100"),
        Math: Yup.number().typeError("Enter valid marks").required("Enter Marks").min(0, "Min 0").max(100, "Max 100")
    })

    return (
        <>
            <Formik
                enableReinitialize
                initialValues={init}
                onSubmit={datastor}
                validationSchema={validationSchema}
            >
                <Form>
                    <table border="1" cellSpacing="3" bgcolor="white" width={"80%"} cellPadding={"0"} >
                        <thead>
                            <tr>
                                <th rowSpan={2}>Name</th>
                                <th rowSpan={2}>Surname</th>
                                <th rowSpan={2}>Roll No.</th>
                                <th colSpan={4}>Score</th>
                            </tr>
                            <tr>
                                <th>Gujrati</th>
                                <th>Hindi</th>
                                <th>Math</th>
                                <th>English</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Field name="Name" type="name" placeholder="Name"></Field>
                                    <ErrorMessage name="Name" component="span" style={{ color: 'red' }} />
                                </td>
                                <td>
                                    <Field name="SurName" type="name" placeholder="SurName"></Field>
                                    <ErrorMessage name="SurName" component="span" style={{ color: 'red' }} />
                                </td>
                                <td>
                                    <Field name="RollNo" type="Number" placeholder="Roll No"></Field>
                                    <ErrorMessage name="RollNo" component="span" style={{ color: 'red' }} />
                                </td>
                                <td>
                                    <Field name="Gujrati" type="Number" placeholder="Gujrati"></Field>
                                    <ErrorMessage name="Gujrati" component="span" style={{ color: 'red' }} />
                                </td>
                                <td>
                                    <Field name="Hindi" type="Number" placeholder="Hindi"></Field>
                                    <ErrorMessage name="Hindi" component="span" style={{ color: 'red' }} />
                                </td>
                                <td>
                                    <Field name="Math" type="Number" placeholder="Math"></Field>
                                    <ErrorMessage name="Math" component="span" style={{ color: 'red' }} />
                                </td>
                                <td>
                                    <Field name="English" type="Number" placeholder="English"></Field>
                                    <ErrorMessage name="English" component="span" style={{ color: 'red' }} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Button type="submit"> Submit</Button>
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

                {list.map((item, index) => (
                    <>
                        <tbody>
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.SurName}</td>
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
                                    <Button onClick={() => deletedata(index)}>DELETE</Button>
                                </td>
                                <td>
                                    <Button onClick={() => editdata(item, index)}>EDIT</Button>
                                </td>
                            </tr>
                        </tbody>
                    </>
                ))}
            </table>

        </>
    )
}

export default Results








