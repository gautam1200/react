import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import bg from './bg2.png'


function Tictactoy() {
    const [count, setCount] = useState(0)
    const [data, setdata] = useState(["", "", "", "", "", "", "", "", ""])
    const [lock, setlock] = useState(false)

    const toggle = (e, index) => {
        if (lock || data[index] !== "") return;
        const newData = [...data];

        if (count % 2 === 0) {
            newData[index] = "O";
            e.target.innerHTML = "O";

        } else {
            newData[index] = "X";
            e.target.innerHTML = "X";
        }
        setdata(newData);
        setCount(1 + count);
        winers(newData);
    };

    const winer = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const winers = (data) => {
        for (const [a, b, c] of winer) {
            if (data[a] && data[a] === data[b] && data[b] === data[c]) {
                const wins = document.querySelector(".win")
                wins.innerHTML = `winer is ${data[a]}`
                console.log(data[a]);
                setlock(true)
                return data[a];
            }

        }
        return null;
    };

    const reset = () => {
        setlock(false)
        setCount(0)
        setdata(["", "", "", "", "", "", "", "", ""])
        const wins = document.querySelector(".win")
                wins.innerHTML = ""
        const re = document.querySelectorAll(".box")
        re.forEach((news) => (
            news.innerHTML = ""

        ))
    }
    if (count === 9) {
        const over = document.querySelector(".win")
        over.innerHTML = `Game Over`
    }

    return (
        <>
            <Box className="main">
                <Typography style={{
                    fontSize: '70px',
                    fontFamily: 'math',
                    fontWeight: '900',
                    textAlign: 'center',
                    padding: '50px 0',
                }}>
                    Tic Tac Toc
                </Typography>
                <Box className="jj" position={'relative'} width={'30%'}>
                    <img src={bg} alt="" width={'100%'} />
                    <Box position={'absolute'} top={'0'}>

                        <Box className="row"  >

                            <Box className="box" onClick={(e) => toggle(e, 0)}></Box>
                            <Box className="box" onClick={(e) => toggle(e, 1)}></Box>
                            <Box className="box" onClick={(e) => toggle(e, 2)}></Box>

                        </Box>
                        <Box className="row">
                            <Box className="box" onClick={(e) => toggle(e, 3)}></Box>
                            <Box className="box" onClick={(e) => toggle(e, 4)}></Box>
                            <Box className="box" onClick={(e) => toggle(e, 5)}></Box>
                        </Box>
                        <Box className="row">
                            <Box className="box" onClick={(e) => toggle(e, 6)}></Box>
                            <Box className="box" onClick={(e) => toggle(e, 7)}></Box>
                            <Box className="box" onClick={(e) => toggle(e, 8)}></Box>
                        </Box>
                    </Box>
                </Box>
                <Typography className='win'
                    style={{
                        fontSize: '48px',
                        fontFamily: 'math',
                        fontWeight: '900',
                        textAlign: 'center',
                    }}
                ></Typography>
                <Button onClick={() => reset()} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundColor: '#5769ba',
                    color: 'white',
                    fontSize: '20px',
                    margin: '20px 0'
                }}>Reset</Button>
            </Box>
        </>
    )
}

export default Tictactoy













