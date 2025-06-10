import axios from 'axios';
import React, { useState } from 'react'

function Apiget() {
    const [data , setdata] = useState([])
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((Response) => {
        // console.log(Response.id)
        setdata(Response.data)
    }).catch((error) => {
        console.error("hello",error);
    })
    return (
        <>
            <table border={1}>
                <tr>
                    <td>Id</td>
                    <td>name</td>
                    <td>titke</td>
                </tr>
                {
                    data.map((e) => (
                        <tr>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}
// djkzaJWTyAwWJvxU
export default Apiget 



 