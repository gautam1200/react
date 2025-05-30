import React from 'react'
import video from './Second.mp4'
import { Box, Typography } from '@mui/material'
import Hedings from './Hedings'
import solution from './blog-4.jpg'
import home from './homeimg.jpg'
import s3 from './s3.jpg'
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import { Translate } from '@mui/icons-material'
// import right from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Footers from './Footer'

function Secpage() {
    const css = {
        fontSize: '40px',
        padding: '10px',
        border: '2px solid #233b77',
        borderRadius: '40px',
        color: '#233b77',
        '&:hover': {
            backgroundColor: '#233b77',
            color: 'white',
        },
    };
    const [hovered, setHovered] = React.useState(false);
    const [hovereda, setHovereda] = React.useState(false);
    const [hoveredb, setHoveredb] = React.useState(false);
    const surya = [
        {
            logo: <ShareLocationIcon sx={css} />,
            text: "We have a pan-India presence"
        },
        {
            logo: <SolarPowerIcon sx={css} />,
            text: "We make high quality solar panels by ourselves"
        },
        {
            logo: <LocalAtmIcon sx={css} />,
            text: "Facilitate easy solar loan"
        },
        {
            logo: <SolarPowerIcon sx={css} />,
            text: "We provide end-to-end solutions"
        },
        {
            logo: <ShareLocationIcon sx={css} />,
            text: "We are an experienced team at project executions"
        },
        {
            logo: <ShareLocationIcon sx={css} />,
            text: "Guarantee of 48-hour service"
        },
    ]

    const Benefits = [
        {
            logo: <KeyboardDoubleArrowRightIcon />,
            text: "Get up to 40% solar subdidy by Central government ",
        },
        {
            logo: <KeyboardDoubleArrowRightIcon />,
            text: "Bring your electricity to zero"
        },
        {
            logo: <KeyboardDoubleArrowRightIcon />,
            text: "Use the rooftop for earning money"
        },
        {
            logo: <KeyboardDoubleArrowRightIcon />,
            text: "Insulated from rising fossil fuel prices"
        },
        {
            logo: <KeyboardDoubleArrowRightIcon />,
            text: "Reduce the heating of the house"
        },
        {
            logo: <KeyboardDoubleArrowRightIcon />,
            text: "Easy finance options are available"
        },
        {
            logo: <KeyboardDoubleArrowRightIcon />,
            text: "Environment-friendly option"
        },
    ]
    return (
        <>
            <Box className="w-100" margin={'0'} position={'relative'} backgroundColor="#00000052">
                <Hedings></Hedings>
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
                            transition: 'all 0.6s',
                            '&:hover': {
                                color: '#ffa200',
                                transition: 'all 0.6s'
                            },
                        }}>
                        Going Green Starts With Your Rooftop. And It Costs Lesser Than You Think
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
            {/* ==============****************================== */}
            <Box className="w-100" padding={'50px 0'} backgroundColor={'#e9e9e9'}>
                <Box className="main" display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'}>
                    <Box className="Solutions" width={{ xs: '100%', md: '45%' }} display={'flex'} alignItems={'center'}>
                        <img src={solution} alt="" width={'100%'}
                            style={{
                                borderRadius: '10px',
                                transition: 'transform 0.5s ease',
                                transform: hovered ? 'scale(1.05)' : 'scale(1.02)',
                            }}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)} />
                    </Box>
                    <Box className="Solutions" width={{ xs: '100%', md: '50%' }} >
                        <Typography
                            fontSize={'36px'}
                            fontWeight={'700'}
                            fontFamily={'math'}
                            sx={{
                                transition: 'all 0.6s',
                                '&:hover': {
                                    color: '#ffa200',
                                    transition: 'all 0.6s'
                                },
                            }}>
                            Solar Rooftop Solutions
                        </Typography>
                        <Typography
                            fontFamily={'serif'}
                            fontSize={'19px'}
                            padding={'15px 0'}
                            textAlign={'justify'}
                            sx={{
                                transition: 'all 0.6s',
                                '&:hover': {
                                    color: '#ffa200',
                                    transition: 'all 0.6s'
                                },
                            }}>
                            Solar power is a highly efficient form of energy that is sustainable. It is also the most effective form of implementing sustainable energy consumption in homes. Residential areas fully rely on conventional electricity sources. But with solar power now available and the Government of India promoting its implementation in residential buildings, rooftop solar in India is becoming a popular option. There are also provisions for selling back the excess electricity into the grid and earning money.
                        </Typography>
                        <Typography
                            fontFamily={'serif'}
                            fontSize={'19px'}
                            padding={'15px 0'}
                            textAlign={'justify'}
                            sx={{
                                transition: 'all 0.6s',
                                '&:hover': {
                                    color: '#ffa200',
                                    transition: 'all 0.6s'
                                },
                            }}>
                            Surya Solar provides residential solar installation with a dedicated team that is available around the clock to provide optimum solutions. Choose Surya Solar for a seamless transition to sustainable solar power.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            {/* ==============****************================== */}
            <Box className="w-100" padding={'50px 0'} backgroundColor="#233b77">
                <Box className="main" display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'}>
                    <Box className="Solutions" width={{ xs: '100%', md: '50%' }} >
                        <Typography
                            fontSize={'32px'}
                            fontWeight={'700'}
                            fontFamily={'math'}
                            color='white'
                            sx={{
                                transition: 'all 0.6s',
                                '&:hover': {
                                    color: '#ffa200',
                                    transition: 'all 0.6s'
                                },
                            }}>
                            How Does a Rooftop System Work?
                        </Typography>
                        <Typography
                            fontFamily={'serif'}
                            fontSize={'20px'}
                            padding={'15px 0'}
                            color='#ffffffb0'
                            textAlign={'justify'}
                            sx={{
                                transition: 'all 0.6s',
                                '&:hover': {
                                    color: '#ffa200',
                                    transition: 'all 0.6s'
                                },
                            }}>
                            A rooftop is an ideal space for installing solar panels for personal energy consumption. A place that is otherwise left barren, it can house the required number of solar panels according to your home needs. The solar panels absorb sunlight and convert it to electricity. It is then stored in batteries to be used as and when required.
                        </Typography>
                        <Typography
                            fontFamily={'serif'}
                            fontSize={'20px'}
                            padding={'15px 0'}
                            color='#ffffffb0'
                            textAlign={'justify'}
                            sx={{
                                transition: 'all 0.6s',
                                '&:hover': {
                                    color: '#ffa200',
                                    transition: 'all 0.6s'
                                },
                            }}>
                            It reduces your energy bills significantly. Once you can fully harvest solar power for all your needs, you can safely say the energy bills are eliminated.
                            With the Government of India providing schemes and rooftop subsidies, solar power is a cost-effective way to consume electricity.
                        </Typography>
                    </Box>
                    <Box className="Solutions" width={{ xs: '100%', md: '45%' }} display={'flex'} alignItems={'center'}>
                        <img src={home} alt="" width={'100%'}
                            style={{
                                borderRadius: '10px',
                                transition: 'transform 0.5s ease',
                                transform: hovereda ? 'scale(1.05)' : 'scale(1.02)',
                            }}
                            onMouseEnter={() => setHovereda(true)}
                            onMouseLeave={() => setHovereda(false)} />
                    </Box>
                </Box>
            </Box>
            {/* ==============****************================== */}
            <Box className="w-100" backgroundColor="#e9e9e9" padding={'50px 0'}>
                <Box className="main" width={'70%'}>
                    <Typography
                        textAlign={'center'}
                        fontSize={'46px'}
                        fontFamily={'math'}
                        fontWeight={'600'}
                        sx={{
                            lineHeight:'1',
                            transition: 'all 0.6s',
                            '&:hover': {
                                color: '#ffa200',
                                transition: 'all 0.6s'
                            },
                        }}>
                        Why Choose Surya Solar
                    </Typography>
                    <Typography
                        textAlign={'center'}
                        fontFamily={'fangsong'}
                        fontSize={'22px'}
                        sx={{
                            transition: 'all 0.6s',
                            '&:hover': {
                                color: '#ffa200',
                                transition: 'all 0.6s'
                            },
                        }}>
                        Surya Solar is one of the best solar rooftop companies in Gujarat. Here are some more reasons why you should pick Surya Solar.
                    </Typography>
                </Box>
                <Box className="main" display={'flex'} flexWrap={'wrap'} justifyContent={'space-around'} padding={'20px 0'}>
                    {surya.map((kl) => (
                        <Box

                            width={{ xs: '100%', sm: '35%', md: '24%' }}
                            textAlign={'center'}
                            padding={'25px'}
                            border={'1px solid #00000070'}
                            boxShadow={'-5px 1px 16px -7px #000000a6'}
                            margin={'10px 0'}
                            backgroundColor={'white'}
                            sx={{
                                transition: 'transform 0.3s',
                                '&:hover': {
                                    transform: 'translate(0 ,-8px)',
                                    boxShadow: '2px 8px 10px #000000a6'
                                },
                            }}
                        >
                            <Typography>
                                {kl.logo}
                            </Typography>
                            <Typography
                                padding={'10px 0'}
                                fontFamily={'sans-serif'}
                                fontSize={'19px'}
                                fontWeight={'600'}
                                sx={{
                                    '&:hover': {
                                        color: '#233b77'
                                    }
                                }}
                            >
                                {kl.text}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
            {/* ==============****************================== */}
            <Box className="w-100" padding={'50px 0'} backgroundColor="#233b77">
                <Box className="main" display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'}>
                    <Box className="Solutions" width={{ xs: '100%', md: '45%' }} display={'flex'} alignItems={'center'}>
                        <img
                            src={s3}
                            alt=""
                            width="100%"
                            style={{
                                borderRadius: '10px',
                                transition: 'transform 0.5s ease',
                                transform: hoveredb ? 'scale(1.05)' : 'scale(1.02)',
                            }}
                            onMouseEnter={() => setHoveredb(true)}
                            onMouseLeave={() => setHoveredb(false)}
                        />
                    </Box>
                    <Box className="Solutions" width={{ xs: '100%', md: '50%' }} display={'flex'} flexWrap={'wrap'} alignItems={'center'} >
                        <Typography
                            fontSize={'32px'}
                            fontWeight={'700'}
                            fontFamily={'math'}
                            color='white'
                            sx={{
                                transition: 'all 0.6s',
                                '&:hover': {
                                    color: '#ffa200',
                                    transition: 'all 0.6s'
                                },
                            }}>
                            Benefits of Going Solar
                        </Typography>
                        <Box display={'flex'} flexWrap={'wrap'} >
                            {Benefits.map((jk) => (
                                <>
                                    <Box
                                        width={'10%'}
                                        display={'flex'}
                                        alignItems={'center'}
                                        color={'#ffffffb5'}
                                        sx={{
                                            transition: 'all 0.6s',
                                            '&:hover': {
                                                color: '#ffa200',
                                                transition: 'all 0.6s'
                                            },
                                        }}>
                                        {jk.logo}
                                    </Box>
                                    <Box
                                        width={'90%'}
                                        display={'flex'}
                                        alignItems={'center'}
                                        fontSize={'20px'}
                                        fontFamily={'serif'}
                                        color={'#ffffffb5'}
                                        sx={{
                                            transition: 'all 0.6s',
                                            '&:hover': {
                                                color: '#ffa200',
                                                transition: 'all 0.6s'
                                            },
                                        }}>

                                        {jk.text}
                                    </Box>
                                </>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Footers></Footers>

        </>
    )
}

export default Secpage
