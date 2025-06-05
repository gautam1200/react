import { useFormik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';
const UseFormikExample = () => {


    const [list, setList] = useState([])
    const [ini, setIni] = useState({
        name: '',
        surname: ''
    })
    const [editId, setEditId] = useState(null)



    const formik = useFormik({
        enableReinitialize: true,
        initialValues: ini,
        validationSchema : Yup.object({
            name : Yup.string()
            .required("Enter name"),
            surname : Yup.string()
            .required("Enter surname")
        }),
        onSubmit: (values) => {
            // console.log(values);

            if (editId != null) {
                let copyData = [...list]
                copyData[editId] = values
                setList(copyData)
                setEditId(null)
                setIni({
                    name: '',
                    surname: ''
                })
            }
            else {
                setList([...list, values])
            }
            formik.handleReset()
        }
        
    })

    const updateData = (item, index) => {
        // console.log(item);
        setIni({
            name: item.name,
            surname: item.surname
        })
        setEditId(index)
    }


    return (
        <div>
            <form action="" onSubmit={formik.handleSubmit}>
                <input type="text" name="name" id="" value={formik.values.name} onChange={formik.handleChange} />
                
                {
                    formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : ''
                }

                 <br /><br />
                <input type="text" name="surname" id="" value={formik.values.surname} onChange={formik.handleChange} /> 
                
                {
                    formik.touched.surname && formik.errors.surname ? <p>{formik.errors.surname}</p> : ''
                }

                <br /><br />
                <input type="submit" name="" id="" />
            </form>

            <table border={1}>
                <tr>
                    <td>name</td>
                    <td>surname</td>
                    <td>UPDATE</td>
                </tr>
                {
                    list.map((i, index) => (
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.surname}</td>
                            <td>
                                <button onClick={() => updateData(i, index)}>UPDATE</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default UseFormikExample