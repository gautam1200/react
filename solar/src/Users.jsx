import React from 'react';
import { Box, Grid, Typography, TextField, Button, Paper, colors } from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';
import Headings from './Hedings';
import video from './Second.mp4'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const ContactSection = () => {
  return (
    <>
      <Box className="w-100" margin={'0'} position={'relative'} backgroundColor="#00000052">
        <Headings></Headings>
        <Box className="main" padding={{ xs: '60px 0', sm: '100px 0' }}></Box>
        <Box
          className="main"
          textAlign={'center'}
          width={{ xs: '90%', sm: '70%', md: '71%', lg: '70%' }}>
          <Typography
            color='white'
            fontFamily={'math'}
            fontSize={{ xs: '32px', sm: '40px', md: '55px', lg: '60px' }}
            fontWeight={'600'}
            sx={{
              lineHeight: '1.2',
              transition: 'all 0.6s',
              '&:hover': {
                color: '#ffa200',
                transition: 'all 0.6s'
              },
            }}>
            Reach Us
          </Typography>
          <Typography
            color="#ffffffa6"
            fontFamily="math"
            fontSize="22px"

          >
            <Box component="span">
              <Link to={`Home`}>
                Home
              </Link>
            </Box>{' '}
            <Box component="span">» Reach Us</Box>
          </Typography>

        </Box>
        <Box className="main" padding={{ xs: '70px 0', sm: '100px 0' }}></Box>

        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        />
      </Box>
      <Box className="w-100" boxSizing={'border-box'}>
        <Box className="main" display="flex" gap="2" flexWrap="wrap" >
          <Box
            sx={{
              width: '48%',
              margin:'auto'
            }}>
            <Typography sx={{
              fontSize: '38px',
              fontWeight: '600',
              fontFamily: 'math',
              transition: 'all 0.6s',
              '&:hover': {
                color: '#ffa200',
                transition: 'all 0.6s'
              },
            }}>
              Our Address
            </Typography>
            <Box width={'100%'} display={'flex'} flexWrap={'wrap'}>
              <Box width={'46%'}
                sx={{
                  margin: '10px',
                  textAlign: 'center',
                  borderRadius: '15px',
                  boxShadow: '4px 0px 13px 9px #bbb8b85e'
                }}>
                <CallIcon
                  sx={{
                    padding: '10px',
                    color: 'white',
                    backgroundColor: 'black',
                    borderRadius: '20px',
                    transition: 'all 0.6s',
                    margin: '10px 0',
                    fontSize: '30px',
                    '&:hover': {
                      color: 'black',
                      backgroundColor: '#ffa200',
                    },
                  }} />

                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: '600',
                    padding: '10px',
                    '&:hover': {
                      color: '#ffa200',
                      transition: 'all 0.6s'
                    }
                  }}>
                  1800 88 98 0 98
                </Typography>
              </Box>
              <Box width={'46%'}
                sx={{
                  margin: '10px',
                  textAlign: 'center',
                  boxShadow: '4px 0px 13px 9px #bbb8b85e',
                  borderRadius: '15px',

                }}>
                <EmailIcon
                  sx={{
                    padding: '10px',
                    color: 'white',
                    backgroundColor: 'black',
                    fontSize: '30px',
                    borderRadius: '20px',
                    transition: 'all 0.6s',
                    margin: '10px 0',
                    '&:hover': {
                      color: 'black',
                      backgroundColor: '#ffa200',
                    },
                  }} />
                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: '600',
                    padding: '10px',
                    '&:hover': {
                      color: '#ffa200',
                      transition: 'all 0.6s'
                    }
                  }}>
                  info@driller.com
                </Typography>
              </Box>
              <Box sx={{
                width: '99%',
                margin: '10px',
                textAlign: 'center',
                boxShadow: '4px 0px 13px 9px #bbb8b85e',
                borderRadius: '15px'
              }}>
                <LocationOnIcon
                  sx={{
                    padding: '10px',
                    fontSize: '30px',
                    color: 'white',
                    backgroundColor: 'black',
                    borderRadius: '20px',
                    transition: 'all 0.6s',
                    margin: '10px 0',
                    '&:hover': {
                      color: 'black',
                      backgroundColor: '#ffa200',
                    },
                  }} />
                <Typography
                  sx={{
                    fontSize: '20px',
                    fontWeight: '600',
                    padding: '10px',
                    '&:hover': {
                      color: '#ffa200',
                      transition: 'all 0.6s'
                    }
                  }}>
                  BL No. 2281/2/1/1, Sub Plot. 1-A, Near Areth Minor Canal, Surat, Gujarat, 394170
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: '48%',
              margin:'auto',
              borderRadius:'10px',
              
              
            }}>
              <Box sx={{ flex: 1 }}>
        <Typography variant="h5" gutterBottom>Enquiry Now</Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
          <TextField fullWidth label="First Name" required sx={{ flex: '1 1 48%' }} />
          <TextField fullWidth label="Last Name" required sx={{ flex: '1 1 48%' }} />
        </Box>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
          <TextField fullWidth label="Phone" required sx={{ flex: '1 1 48%' }} />
          <TextField fullWidth label="Email" required sx={{ flex: '1 1 48%' }} />
        </Box>

        <TextField fullWidth label="City" required sx={{ mb: 2 }} />
        <TextField fullWidth multiline rows={4} label="Your Message" sx={{ mb: 2 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button variant="contained" color="primary">Send</Button>
          <Typography variant="caption">* Required</Typography>
        </Box>
      </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContactSection;


// import React from 'react';
// import {
//   Box,
//   TextField,
//   Button,
//   Typography,
//   Paper
// } from '@mui/material';
// import { Phone, Email, LocationOn } from '@mui/icons-material';

// const ContactPage = () => {
//   return (
//     <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, p: 4 }}>
      
//       {/* Left Column: Contact Info */}
//       <Box sx={{ flex: 1 }}>
//         <Typography variant="h5" gutterBottom>Our Address</Typography>

//         <Paper sx={{ display: 'flex', alignItems: 'center', p: 2, mb: 2 }}>
//           <Phone color="primary" sx={{ mr: 2 }} />
//           <Typography>1800 88 98 0 98</Typography>
//         </Paper>

//         <Paper sx={{ display: 'flex', alignItems: 'center', p: 2, mb: 2 }}>
//           <Email color="primary" sx={{ mr: 2 }} />
//           <Typography>info@sunorasolar.com</Typography>
//         </Paper>

//         <Paper sx={{ display: 'flex', alignItems: 'flex-start', p: 2 }}>
//           <LocationOn color="primary" sx={{ mr: 2, mt: 0.5 }} />
//           <Typography>
//             BL No. 2281/2/1/1, Sub Plot. 1-A, Near Areth Minnor Canal, <br />
//             Village - Tadkeshwar, Ta - Mandvi, Surat, Gujarat, 394170
//           </Typography>
//         </Paper>
//       </Box>

//       {/* Right Column: Enquiry Form */}
//       <Box sx={{ flex: 1 }}>
//         <Typography variant="h5" gutterBottom>Enquiry Now</Typography>

//         <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
//           <TextField fullWidth label="First Name" required sx={{ flex: '1 1 48%' }} />
//           <TextField fullWidth label="Last Name" required sx={{ flex: '1 1 48%' }} />
//         </Box>

//         <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
//           <TextField fullWidth label="Phone" required sx={{ flex: '1 1 48%' }} />
//           <TextField fullWidth label="Email" required sx={{ flex: '1 1 48%' }} />
//         </Box>

//         <TextField fullWidth label="City" required sx={{ mb: 2 }} />
//         <TextField fullWidth multiline rows={4} label="Your Message" sx={{ mb: 2 }} />

//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//           <Button variant="contained" color="primary">Send</Button>
//           <Typography variant="caption">* Required</Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ContactPage;
