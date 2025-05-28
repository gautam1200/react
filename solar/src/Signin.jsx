// import React, { useState } from "react";
// import {
//   Typography,
//   Button,
//   TextField,
//   Container,
//   Box,
//   Link,
// } from "@mui/material";

// const Signin = () => {
//   const [isDrawerOpen, setDrawerOpen] = useState(false);
//   const toggleDrawer = () => {
//     setDrawerOpen((prev) => !prev);
//   };

//   return (
//     <>
//       <Container maxWidth="sm" sx={{ mt: 8 }}>
//         <Box
//           sx={{
//             p: 4,
//             boxShadow: 3,
//             borderRadius: 2,
//             backgroundColor: "#fafafa",
//           }}
//         >
//           <Typography variant="h4" gutterBottom>
//             Create Account
//           </Typography>
//           <Typography variant="subtitle1" gutterBottom>
//             Sign up to order your favorite meals
//           </Typography>
//           <Box component="form">
//             <TextField
//               label="Full Name"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Email"
//               type="email"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Password"
//               type="password"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               required
//             />
//             <TextField
//               label="Confirm Password"
//               type="password"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               required
//             />
//             <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
//               Sign Up
//             </Button>
//           </Box>
//           <Typography variant="body2" sx={{ mt: 2 }}>
//             Already have an account?{" "}
//             <Link href="/login" underline="hover">
//               Log in
//             </Link>
//           </Typography>
//         </Box>
//       </Container>
//     </>
//   );
// };

// export default Signin;

import React from "react";
import {
  Typography,
  Button,
  TextField,
  Container,
  Box,
  Link,
} from "@mui/material";

const Signin = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Box
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: "#ffffff",
          boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
          border: "1px solid #E0E0E0",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "#FFB300", fontWeight: "bold" }}
        >
          Create Account
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#616161", mb: 3 }}>
          Join us in powering a cleaner future.
        </Typography>

        <Box component="form">
          <TextField
            label="Full Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
          />

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              backgroundColor: "#FFB300",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#FFA000",
              },
            }}
          >
            Sign Up
          </Button>
        </Box>

        <Typography variant="body2" sx={{ mt: 2, color: "#616161" }}>
          Already have an account?{" "}
          <Link href="/login" underline="hover" sx={{ color: "#0288D1" }}>
            Log in
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Signin;


