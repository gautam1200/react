import { Box, Button, Input, Typography } from '@mui/material'
import React, { useState } from 'react'

function Result() {
  const [Name, setName] = useState('')
  const [Number, setNumber] = useState('')
  const [Eng, setEng] = useState('')
  const [Guj, setGuj] = useState('')
  const [Hindi, setHindi] = useState('')
  const [Matsh, setMatsh] = useState('')
  const [List, SetList] = useState([])
  const [edit, setedit] = useState(null)

  const savedata = () => {
    if ((Name && Number && Eng && Guj && Hindi && Matsh) == '') {
      alert('Fill Data')
    }
    else {
      const stdata = { Name, Number, Eng, Guj, Hindi, Matsh }
      if (edit != null) {
        const copydatat = [...List]
        copydatat[edit] = stdata
        SetList(copydatat)
        setedit(null)
      }
      else {
        SetList([...List, stdata])
      }
      setName('')
      setNumber('')
      setEng('')
      setGuj('')
      setHindi('')
      setMatsh('')
    }
  }
  const Total = (item) => {
    return parseInt(item.Eng) + parseInt(item.Guj) + parseInt(item.Hindi) + parseInt(item.Matsh)
  }

  const per = (item) => {
    return (parseInt(item.Eng) + parseInt(item.Guj) + parseInt(item.Hindi) + parseInt(item.Matsh)) / 4
  }
  const minimum = (item) => {
    let min = [item.Eng, item.Guj, item.Hindi, item.Matsh]
    return Math.min(...min)
  }
  const maximum = (item) => {
    let max = [item.Eng, item.Guj, item.Hindi, item.Matsh]
    return Math.max(...max)
  }
  const pass = (item) => {
    if (item.Eng >= 33 && item.Guj >= 33 && item.Hindi >= 33 && item.Matsh >= 33) {
      return grade(item)
    }
    else {
      return "Fail"
    }
  }
  const grade = (item) => {
    let total = parseInt(item.Eng) + parseInt(item.Guj) + parseInt(item.Hindi) + parseInt(item.Matsh)
    let per = total / 4
    let grades
    if (per >= 90) {
      grades = "A"
    } else if (per >= 80) {
      grades = "B"
    } else if (per >= 70) {
      grades = "C"
    } else if (per >= 60) {
      grades = "D"
    } else if (per >= 50) {
      grades = "E"
    }
    return grades
  }
  const deletedata = (index) => {
    const copydatat = [...List]
    copydatat.splice(index, 1)
    SetList(copydatat)

  }
  const editdata = (item, index) => {
    setName(item.Name)
    setNumber(item.Number)
    setEng(item.Eng)
    setGuj(item.Guj)
    setHindi(item.Hindi)
    setMatsh(item.Matsh)
    setedit(index)
  }
  return (
    <>
      <table border="1" cellSpacing="6" bgcolor="white" width={'80%'}>
        <caption>
          <b>Input Marks</b>
        </caption>
        <thead>
          <tr>
            <th rowSpan={2}>Name</th>
            <th rowSpan={2}>Roll No.</th>
            <th colSpan={5}>Score</th>
          </tr>
          <tr>
            <th>English</th>
            <th>Gujrati</th>
            <th>Hindi</th>
            <th>Math</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Input
                type="text"
                placeholder="ENTER NAME"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td>
              <Input
                type="number"
                placeholder="ENTER ROLL NO"
                value={Number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </td>
            <td>
              <Input
                type="number"
                placeholder="GUJRATI MARK"
                value={Guj}
                onChange={(e) => setGuj(e.target.value)}
              />
            </td>
            <td>
              <Input
                type="number"
                placeholder="HINDI MARK"
                value={Hindi}
                onChange={(e) => setHindi(e.target.value)}
              />
            </td>
            <td>
              <Input
                type="number"
                placeholder="MATH MARK"
                value={Matsh}
                onChange={(e) => setMatsh(e.target.value)}
              />
            </td>
            <td>
              <Input
                type="number"
                placeholder="ENGLISH MARK"
                value={Eng}
                onChange={(e) => setEng(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>

      <Button onClick={savedata}>Submit</Button>

      <table border="1" cellSpacing="6" bgcolor="white" width={'80%'}>
        <caption>
          <b>Input Marks</b>
        </caption>
        <thead>
          <tr>
            <th rowSpan={2}>Name</th>
            <th rowSpan={2}>Roll No.</th>
            <th colSpan={9}>Score</th>
            <th rowSpan={2}>Delete</th>
            <th rowSpan={2}>Updet</th>
          </tr>
          <tr>
            <th>English</th>
            <th>Gujrati</th>
            <th>Hindi</th>
            <th>Math</th>
            <th>Total</th>
            <th>Per</th>
            <th>Minimum</th>
            <th>Maximum</th>
            <th>Result</th>
          </tr>
        </thead>
        {
          List.map((item, index) => (
            <>
              <tbody>
                <tr>
                  <td>{item.Name}</td>
                  <td>{item.Number}</td>
                  <td>{item.Eng}</td>
                  <td>{item.Guj}</td>
                  <td>{item.Hindi}</td>
                  <td>{item.Matsh}</td>
                  <td>{Total(item)}</td>
                  <td>{per(item)}</td>
                  <td>{minimum(item)}</td>
                  <td>{maximum(item)}</td>
                  <td>{pass(item)}</td>
                  <td><Button onClick={() => deletedata(index)}>Delete</Button></td>
                  <td><Button onClick={() => editdata(item, index)}>Updet</Button></td>
                </tr>
              </tbody>
            </>
          ))
        }
      </table>
    </>
  )
}
export default Result

