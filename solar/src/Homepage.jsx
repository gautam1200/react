import { Box, Typography, Grid, Paper } from '@mui/material'
import React from 'react'
import Hedings from './Hedings';
import { Height } from '@mui/icons-material';
import Performanceimg from './img-4.jpg'



const cards = [
  {
    title: "Wind Energy",
    text: "In power departure, land procurement liaisoning.",
    iconClass: "icon-wind",
  },
  {
    title: "Energy Saving",
    text: "In power departure, land procurement liaisoning.",
    iconClass: "icon-bulb",
  },
  {
    title: "Solar Energy",
    text: "In power departure, land procurement liaisoning.",
    iconClass: "icon-solar",
  },
];

function Homepage() {


  return (
    <>
      {/* ===============**************==================== */}

      <Box className="homepage">
        <Hedings></Hedings>
        <Box sx=
          {{
            width: { xs: '85%', sm: '65%', md: '58%' },
            margin: 'auto',
            marginTop: '-50px',
            textAlign: 'center'
          }}>
          <Typography variant="h4" component="h2"
            sx={{
              fontFamily: 'cursive',
              fontSize: { xs: '20px' },
              color: '#f4ff00de',
              padding: '10px 0'
            }}>
            Instant. Simple. Smart.
          </Typography>
          <Typography variant='h2'
            sx={{
              fontSize: { xs: '43px', sm: '50px', md: '60px' },
              fontFamily: 'math',
              fontWeight: '600',
              color: 'white'
            }}>
            Save Energy and Save Earth for Your Future Generations.
          </Typography>
          <button>Get Started Now</button>
        </Box>
      </Box>

      {/* ===============**************==================== */}

      <Box className="w-100">
        <Box className="main" sx={{ padding: '35px 0' }}>
          <Box className="cards-wrapper">
            {cards.map((card, index) => (
              <Box key={index} className="card-container">
                <Box className={`icon ${card.iconClass}`} >
                </Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ===============**************==================== */}

      <Box className="w-100"display={'flex'}>
        <Box className="Performance" width={{lg:'65%'}} >
          hello
        </Box>
          <Box className="Performance-img" width={{lg:'35%'}}>
            <img src={Performanceimg} alt="" />
          </Box>
      </Box>
      {/* ===============**************==================== */}
      {/* ===============**************==================== */}
      {/* ===============**************==================== */}
      {/* ===============**************==================== */}
      {/* ===============**************==================== */}

    </>
  )
}
export default Homepage






