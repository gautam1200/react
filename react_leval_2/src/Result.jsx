import { Button, Input, Typography } from '@mui/material'
import React, { useState } from 'react'

function Result() {
  const [Name, setName] = useState('')
  const [Number, setNumber] = useState('')
  const [Eng, setEng] = useState('')
  const [Guj, setGuj] = useState('')
  const [Hindi, setHindi] = useState('')
  const [Soc, setSoc] = useState('')
  const [List, SetList] = useState([])

  const savedata = () => {
    const stdata = { Name, Number, Eng, Guj, Hindi, Soc }
    SetList([...List, stdata])
    setName('')
    setNumber('')
    setEng('')
    setGuj('')
    setHindi('')
    setSoc('')
    console.log(List);
  }
  const Total = (Eng, Guj, Hindi, Soc) => {


    return parseInt(Eng) + parseInt(Guj) + parseInt(Hindi) + parseInt(Soc)
  }

  const per = (Eng, Guj, Hindi, Soc) => {
    return (parseInt(Eng) + parseInt(Guj) + parseInt(Hindi) + parseInt(Soc)) / 4
  }
  const minimum = (Eng, Guj, Hindi, Soc) => {
    let min = [Eng, Guj, Hindi, Soc]
    return Math.min(...min)
  }
  const maximum = (Eng, Guj, Hindi, Soc) => {
    let max = [Eng, Guj, Hindi, Soc]
    return Math.max(...max)
  }
  const pass = (Eng, Guj, Hindi, Soc) => {
    if (Eng >= 33 && Guj >= 33 && Hindi >= 33 && Soc >= 33) {
      return "pass"
    }
    else {
      return "fail"
    }
  }
  const grade = (Eng, Guj, Hindi, Soc) => {
    let total = parseInt(Eng) + parseInt(Guj) + parseInt(Hindi) + parseInt(Soc)
    let per = total / 4
    let grades 
    if(per >=90){
      grades = "A"
    }else if(per >=80){
      grades = "B"
    }else if(per >=70){
      grades = "C"
    }else if(per >=60){
      grades = "D"
    }else if(per >=50){
      grades = "E"
    }
    return grades
  }

  return (
    <>
      <Input type="text" placeholder='student name' value={Name} onChange={(e) => setName(e.target.value)} />  <br /><br />
      <Input type="number" placeholder='Roll No.' value={Number} onChange={(e) => setNumber(e.target.value)} /> <br /> <br />
      <Input type="number" placeholder='End' value={Eng} onChange={(e) => setEng(e.target.value)} /> <br /> <br />
      <Input type="number" placeholder='Guj' value={Guj} onChange={(e) => setGuj(e.target.value)} /> <br /> <br />
      <Input type="number" placeholder='Hindi' value={Hindi} onChange={(e) => setHindi(e.target.value)} /> <br /> <br />
      <Input type="number" placeholder='Soc' value={Soc} onChange={(e) => setSoc(e.target.value)} /> <br /> <br />
      <Button onClick={savedata}>Submit</Button>

      <Typography textAlign={'center'} fontSize={'46px'} fontFamily={'math'} fontWeight={'600'}>
        Result
      </Typography>
      <hr />
      {
        List.map((item) => (
          <>
            <Typography>
              {item.Name}
            </Typography>
            <Typography>{Total(item.Eng, item.Guj, item.Hindi, item.Soc)}</Typography>
            <Typography>{per(item.Eng, item.Guj, item.Hindi, item.Soc)}</Typography>
            <Typography>{minimum(item.Eng, item.Guj, item.Hindi, item.Soc)}</Typography>
            <Typography>{maximum(item.Eng, item.Guj, item.Hindi, item.Soc)}</Typography>
            <Typography>{pass(item.Eng, item.Guj, item.Hindi, item.Soc)}</Typography>
            <Typography>{grade(item.Eng, item.Guj, item.Hindi, item.Soc)}</Typography>
          </>
        ))
      }
    </>
  )
}

export default Result





// import { Button, Input } from '@mui/material';
// import React, { useState } from 'react';

// function Result() {
//   const [Name, setName] = useState('');
//   const [Number, setNumber] = useState('');
//   const [Eng, setEng] = useState('');
//   const [Guj, setGuj] = useState('');
//   const [Hindi, setHindi] = useState('');
//   const [Soc, setSoc] = useState('');
//   const [List, SetList] = useState([]);

//   const savedata = () => {
//     const total = parseInt(Eng ) +parseInt(Guj) +parseInt(Hindi) +parseInt(Soc);
//     const percentage = total / 4;

//     const stdata = {Name,Number, Eng,Guj,Hindi,Soc,total,percentage};

//     SetList([...List, stdata]);
//     setName('');
//     setNumber('');
//     setEng('');
//     setGuj('');
//     setHindi('');
//     setSoc('');
//   };

//   return (
//     <>
//       <Input type="text" placeholder="Student Name" value={Name} onChange={(e) => setName(e.target.value)} /> <br /><br />
//       <Input type="number" placeholder="Roll No." value={Number} onChange={(e) => setNumber(e.target.value)} /> <br /><br />
//       <Input type="number" placeholder="Eng" value={Eng} onChange={(e) => setEng(e.target.value)} /> <br /><br />
//       <Input type="number" placeholder="Guj" value={Guj} onChange={(e) => setGuj(e.target.value)} /> <br /><br />
//       <Input type="number" placeholder="Hindi" value={Hindi} onChange={(e) => setHindi(e.target.value)} /> <br /><br />
//       <Input type="number" placeholder="Soc" value={Soc} onChange={(e) => setSoc(e.target.value)} /> <br /><br />
//       <Button variant="contained" onClick={savedata}>Submit</Button>

//       <h1>Results</h1>
//       {
//         List.map((student, index) => (
//           <div key={index}>
//             <p><strong>Name:</strong> {student.Name}</p>
//             <p><strong>Roll No:</strong> {student.Number}</p>
//             <p><strong>Total:</strong> {student.total}</p>
//             <p><strong>Percentage:</strong> {student.percentage.toFixed(2)}%</p>
//             <hr />
//           </div>
//         ))
//       }
//     </>
//   );
// }

// export default Result;



// const Total = (Eng, Guj, Hindi, Soc) => {
//     let totalMarks = parseInt(Eng) + parseInt(Guj) + parseInt(Hindi) + parseInt(Soc);
//     return totalMarks;
// };

// const per = (totalMarks) => {
//     return totalMarks / 4;  // 4 subjects
// };

// // Example usage:
// let totalMarks = Total(85, 90, 78, 88);
// let percentage = per(totalMarks);

// console.log("Total:", totalMarks);
// console.log("Percentage:", percentage);

// import { Button, Input } from '@mui/material'
// import React, { useState } from 'react'

// function Result() {
//   const [Name, setName] = useState('')
//   const [Number, setNumber] = useState('')
//   const [Eng, setEng] = useState('')
//   const [Guj, setGuj] = useState('')
//   const [Hindi, setHindi] = useState('')
//   const [Soc, setSoc] = useState('')
//   const [List, SetList] = useState([])

//   const savedata = () => {
//     const stdata = { Name, Number, Eng, Guj, Hindi, Soc }
//     SetList([...List, stdata])
//     setName('')
//     setNumber('')
//     setEng('')
//     setGuj('')
//     setHindi('')
//     setSoc('')
//   }

//   const Total = (Eng, Guj, Hindi, Soc) => {
//     let Total1 =
//       parseInt(Eng) +
//       parseInt(Guj) +
//       parseInt(Hindi) +
//       parseInt(Soc)
//     let per = Total1 / 4
//     return { Total1, per }
//   }

//   return (
//     <>
//       <Input type="text" placeholder="Student Name" value={Name} onChange={(e) => setName(e.target.value)} /> <br /><br />
//       <Input type="number" placeholder="Roll No." value={Number} onChange={(e) => setNumber(e.target.value)} /> <br /><br />
//       <Input type="number" placeholder="Eng" value={Eng} onChange={(e) => setEng(e.target.value)} /> <br /><br />
//       <Input type="number" placeholder="Guj" value={Guj} onChange={(e) => setGuj(e.target.value)} /> <br /><br />
//       <Input type="number" placeholder="Hindi" value={Hindi} onChange={(e) => setHindi(e.target.value)} /> <br /><br />
//       <Input type="number" placeholder="Soc" value={Soc} onChange={(e) => setSoc(e.target.value)} /> <br /><br />
//       <Button variant="contained" onClick={savedata}>Submit</Button>

//       <h1>Result</h1>
//       {
//         List.map((jp, index) => {
//           const result = Total(jp.Eng, jp.Guj, jp.Hindi, jp.Soc)
//           return (
//             <div key={index} style={{ border: '1px solid gray', margin: '10px', padding: '10px' }}>
//               <p><strong>Name:</strong> {jp.Name}</p>
//               <p><strong>Roll No:</strong> {jp.Number}</p>
//               <p><strong>Total Marks:</strong> {result.Total1}</p>
//               <p><strong>Percentage:</strong> {result.per}%</p>
//             </div>
//           )
//         })
//       }
//     </>
//   )
// }

// export default Result

