// import React, { useState } from "react";
// import {
//   Typography,
//   Button,
//   Container,
//   Box,
//   TextField,
//   Link,
// } from "@mui/material";

// const Login = () => {
//   const [isDrawerOpen, setDrawerOpen] = useState(false); 

//   const toggleDrawer = () => setDrawerOpen(!isDrawerOpen); 

//   const menuItems = ["Home", "Pages", "Menu", "Blog", "About Us", "Contact"];

//   return (
//     <>

//       {/* Login Form */}
//       <Container maxWidth="sm" sx={{ mt: 8 }}>
//         <Box
//           sx={{
//             p: 4,
//             boxShadow: 3,
//             borderRadius: 2,
//             backgroundColor: "#ffffff",
//             border: "1px solid #eeeeee",
//           }}
//         >
//           <Typography variant="h4" gutterBottom sx={{ color: "#FFB300", fontWeight: "bold" }}>
//             Welcome Back!
//           </Typography>
//           <Typography variant="subtitle1" sx={{ color: "#616161", mb: 3 }}>
//             Welcome to Surya Solar – Log In to Your Account
//           </Typography>

//           <Box component="form">
//             <TextField
//               label="Email"
//               type="email"
//               fullWidth
//               variant="outlined"
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Password"
//               type="password"
//               fullWidth
//               variant="outlined"
//               margin="normal"
//               required
//             />
//             <Button
//               type="submit"
//               variant="contained"
//               fullWidth
//               sx={{
//                 mt: 2,
//                 backgroundColor: "#FFB300",
//                 color: "#fff",
//                 "&:hover": {
//                   backgroundColor: "#FFA000",
//                 },
//               }}
//             >
//               Log In
//             </Button>
//           </Box>

//           <Typography variant="body2" sx={{ mt: 2 }}>
//             New here?{" "}
//             <Link href="/signup" underline="hover" sx={{ color: "#0288D1" }}>
//               Create an account
//             </Link>
//           </Typography>
//         </Box>
//       </Container>
//     </>
//   );
// };

// export default Login;

// SolarLoginPage.js
import React from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  useTheme,
} from '@mui/material';
import SolarBackground from './Banner.jpg';

const SolarLoginPage = () => {
  const theme = useTheme();

  return (
    <Box backgroundColor="black"
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${SolarBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        
    
        
      }}
    >
      <Box>
        <Paper 
          elevation={10}
          sx={{
            p: 4,
            maxWidth: 400,
            width: '100%',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255,255,255,0.8)',
            borderRadius: 3,
            
          }}
        >
          <Typography variant="h4" align="center" gutterBottom color="primary">
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
        </Paper>
      </Box>
    </Box>
  );
};

export default SolarLoginPage;

