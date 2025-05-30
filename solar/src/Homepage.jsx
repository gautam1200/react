import { Box, Typography, ListItem, ListItemAvatar, Avatar, CircularProgress, styled, LinearProgress, linearProgressClasses, AvatarGroup, Accordion, AccordionSummary } from '@mui/material'
import React from 'react';
import Hedings from './Hedings';
import Performanceimg from './img-4.jpg'
import Ceoimg from './ceoimg.jpg'
import So1 from './So-1.jpg'
import So2 from './So-2.jpg'
import So3 from './So-3.jpg'
import So4 from './So-4.jpg'
import So5 from './P3.webp'
import So6 from './blog-7.jpg'
import Slider from "react-slick";
import Proimg from './choose-us-2.jpg'
import p1 from './p1.png'
import p2 from './p2.png'
import z1 from './z1.jpg'
import z2 from './z2.jpg'
import z3 from './z3.jpg'
import z4 from './z4.jpg'
import z5 from './z5.jpg'
import o2 from './o1.png'
import blog1 from './blog-5.jpg'
import blog2 from './blog-6.jpg'
import blog3 from './blog-4.jpg'
import user from './user1.png'
import commente from './comment.png'
import Bac1 from './bac1.png'
import question from './question.png'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AccordionDetails from '@mui/material/AccordionDetails';
import solar from './pahal-solar.gif'
import LocationPinIcon from '@mui/icons-material/PinDrop';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import SecurityIcon from '@mui/icons-material/Security';
import Footers from './Footer';
import india from './india.png'
import video from './P11.mp4'
import logo1 from './logo1.png'
import logo2 from './logo2.png'
import logo3 from './logo3.png'
import logo4 from './logo4.png'
import logo5 from './logo5.png'
import logo6 from './logo6.png'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';


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
const questions = [{
  title: "What is Equality and solidarity?",
  text: "The generated is therefore always free from repetition, injected humour, or words etc."
},
{
  title: "How to inspire humanity?",
  text: "The generated is therefore always free from repetition, injected humour, or words etc."
},
{
  title: "Where are Better living programs?",
  text: "The generated is therefore always free from repetition, injected humour, or words etc."
}
]
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8',
    }),
  },
}));
function Homepage() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };
  const images = [So1, So2, So3, So4];
  const blog = [{
    images: blog1,
    lebal1: "nextwpcook",
    commente: " Comment (0)",
    title: "Impact of Solar Energy on Reducing Carbon"
  },
  {
    images: blog2,
    lebal1: "nextwpcook",
    commente: " Comment (0)",
    title: "The Financial Benefits of Solar Installation"
  },
  {
    images: blog3,
    lebal1: "nextwpcook",
    commente: " Comment (0)",
    title: "How Solar Energy Contributes to Sustainable"
  }
  ]
  const solars = [
    {
      logo: <LocationPinIcon />,
      title: "Pan India Presence ",
      text: "Our growing presence across India as one of the leading solar panel manufacturers greatly helps with us with on-time service, local liasoning and efficient project management activities."
    },
    {
      logo: <LocationPinIcon />,
      title: "We make high quality solar panels by ourselves ",
      text: "We manufacture superior-quality mono crystalline solar panels and polycrystalline solar panels in our top-of-the-line solar manufacturing facility."
    },
    {
      logo: < EmojiEventsIcon />,
      title: "Experienced Project Execution",
      text: "The success of our industrial and residential solar installation projects is fueled by our strong and dedicated project execution team, with a focus on quality and performance."
    },
    {
      logo: < WatchLaterIcon />,
      title: "48 Hour Services Guarantee ",
      text: "With a dedicated and in-house O&M team with constant remote monitoring, we strive to exceed the highest level of support and service customers expect when working with India’s best solar panel company."
    },
    {
      logo: < SecurityIcon />,
      title: "End-To-End Solutions ",
      text: "As leading solar EPC contractors in India, we focus on offering end-to-end design, engineering, and O&M for solar projects across the commercial, industrial, residential and institutional sectors."
    },
  ]
  const [hoveredb, setHoveredb] = React.useState(false);
  const module = [{
    logo: logo2,
    title: "800MW",
    text: "Solar Module Manufacturing"
  },
  {
    logo: logo3,
    title: "5+MW",
    text: "Engineered"
  },
  {
    logo: logo5,
    title: "14+",
    text: "States Covered"
  },
  {
    logo: logo4,
    title: "30,000t",
    text: "CO2 Emissions Mitigated"
  },
  {
    logo: logo1,
    title: "250+",
    text: "Successful Projects"
  },
  {
    logo: logo6,
    title: "350+",
    text: "Happy Clients"
  },
  ]
  return (
    <>
      {/* ===============**************==================== */}
      <Box className="homepage">
        <Hedings></Hedings>
        <Box sx=
          {{
            width: { xs: '85%', sm: '66%', md: '56%' },
            margin: 'auto',
            marginTop: '-50px',
            textAlign: 'center'
          }}>
          <Typography variant="h4" component="h2"
            sx={{
              fontFamily: 'cursive',
              fontSize: { xs: '20px' },
              color: '#ffa200',
              padding: '10px 0'
            }}>
            Instant. Simple. Smart.
          </Typography>
          <Typography variant='h2'
            sx={{
              fontSize: { xs: '43px', sm: '50px', md: '58px' },
              fontFamily: 'math',
              fontWeight: '600',
              transition: 'all 0.6s',
              color: 'white',
              '&:hover': {
                color: '#ffa200',
              }
            }}>
            Save Energy and Save Earth for Your Future Generations.
          </Typography>
        </Box>
      </Box>
      {/* ===============**************==================== */}
      <Box className="w-100">
        <Box className="main" sx={{ padding: '35px 0' }}>
          <Box className="cards-wrapper">
            {cards.map((card, index) => (
              <Box
                key={index}
                className="card-container">
                <Box className={`icon ${card.iconClass}`} >
                </Box>
                <Typography
                  fontSize={'24px'}
                  fontWeight="bold"
                  transition="all 0.5s"
                  gutterBottom
                  sx={{
                    '&:hover': {
                      color: '#ffa200',
                      transition: "all 0.6s"
                    },
                  }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary"
                  sx={{
                    '&:hover': {
                      color: '#ffa200',
                      transition: "all 0.6s"
                    },
                  }}>
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
          <Box padding={{ xs: '10px', lg: '50px' }} margin={'auto'}>
            <Typography
              fontSize={{ sx: '20px' }}
              width={{ xs: '85%', md: '82%', lg: '93%' }}
              margin={'auto'}
              sx={{
                transition: 'all 0.6s',
                '&:hover': {
                  color: '#ffa200',
                  transition: 'all 0.6s'
                },
              }}>
              | PERFORMANCE
            </Typography>
            <Typography
              fontSize={{ lg: '70px', md: '56px', xs: '32px' }}
              width={{ xs: '85%', md: '82%', lg: '93%' }}
              fontFamily={'math'}
              fontWeight={'600'}
              margin={'auto'}
              padding={'10px 0'}
              sx={{
                lineHeight: '1.1',
                transition: 'all 0.4s',
                '&:hover': {
                  color: '#ffa200',
                  transition: 'all 0.4s'
                },
              }}>
              Solar Powering Your Sustainable Scene
            </Typography>
            <Box
              display={'flex'}
              flexWrap={'wrap'}
              justifyContent={'space-around'}
              width={{ sm: '85%', md: '100%' }}
              margin={'auto'}>
              <Box width={{ xs: '60%', sm: '29%' }} sx={{ backgroundColor: 'rgb(20, 21, 21)', padding: '10px 15px', borderRadius: '10px', alignItems: 'center', display: 'flex' }} justifyContent={'space-evenly'} >
                <Box
                  display={'flex'}
                  justifyContent={'center'}
                  flexWrap={'wrap'}
                  width={'100%'}
                  padding={{ xs: '40px 0', sm: '0' }}
                  margin={'auto'} >
                  <img src={Ceoimg} alt="" style={{ borderRadius: '50%' }} />
                  <Box>
                    <Typography color='white' fontSize={{ xs: '18px', sm: '20px' }}
                      sx={{
                        fontWeight: '600',
                        transition: 'all 0.6s',
                        '&:hover': {
                          color: '#ffa200',
                          transition: 'all 0.6s'
                        },
                      }}>
                      Roberto Lewis
                    </Typography>
                    <Typography color='#ffffffab' fontSize={{ xs: '18px', sm: '20px' }}
                      sx={{
                        transition: 'all 0.6s',
                        '&:hover': {
                          color: '#ffa200',
                          transition: 'all 0.6s'
                        },
                      }}>
                      Founder of CEO
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box padding={'10px'} width={{ xs: '90%', sm: '60%' }}>
                <Typography
                  fontSize={{ xs: '16px', md: '20px' }}
                  width={'95%'}
                  margin={'auto'}
                  textAlign={'justify'}
                >
                  Solar Powering Your Sustainable Scene" is a vibrant and compelling phrase that conveys the idea of integrating solar energy into
                </Typography>
                <Box padding={'20px 0'} display={'flex'} justifyContent={'space-evenly'}>
                  <Box width={'40%'} display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
                    <Box position="relative" display="inline-flex">
                      <CircularProgress variant="determinate" value={89} size={90} color="success" />
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
                        <Typography variant="h5" color="text.secondary">
                          89%
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: '20px', sm: '26px' },
                        fontFamily: 'math',
                        padding: '10px 0',
                        fontWeight: '600',
                        transition: 'all 0.6s',
                        '&:hover': {
                          color: '#ffa200',
                          transition: 'all 0.6s'
                        },
                      }}>
                      Successful
                    </Typography>
                  </Box>
                  <Box width={'40%'} display={'flex'} flexWrap={'wrap'} justifyContent={'center'}>
                    <Box position="relative" display="inline-flex">
                      <CircularProgress variant="determinate" value={72} size={90} color="success" />
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
                        <Typography variant="h5" color="text.secondary">
                          72%
                        </Typography>
                      </Box>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: '20px', sm: '26px' },
                        fontFamily: 'math',
                        padding: '10px 0',
                        fontWeight: '600',
                        transition: 'all 0.6s',
                        '&:hover': {
                          color: '#ffa200',
                          transition: 'all 0.6s'
                        },
                      }}>
                      Branching
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="Performance-img" width={{ lg: '35%', md: '35%', xs: '100%' }} overflow={'hidden'} display={'flex'} justifyContent={'center'}>
          <img
            src={Performanceimg}
            alt="Performance"
            sx={{ display: 'block', width: '100%', objectFit: 'cover', height: { xs: '50%', md: '100%' } }}
          />
        </Box>
      </Box >
      {/* ===============**************==================== */}
      <Box Box className="w-100" overflow={'hidden'} padding={'50px 0'}>
        <Slider {...settings}>
          {images.map((imgSrc, index) => (
            <>
              <Box className="imghover" key={index} zIndex={'0'} position={'relative'} overflow={'hidden'}>
                <img
                  src={imgSrc}
                  alt={`Slide ${index + 1}`}
                  style={{ width: '100%', height: '100%' }}
                />
                <Box className="imghovers">
                </Box>
                <Box className="imgicon">
                  <img src={o2} alt="" />
                </Box>
              </Box>
            </>
          ))}
        </Slider>
      </Box >
      {/* ===============**************==================== */}
      < Box className="w-100" display={'flex'} flexWrap={'wrap'} sx={{ backgroundColor: 'black', color: 'white' }} justifyContent={'center'} >
        < Box className="Performance" width={{ lg: '60%', md: '60%', sm: '80%', xs: '100%' }} display={'flex'} alignItems={'center'} >
          <Box 
          padding={{ xs: '30px 10px', lg: '50px' }} 
          margin={'auto'}
          textAlign={{xs:'justify' ,sm:'left'}}>
            <Typography fontSize={{ sx: '20px' }}
              sx={{
                margin: 'auto',
                width: { xs: '85%', md: '82%', lg: '93%' },
                '&:hover': {
                  color: '#ffa200',
                  transition: "all 0.6s"
                },
              }} >
              | WHY CHOOSE US
            </Typography>
            <Typography
              fontSize={{ lg: '70px', md: '56px', xs: '34px' }}
              width={{ xs: '85%', md: '82%', lg: '93%' }}
              fontFamily={'math'}
              fontWeight={'600'}
              margin={'auto'}
              padding={'10px 0'}
              sx={{
                lineHeight: '1.1',
                transition: 'all 0.4s',
                '&:hover': {
                  color: '#ffa200',
                  transition: 'all 0.4s'
                },
              }}>
              Proven Excellence Client's Choice
            </Typography>
            <Box>
              <Typography
                fontFamily={'math'}
                fontSize={{ xs: '18px', sm: '20px' }}
                width={{ xs: '85%', md: '82%', lg: '93%' }}
                margin={'auto'}
              >
                Business, or everyday living, imagine a world where solar success is not just an aspiration but a reality driven by the
              </Typography>
            </Box>
            <Box display={'flex'} flexWrap={'wrap'}>
              <ListItem alignItems="center" sx={{ width: { xs: '51%', sm: '40%' }, margin: 'auto' }}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={p1} sx={{ width: '70px', height: '70px' }} />
                </ListItemAvatar>
                <Typography padding={'0px 20px'}
                  sx={{
                    transition: 'all 0.4s',
                    '&:hover': {
                      color: '#ffa200',
                      transition: 'all 0.4s'
                    },
                  }}>
                  Trusted <br />
                  Results
                </Typography>
              </ListItem>
              <ListItem alignItems="center" sx={{ width: { xs: '51%', sm: '40%' }, margin: 'auto' }}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={p2} sx={{ width: '70px', height: '70px' }} />
                </ListItemAvatar>
                <Typography padding={'0px 20px'}
                  sx={{
                    transition: 'all 0.4s',
                    '&:hover': {
                      color: '#ffa200',
                      transition: 'all 0.4s'
                    },
                  }}>
                  Client<br />
                  Satisfaction
                </Typography>
              </ListItem>
            </Box>
            <Box width={{ xs: '90%', sm: '80%' }} padding={'15px 0'} margin={'auto'}>

              <Box spacing={2} sx={{ flexGrow: '1', margin: '15px 0' }}>
                <Box display={'flex'} justifyContent={'space-between'}>
                  <Typography>
                    Hybrid Energy
                  </Typography>
                  <Typography>
                    76%
                  </Typography>
                </Box>
                <BorderLinearProgress variant="determinate" value={76} />
              </Box>
              <Box spacing={2} sx={{ flexGrow: '1', margin: '15px 0' }}>
                <Box display={'flex'} justifyContent={'space-between'}>
                  <Typography>
                    Wind Turbines
                  </Typography>
                  <Typography>
                    61%
                  </Typography>
                </Box>
                <BorderLinearProgress variant="determinate" value={61} />
              </Box>
            </Box>
          </Box>
        </Box >

        <Box className="Proven-img" width={{ lg: '40%', md: '40%', sm: '60%', sx: '100%' }} position={'relative'} sx={{ objectFit: 'cover' }}>
          <img src={Proimg} alt="" width={'100%'} height={'100%'} />
          <Box
            padding={'30px'}
            width={'max-content'}
            sx={{
              backgroundColor: 'white',
              position: 'absolute',
              bottom: { xs: '0%', sm: '5%', md: '10%' },
              left: { xs: '0%', sm: '-10%', md: '-10%' },
              borderRadius: '10px',
              boxShadow: '0px 1px 7px 2px #c5c5c5db'
            }}>
            <AvatarGroup max={4}>
              <Avatar alt="Remy Sharp" src={z1} />
              <Avatar alt="Travis Howard" src={z2} />
              <Avatar alt="Cindy Baker" src={z3} />
              <Avatar alt="Agnes Walker" src={z4} />
              <Avatar alt="Trevor Henderson" src={z5} />
            </AvatarGroup>
            <Typography color='black' margin={'10px 0'}
              sx={{
                transition: 'all 0.4s',
                '&:hover': {
                  color: '#ffa200',
                  transition: 'all 0.4s'
                },
              }}>
              25,000 Customer <br />
              Satisfaction services
            </Typography>
          </Box>
        </Box>
      </Box >
      {/* ===============**************==================== */}
      < Box className="w-100" >
        <Box 
        className="main"
         display={'flex'} 
         flexWrap={'wrap'} 
         justifyContent={'space-around'} padding={' 0'}>
          {blog.map((data) => (
            <Box sx={{
              width: { xs: '95%', sm: '48%', md: '32%' },
              margin: '15px 0', transition: 'all 0.4s',
              borderRadius: '10px', overflow: 'hidden',
              boxShadow: '5px 10px 10px rgba(0, 0, 0, 0.17)',
              "&:hover": {
                boxShadow: '5px 10px 10px rgba(0, 0, 0, 0.39)',
                transform: "translatey(-10px)",
                transition: "all 0.4s"
              }
            }}>
              <Box>
                <img src={data.images} alt="" width={'100%'} />
              </Box>
              <Box padding={'20px 10px'}>
                <Box display={'flex'}  >
                  <Typography
                    gutterBottom
                    fontSize={{ xs: '16px', sm: '14px' }}
                    component="div"
                    display="flex"
                    alignItems="center"
                    width="50%"
                    sx={{
                      transition: 'all 0.6s',
                      '&:hover': {
                        color: '#ffa200',
                        transition: 'all 0.6s'
                      },
                    }}
                  >
                    <PersonIcon style={{ width: '24px' }} />
                    {data.lebal1}
                  </Typography>
                  <Typography
                    gutterBottom
                    fontSize={{ xs: '16px', sm: '14px' }}
                    alignItems={'center'}
                    component="div"
                    display={'flex'}
                    width={'50%'}
                    sx={{
                      transition: 'all 0.6s',
                      '&:hover': {
                        color: '#ffa200',
                        transition: 'all 0.6s'
                      },
                    }}>
                    <ForumIcon style={{ width: '24px' }} />
                    {data.commente}
                  </Typography>
                </Box>
                <Typography
                  fontSize={{ xs: '24px', sm: '20px', md: '22px' }}
                  fontFamily={'math'}
                  fontWeight={'700'}
                  sx={{
                    transition: 'all 0.6s',
                    '&:hover': {
                      color: '#ffa200',
                      transition: 'all 0.6s'
                    },
                  }}>
                  {data.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box >
      {/* ===============**************==================== */}
      < Box className="w-100" sx={{ backgroundImage: `url(${Bac1})` }}>
        <Box textAlign={'center'} padding={'50px 0'} width={{ xs: '90%', sm: '75%', md: '60%' }} margin={'auto'}>
          <Typography
            fontSize={{ xs: '18px', sm: '22px'}}
            color='white'
            fontWeight={'600'}
            sx={{
              transition: 'all 0.6s',
              '&:hover': {
                color: '#ffa200',
                transition: 'all 0.6s'
              },
            }}>
            RECENTLY ASLED
          </Typography >
          <Typography
            fontSize={{ xs: '36px', sm: '42px', md: '59px' }}
            padding={'15px 0'}
            fontFamily={'math'}
            color='white'
            sx={{
              transition: 'all 0.6s',
              '&:hover': {
                color: '#ffa200',
                transition: 'all 0.6s'
              },
            }}>
            Asked Any Questions
          </Typography>
          <Typography
            fontSize={{ xs: '16px', sm: '20px' }}
            textAlign={{xs:'justify',sm:'center'}}
            color=' #ffffff69'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
          </Typography>
        </Box>
        <Box className="main" display={'flex'} flexWrap={'wrap'} justifyContent={'space-around'} paddingBottom={'60px '}>
          <Box width={{ xs: '100%', sm: '45%' }}>
            <img src={question} alt="" width={'100%'} height={'100%'} objectFit="cover" />
          </Box>
          <Box width={{ xs: '100%', sm: '50%' }} sx={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap' }}>
            <Box>
              {questions.map((data1) => (
                <Accordion sx={{ margin: '20px 0', borderRadius: '10px' }}>
                  <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span"
                      sx={{
                        fontWeight: '600',
                        transition: 'all 0.6s',
                        '&:hover': {
                          color: '#ffa200',
                          transition: 'all 0.6s'
                        },
                      }}
                    >{data1.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      sx={{
                        transition: 'all 0.6s',
                        '&:hover': {
                          color: '#ffa200',
                          transition: 'all 0.6s'
                        },
                      }}>
                      {data1.text}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Box>
        </Box>
      </Box >
      {/* ===============**************==================== */}
      < Box className="w-100" >
        <Box className="main">
          <img src={solar} alt="" width={'100%'} />
        </Box>
      </Box >
      {/* ===============**************==================== */}
      < Box className="w-100" sx={{ backgroundImage: `url(${Bac1})`, padding: '50px 0' }}>
        <Box className="main" display={'flex'} flexWrap={'wrap'} justifyContent={'space-between'}>
          <Box className="Manufacture" width={{ xs: '100%', sm: '45%' }} margin={'auto'} display={'flex'} alignItems={'center'}>
            <img src={india} alt="" width={'100%'} />
          </Box>
          <Box className="Manufacture" width={{ xs: '100%', sm: '80%', md: '55%' }} justifyContent={'space-between'} margin={'auto'} display={'flex'} flexWrap={'wrap'} >
            {solars.map((el, index) => (
              <>
                <Box width={'10%'} fontSize="34px" color={'orange'} margin={'10px 0'}>
                  {el.logo}
                </Box>
                <Box width={'85%'}>
                  <Typography
                    fontFamily={'math'}
                    fontSize={{ xs: '22px' }}
                    margin={'10px 0'}
                    fontWeight={'700'}
                    color={'white'}
                    sx={{
                      transition: 'all 0.6s',
                      '&:hover': {
                        color: '#ffa200',
                        transition: 'all 0.6s'
                      },
                    }}>
                    {el.title}
                  </Typography>
                  <Typography
                    color='#ffffffa3'
                    fontSize={{ xs: '15px' }}
                    textAlign={'justify'}
                    sx={{
                      transition: 'all 0.6s',
                      '&:hover': {
                        color: '#ffa200',
                        transition: 'all 0.6s'
                      },
                    }}>
                    {el.text}
                  </Typography>
                </Box>
              </>
            ))}
          </Box>
        </Box>
      </Box >
      {/* ===============**************==================== */}
      < Box className="w-100" position={'relative'} backgroundColor="#0039ffab" padding={'50px 0'} >
        <Box className="main" display={'flex'} justifyContent={'space-around'} flexWrap={'wrap'}>
          {module.map((data) => (
            <Box width={{ xs: '40%', sm: '30%', md: '15%' }} padding={'15px 0'} textAlign={'center'} color={'white'}>
              <img src={data.logo} alt="" color='white' />
              <Typography fontSize={'28px'} fontWeight={'700'}>
                {data.title}
              </Typography>
              <Typography>
                {data.text}
              </Typography>
            </Box>

          ))}
        </Box>
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
      </Box >
      <Footers></Footers>
    </>
  )
}
export default Homepage





