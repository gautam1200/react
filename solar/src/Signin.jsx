import React from "react";
import {
  Typography,
  Button,
  TextField,
  Container,
  Box,
  Link,
} from "@mui/material";
import SolarBackground from './Banner.jpg';

const Signin = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <Box position="relative">
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100dvh',
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
      {/* Sign Up Form */}
      <Container
        maxWidth="sm"
        sx={{
          position: 'relative',
          zIndex: 3,
          margin: 'auto',
          py: 8,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            p: 4,
            borderRadius: 3,
            backgroundColor: "#ffffff",
            boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
            border: "1px solid #E0E0E0",
            width: '100%',
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

          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              autoComplete="name"
              aria-label="full name"
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              autoComplete="email"
              aria-label="email"
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              autoComplete="new-password"
              aria-label="password"
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              autoComplete="new-password"
              aria-label="confirm password"
            />

            <Button
              type="submit"
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
    </Box>
  );
};

export default Signin;


