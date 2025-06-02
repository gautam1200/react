import {
    Box,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    styled,
    TextField,
    Typography,
} from '@mui/material';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React, { useState } from 'react';
import logo from './Solarlogo.png';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(3),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(2),
    },
}));

const Headings = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [signupOpen, setSignupOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const openLoginDialog = () => setLoginOpen(true);
    const closeLoginDialog = () => setLoginOpen(false);

    const openSignupDialog = () => {
        setLoginOpen(false);
        setSignupOpen(true);
    };
    const closeSignupDialog = () => setSignupOpen(false);
    const hedings = [{ name: 'home', id: 'home' },
    { name: 'Pages', id: 'Pages' },
    { name: 'Services', id: 'services' },
    { name: 'About Us', id: 'AboutUs' },
    { name: 'Contact', id: 'Users' },

    ]
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box className="header-container" >
                    <Box className="logo">
                        <img src={logo} alt="Solar Logo" />
                    </Box>

                    <Box className="hamburger" onClick={toggleMobileMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </Box>

                    <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                      
                            <ul className="nav-list">
                                {hedings.map((item, idx) => (
                                    <li key={idx} className="nav-item">
                                        <Link to={`${item.id}`} onClick={() => setMobileMenuOpen(false)}>
                                            {item.name}
                                        </Link>

                                    </li>
                                ))}
                                <li>
                                    <Button
                                        variant="outlined"
                                        onClick={openLoginDialog}
                                        sx={{
                                            padding: '5px 15px',
                                            fontSize: '16px',
                                            border: '2px solid white',
                                            borderRadius: '15px',
                                            color: 'white',
                                            '&:hover': {
                                                color: 'white',
                                                backgroundColor: '#ffa200',
                                                border: '2px solid #ffa200'
                                            },
                                        }}
                                    >
                                        Login
                                    </Button>
                                </li>
                            </ul>
                        
                    </nav>
                </Box>
            </Box>
            {/* Login Dialog */}
            <Dialog onClose={closeLoginDialog} open={loginOpen}>
                <DialogTitle>
                    Login
                    <IconButton
                        aria-label="close"
                        onClick={closeLoginDialog}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Typography variant="h4" gutterBottom sx={{ color: '#FFB300', fontWeight: 'bold' }}>
                        Welcome Back!
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: '#616161', mb: 3 }}>
                        Welcome to Surya Solar – Log In to Your Account
                    </Typography>
                    <Box component="form" onSubmit={(e) => e.preventDefault()}>
                        <TextField label="Email" type="email" fullWidth margin="normal" required />
                        <TextField label="Password" type="password" fullWidth margin="normal" required />
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                mt: 2,
                                backgroundColor: '#ffa200',
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: '#ffa200',
                                },
                            }}
                        >
                            Log In
                        </Button>
                    </Box>
                    <Typography variant="body2" sx={{ mt: 2 }}>
                        New here?{' '}
                        <Link href="#" underline="hover" sx={{ color: '#0288D1' }} onClick={openSignupDialog}>
                            Create an account
                        </Link>
                    </Typography>
                </DialogContent>
            </Dialog>

            {/* Signup Dialog */}
            <Dialog onClose={closeSignupDialog} open={signupOpen}>
                <DialogTitle>
                    Sign Up
                    <IconButton
                        aria-label="close"
                        onClick={closeSignupDialog}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <Typography variant="h4" gutterBottom sx={{ color: '#FFB300', fontWeight: 'bold' }}>
                        Create Account
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: '#616161', mb: 3 }}>
                        Surya Solar Customer Portal – Sign In
                    </Typography>
                    <Box component="form" onSubmit={(e) => e.preventDefault()}>
                        <TextField label="Full Name" fullWidth margin="normal" required />
                        <TextField label="Email" type="email" fullWidth margin="normal" required />
                        <TextField label="Password" type="password" fullWidth margin="normal" required />
                        <TextField label="Confirm Password" type="password" fullWidth margin="normal" required />
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                mt: 3,
                                backgroundColor: '#FFB300',
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: '#FFA000',
                                },
                            }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                    <Typography variant="body2" sx={{ mt: 2, color: '#616161' }}>
                        Already have an account?{' '}
                        <Link
                            href="#"
                            underline="hover"
                            sx={{ color: '#0288D1' }}
                            onClick={() => {
                                closeSignupDialog();
                                openLoginDialog();
                            }}
                        >
                            Log in
                        </Link>
                    </Typography>
                </DialogContent>
            </Dialog>

        </>
    );
};

export default Headings;

