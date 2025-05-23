import { Box, Typography, Grid, Paper, ListItem, ListItemAvatar, ListItemText, Avatar, CircularProgress } from '@mui/material'
import React from 'react'
import Hedings from './Hedings';
import { Height } from '@mui/icons-material';
import Performanceimg from './img-4.jpg'
import { List } from 'lucide-react';
import Ceoimg from './ceoimg.jpg'
import { Stack } from 'react-bootstrap';



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

      <Box className="w-100"padding={'50px 0'}>
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

      <Box className="w-100" display={'flex'} flexWrap={'wrap'}>
        <Box className="Performance" width={{ lg: '65%', md: '65%', xs: '100%' }} display={'flex'} alignItems={'center'}>
          <Box padding={{xs:'10px', lg:'50px'}}margin={'auto'}>
            <Typography fontSize={{sx:'20px'}} >
              | PERFORMANCE
            </Typography>
            <Typography fontSize={{ lg: '70px', md: '56px', xs:'34px' }} width={{xs:'70%'}}  fontFamily={'math'} fontWeight={'600'} >
              Solar Powering Your Sustainable Scene
            </Typography>
            <Box display={'flex'} flexWrap={'wrap'}  justifyContent={'space-around'}>
              <Box width={{xs:'80%'}} sx={{backgroundColor:'rgb(20, 21, 21)',padding:'10px 15px',borderRadius:'10px',alignItems:'center',display:'flex'}}justifyContent={'space-evenly'} >
                <Box display={'flex'} justifyContent={'center'} flexWrap={'wrap'} width={{xs:'80%'}}margin={'auto'} >
                  <img src={Ceoimg} alt="" style={{ borderRadius: '50%' }} />
                  <Box>

                  <Typography variant='h5' color='white'>
                    Roberto Lewis
                  </Typography>
                  <Typography variant='h6' color='#ffffffab'>
                    Founder of CEO
                  </Typography>
                  </Box>
                </Box>
              </Box>
              <Box width={'60%'}>
                <Typography variant='h5'>
                  Solar Powering Your Sustainable Scene" is a vibrant and compelling phrase that conveys the idea of integrating solar energy into
                </Typography>
                <Box padding={'20px 0'} display={'flex'} justifyContent={'space-evenly'}>
                  <Box width={'40%'} display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
                    <Box position="relative" display="inline-flex">
                      <CircularProgress variant="determinate" value={89} size={100} color="success" />
                      <Box
                        position="absolute"
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        width={'100px'}
                      >
                        <Typography variant="h4" color="text.secondary">
                          89%
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="h4" fontFamily={'math'} padding={'10px 0'}>
                      Successful
                    </Typography>
                  </Box>
                  <Box width={'40%'} display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
                    <Box position="relative" display="inline-flex">
                      <CircularProgress variant="determinate" value={72} size={100} color="success" />
                      <Box
                        position="absolute"
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        width={'100px'}
                      >
                        <Typography variant="h4" color="text.secondary">
                          72%
                        </Typography>
                      </Box>
                    </Box>
                    <Typography variant="h4" fontFamily={'math'} padding={'10px 0'}>
                      Branching
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="Performance-img" width={{ lg: '35%', md: '35%', xs: '100%' }} overflow={'hidden'} display={'flex'} justifyContent={'center'}>
          <img src={Performanceimg} alt="" width={{ md: '100%', xs: '60%' }} />
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






