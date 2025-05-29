import React, { useState } from "react";
import {
  Typography,
  Button,
  Container,
  Box,
  TextField,
  Link,
} from "@mui/material";

const Login = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false); 

  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen); 

  const menuItems = ["Home", "Pages", "Menu", "Blog", "About Us", "Contact"];

  return (
    <>

      {/* Login Form */}
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Box
          sx={{
            p: 4,
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: "#ffffff",
            border: "1px solid #eeeeee",
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: "#FFB300", fontWeight: "bold" }}>
            Welcome Back!
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#616161", mb: 3 }}>
            Log in to order your favorite meals
          </Typography>

          <Box component="form">
            <TextField
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              margin="normal"
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                backgroundColor: "#FFB300",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#FFA000",
                },
              }}
            >
              Log In
            </Button>
          </Box>

          <Typography variant="body2" sx={{ mt: 2 }}>
            New here?{" "}
            <Link href="/signup" underline="hover" sx={{ color: "#0288D1" }}>
              Create an account
            </Link>
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Login;
