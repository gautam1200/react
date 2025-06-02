import React, { useState } from 'react'

const InputExample = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [list, setList] = useState([])

    const handleData = () => {
        // console.log(name);
        // console.log(surname);
        const obj = { name, surname }

        setList([...list, obj])

        setName('')
        setSurname('')
    }

    console.log(list);


    return (
        <div>


            <input type="text" name="" value={name} id="" onChange={(e) => setName(e.target.value)} /> <br /><br />
            <input type="text" name="" id="" value={surname} onChange={(e) => setSurname(e.target.value)} /> <br /><br />
            <button onClick={handleData}>submit</button>



            {/* <button value="hello" onClick={(e) => console.log(e.target.value)
        }>click</button> */}

            {/* <input type="text" name="" id="" onChange={(e) => console.log(e.target.value)
        } /> */}

            <table border={1}>
                <tr border={1}>
                    <td>name</td>
                    <td>surname</td>
                </tr>
                {
                    list.map((i, index) => (
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

export default InputExample
