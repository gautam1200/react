import { Input } from '@mui/material'
import { useFormik, validateYupSchema } from 'formik'
import React, { useState } from 'react'

function FormicResulr() {
    const [list, SetList] = useState([])
    const [int ,setint] = useState({

        Name: '',
        SurName: ''
    })
    const [edit , setedit] =useState(null)

    const formik = useFormik({
        enableReinitialize:true,
        initialValues: int,
        onSubmit : (values) =>{
            if(edit != null){
                const copydata = [...list]
                copydata[edit] = values
                SetList(copydata)
                setedit(null)
                setint({
                    Name: '',
                    SurName:''
                })

            }
            else{

                SetList([...list,values])
            }
            formik.handleReset()
        }
    })
    const deletedata = (index) => {
        const copytdata = [...list]
        copytdata.splice(index,1)
        SetList(copytdata)

    }
    const editdata = (i,index)=>{
        setint({
            Name: i.Name,
            SurName: i.SurName

        })
        setedit(index)
    }
    
    return (
        <>
            <form action="" onSubmit={formik.handleSubmit}>
                <input type="text" name="Name" value={formik.values.Name} onChange={formik.handleChange} /><br /><br />
                {
                    formik.touched.Name && formik.errors.Name ? <p>{formik.errors.Name}</p> : ''
                }
                <input type="text" name="SurName" value={formik.values.SurName} onChange={formik.handleChange}/><br /><br />
                <input type="Submit"name="" id="" />
            </form>
            <table border={1}>
                <tr>
                    <th>Name</th>
                    <th>SurName</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
                {
                    list.map((i,index) => (
                        <tr>
                            <td>{i.Name}</td>
                            <td>{i.SurName}</td>
                            <td><button onClick={()=> deletedata(index)}>Delete</button></td>
                            <td><button onClick={()=> editdata(i,index)}>Edit</button></td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}

export default FormicResulr
