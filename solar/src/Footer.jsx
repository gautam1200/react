import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, styled, TextField, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import React, { useState } from 'react'
import footer from './footer.jpg'
import logo from './Solarlogo.png'
import ll1 from './Ll1.svg'
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


function Footers() {
    const [hover, setHover] = useState(false);
    const iconStyle = {
        cursor: 'pointer',
        color: '#ffffffba',
        fontSize: '32px',
        transition: 'all 0.6s',
        '&:hover': {
            color: '#ffa200',
            transition: 'all 0.6s'
        },
        mx: 1,
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };




    return (
        <>
            <Box className="w-100">
                <Box className="main"
                    display={'flex'}
                    flexDirection={{ xs: 'column', md: 'row' }}
                    flexWrap={'wrap'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    padding={'30px 0'}
                >
                    <Box>
                        <Typography
                            fontFamily={'math'}
                            textAlign={'center'}
                            fontSize={'30px'}
                            fontWeight={'600'}
                            sx={{
                                transition: 'all 0.6s',
                                '&:hover': {
                                    color: '#ffa200',
                                    transition: 'all 0.6s'
                                },
                            }}>
                            Switch to Solar Energy & Save Big!
                        </Typography>
                        <Typography
                            fontFamily={'math'}
                            textAlign={'center'}
                            fontSize={'24px'}
                            fontWeight={'600'}
                            sx={{
                                transition: 'all 0.6s',
                                '&:hover': {
                                    color: '#ffa200',
                                    transition: 'all 0.6s'
                                },
                            }}>
                            Contact us for more details.
                        </Typography>
                    </Box>
                    <Box>
                        <React.Fragment>
                            <Button variant="outlined" onClick={handleClickOpen}
                                sx={{
                                    padding: '10px 15px',
                                    fontSize: '18px',
                                    border: '3px solid #1976d2',
                                    borderRadius: '15px',
                                    '&:hover': {
                                        color: 'white',
                                        backgroundColor: '#1976d2'
                                    }
                                }}>
                                TALK TO SOLAR EXPERT
                            </Button>
                            <BootstrapDialog
                                onClose={handleClose}
                                aria-labelledby="customized-dialog-title"
                                open={open}
                            >
                                <DialogTitle sx={{ m: 0 }} id="customized-dialog-title">
                                    TALK TO OUR SOLAR EXPERT
                                </DialogTitle>
                                <IconButton
                                    aria-label="close"
                                    onClick={handleClose}
                                    sx={(theme) => ({
                                        position: 'absolute',
                                        right: 8,
                                        top: 8,
                                        color: theme.palette.grey[400],
                                    })}
                                >
                                    <CloseIcon />
                                </IconButton>
                                <DialogContent dividers>
                                    <TextField
                                        type="text"
                                        variant="outlined"
                                        placeholder='Enter name'
                                        fullWidth
                                        required
                                        sx={{
                                            padding: '10px 0',
                                            input: {
                                                color: 'black',
                                                '&::placeholder': { color: 'black', opacity: 1 },
                                            },
                                        }}
                                    />

                                    <TextField
                                        type="email"
                                        placeholder="Enter Email"
                                        variant="outlined"
                                        fullWidth
                                        required
                                        sx={{
                                            padding: '10px 0',
                                            input: {
                                                color: 'black',
                                                '&::placeholder': { color: 'black', opacity: 1 }
                                            }
                                        }}
                                    />
                                    <TextField
                                        type="text"
                                        variant="outlined"
                                        placeholder='Number'
                                        fullWidth
                                        required
                                        sx={{
                                            padding: '10px 0',
                                            input: {
                                                color: 'black',
                                                '&::placeholder': { color: 'black', opacity: 1 },
                                            },
                                        }}
                                    />
                                    <TextField
                                        type="text"
                                        variant="outlined"
                                        placeholder='Location'
                                        fullWidth
                                        required
                                        sx={{
                                            padding: '10px 0',
                                            input: {
                                                color: 'black',
                                                '&::placeholder': { color: 'black', opacity: 1 },
                                            },
                                        }}
                                    />
                                </DialogContent>
                                <DialogActions >
                                    <Box display="flex" justifyContent="center" width="100%">

                                        <Button autoFocus onClick={handleClose}>
                                            Submit
                                        </Button>
                                    </Box>
                                </DialogActions>
                            </BootstrapDialog>
                        </React.Fragment>
                    </Box>
                </Box>
            </Box>

            {/* ===============**************==================== */}
            <Box
                className="w-100"
                sx={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${footer})`,
                    padding: '50px 0',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <Box className="main" display={'flex'}>
                    <Box className="logo" width={'50%'}>
                        <img src={logo} alt="Cafeu Logo" />
                    </Box>
                    <Box
                        width="50%"
                        display="flex"
                        justifyContent="end"
                        alignItems="center"
                        color="#ffffffba"

                    >
                        <InstagramIcon sx={iconStyle} />
                        <FacebookIcon sx={iconStyle} />
                        <XIcon sx={iconStyle} />
                        <PinterestIcon sx={iconStyle} />
                    </Box>
                </Box>
                <Box className="main" padding={'10px 0'}>
                    <hr />
                </Box>
                <Box className="main" display={'flex'} flexWrap={'wrap'} color='#ffffffb3' justifyContent={'center'} >
                    <Box width={{ xs: '80%', sm: '60%', md: '30%' }}>
                        <Typography
                            fontSize={'24px'}
                            padding={'10px 0'}
                            fontWeight={'600'}
                            fontFamily={'math'}
                            color='white'
                            width={'max-content'}
                            sx={{
                                '&:hover': {
                                    color: 'rgb(255, 111, 0)'
                                }
                            }}>
                            Contact US
                        </Typography>
                        <Typography fontSize={'20px'} fontFamily={'monospace'} fontWeight={'600'} color='#ffffffb3'>
                            +(1) 123 456 7890 <br />
                            +(1) 098 765 4321
                        </Typography>
                        <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'10px 0'}>
                            Burmsille Street, MN 55337,
                            United States
                        </Typography>
                        <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'10px 0'}>
                            info@driller.com <br />
                            info.example@driller.com
                        </Typography>
                    </Box>
                    <Box width={{ xs: '45%', sm: '30%', md: '20%' }}>
                        <Typography
                            fontSize={'24px'}
                            color='white'
                            padding={'10px 0'}
                            fontWeight={'600'}
                            fontFamily={'math'}
                            width={'max-content'}
                            sx={{
                                '&:hover': {
                                    color: 'rgb(255, 111, 0)'
                                }
                            }}>Useful Links</Typography>
                        <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'2px 0'}>About US</Typography>
                        <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'2px 0'}>Our Service</Typography>
                        <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'2px 0'}>What We Do</Typography>
                        <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'2px 0'}>Out Team</Typography>
                        <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'2px 0'}>Contact</Typography>
                    </Box>
                    <Box width={{ xs: '45%', sm: '30%', md: '20%' }} >
                        <Typography
                            fontSize={'24px'}
                            color='white'
                            padding={'10px 0'}
                            fontWeight={'600'}
                            fontFamily={'math'}
                            width={'max-content'}
                            sx={{
                                '&:hover': {
                                    color: 'rgb(255, 111, 0)'
                                }
                            }}>More Service</Typography>
                        <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'2px 0'}>Accounting</Typography>
                        <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'2px 0'}>Risk Management</Typography>
                        <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'2px 0'}>Accounting</Typography>
                        <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'2px 0'}>Marketing</Typography>
                        <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'2px 0'}>Financial</Typography>
                    </Box>
                    <Box width={{ xs: '80%', sm: '60%', md: '30%' }} >
                        <Typography
                            fontSize={'24px'}
                            color='white'
                            padding={'10px 0'}
                            fontWeight={'600'}
                            fontFamily={'math'}
                            width={'max-content'}
                            sx={{
                                '&:hover': {
                                    color: 'rgb(255, 111, 0)'
                                }
                            }}>Newsletter</Typography>
                        <Typography fontFamily={'emoji'} fontSize={'20px'} padding={'10px 0'}>It is a long established fact that a reader will be distracted</Typography>

                        <Box
                            component="form"
                            sx={{ display: 'flex', mb: 3, width: '100%' }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                type="email"
                                placeholder="Enter Email"
                                variant="outlined"
                                fullWidth
                                sx={{
                                    padding: '10px',
                                    input: {
                                        color: 'white',
                                        '&::placeholder': { color: '#ffffffb3', opacity: 1 }
                                    }
                                }}
                            />
                        </Box>
                        <Box>

                            <button
                                style={{
                                    width: '80%',
                                    borderRadius: '30px',
                                    border: 'none',
                                    padding: '10px',
                                    fontSize: '20px',
                                    backgroundColor: hover ? '#ff9000' : 'green',
                                    color: 'white',
                                    fontFamily: 'monospace',
                                    transition: 'background-color 0.4s',
                                    margin: 'auto'
                                }}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                            >
                                Subscribe Now
                            </button>
                        </Box>
                    </Box>
                </Box>
                <Box className="main" padding={'10px 0'}>
                    <hr />
                </Box>
                <Box className="main" display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'}>
                    <Typography color='white' padding={'10px 0'}>
                        © All Copyright 2025 by Solar
                    </Typography>
                    <img src={ll1} alt="" />
                </Box>
            </Box >
        </>
    )
}

export default Footers
