import React, { useContext } from 'react'
import { Formdatas } from './Formcontext'



function Formcontexts() {


    const { data } = useContext(Formdatas)
    return (
        <>
            <table border={1} cellPadding={5}>
                <tr>
                    <th>Name</th>
                    <th>SurName</th>
                    <th>Number</th>
                </tr>
                {
                    data.map((e) => (
                        <>
                            <tr>
                                <td>{e.name}</td>
                                <td>{e.surname}</td>
                                <td>{e.number}</td>
                            </tr>
                        </>
                    ))
                }
            </table>
        </>
    )
}

export default Formcontexts



// https://themewagon.github.io/furni/index.html





