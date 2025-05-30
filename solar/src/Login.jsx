import React from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import SolarBackground from './Banner.jpg';

const SolarLoginPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundImage: `url(${SolarBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 1,
        }}
      />
      
  
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 2,
        }}
      />

  
      <Box sx={{ zIndex: 3, width: '100%', maxWidth: {xs:'90%',sm:'70%',md:'45%'}}}>
        <Paper
          elevation={1}
          sx={{
            mx: 'auto',
            width: '100%',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 3,
            
          }}
        >
          <Box padding={'60px 20px'}>

          <Typography
            variant={isSmallScreen ? 'h5' : 'h4'}
            align="center"
            gutterBottom
            color="primary"
          >
            Surya Solar Login
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default SolarLoginPage;



