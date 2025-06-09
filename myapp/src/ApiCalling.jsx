import axios from 'axios'
import React, { useState } from 'react'

const ApiCalling = () => {

    const [data , setData] = useState([])

    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        console.log(response.data);
        setData(response.data)
    })
    .catch((error) => {
        console.log(error);
    })

  return (
    <div>
        <table border={1}>
            <tr>
                <td>userId</td>
                <td>ID</td>
                <td>Title</td>
                <td>body</td>
            </tr>
            {
                data.map((i , index) => (
                    <tr>
                        <td>{i.userId}</td>
                        <td>{i.id}</td>
                        <td>{i.title}</td>
                        <td>{i.body}</td>
                    </tr>
                ))
            }
        </table>
    </div>
  )
}

export default ApiCalling
