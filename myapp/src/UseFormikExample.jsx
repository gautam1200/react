import { useFormik } from 'formik'
import React, { useState } from 'react'

const UseFormikExample = () => {


    const [list , setList] = useState([])



    const formik = useFormik({
        initialValues : {
            name : '',
            surname : ''
        },
        onSubmit : (values) => {
            // console.log(values);
            setList([...list , values])
            formik.handleReset()

        }

    })


  return (
    <div>
        <form action="" onSubmit={formik.handleSubmit}>
            <input type="text" name="name" id="" value={formik.values.name} onChange={formik.handleChange} /> <br /><br />
            <input type="text" name="surname" id="" value={formik.values.surname} onChange={formik.handleChange} /> <br /><br />
            <input type="submit" name="" id="" />
        </form>

        <table border={1}>
                <tr>
                    <td>name</td>
                    <td>surname</td>
                </tr>
                {
                    list.map((i , index) => (
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.surname}</td>
                        </tr>
                    ))
                }
        </table>
    </div>
  )
}

export default UseFormikExample
