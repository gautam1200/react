import { Accordion, AccordionSummary, Alert, alpha, AppBar, Avatar, Backdrop, Badge, BottomNavigation, BottomNavigationAction, Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, Container, createTheme, CssBaseline, Fab, FormControl, FormControlLabel, FormGroup, FormLabel, GlobalStyles, Grid, IconButton, InputBase, Link, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Menu, MenuItem, MenuList, Pagination, PaginationItem, Paper, Radio, RadioGroup, Skeleton, Snackbar, SnackbarContent, Stack, Step, StepButton, StepContent, StepLabel, Stepper, SwipeableDrawer, Switch, TablePagination, Toolbar, Tooltip, Typography } from '@mui/material';
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import { SnackbarProvider, useSnackbar } from 'notistack';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDropDown';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccountCircle, Cloud, ContentCopy, ContentCut, ContentPaste, Logout, PersonAdd, Settings } from '@mui/icons-material';
import AdbIcon from '@mui/icons-material/Adb';
import A1 from './A1.jpeg'
import styled, { ThemeProvider, useTheme } from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { grey, red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import RestoreIcon from '@mui/icons-material/Restore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FolderIcon from '@mui/icons-material/Folder';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import { Global } from '@emotion/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useGridPagination } from '@mui/x-data-grid/internals';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EditIcon from '@mui/icons-material/Edit';





const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function Surfacess() {
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, open } = state;

    const handleClick = (newState) => () => {
        setState({ ...newState, open: true });
    };

    const handleClose = () => {
        setState({ ...state, open: false });
    };

    const buttons = (
        <React.Fragment>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={handleClick({ vertical: 'top', horizontal: 'center' })}>
                    Top-Center
                </Button>
            </Box>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid size={6}>
                    <Button onClick={handleClick({ vertical: 'top', horizontal: 'left' })}>
                        Top-Left
                    </Button>
                </Grid>
                <Grid sx={{ textAlign: 'right' }} size={6}>
                    <Button onClick={handleClick({ vertical: 'top', horizontal: 'right' })}>
                        Top-Right
                    </Button>
                </Grid>
                <Grid size={6}>
                    <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'left' })}>
                        Bottom-Left
                    </Button>
                </Grid>
                <Grid sx={{ textAlign: 'right' }} size={6}>
                    <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'right' })}>
                        Bottom-Right
                    </Button>
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
                    Bottom-Center
                </Button>
            </Box>
        </React.Fragment>
    );
    // =====================***************================
    const action = (
        <Button color="secondary" size="small">
            lorem ipsum dolorem
        </Button>
    );
    // =====================***************================
    const [opena, setOpen] = React.useState(false);

    const handleClicka = () => {
        setOpen(true);
    };

    const handleClosea = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    // =====================***************================
    const [openb, setOpenb] = React.useState(false);

    const handleClickb = () => {
        setOpenb(true);
    };

    const handleCloseb = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenb(false);
    };
    // =====================***************================
    function MyApp() {
        const { enqueueSnackbar } = useSnackbar();

        const handleClick = () => {
            enqueueSnackbar('I love snacks.');
        };

        const handleClickVariant = (variant) => () => {
            // variant could be success, error, warning, info, or default
            enqueueSnackbar('This is a success message!', { variant });
        };

        return (
            <React.Fragment>
                <Button onClick={handleClick}>Show snackbar</Button>
                <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>
            </React.Fragment>
        );
    }
    // =====================***************================
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    // =====================***************================
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChangea = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClosec = () => {
        setAnchorEl(null);
    };
    // =====================***************================
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

    const [anchorEla, setAnchorEla] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEla);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEla(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEla(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEla}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );
    // =====================***************================
    const messages = [
        {
            id: 1,
            primary: 'Brunch this week?',
            secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
            person: A1,
        },
        {
            id: 2,
            primary: 'Birthday Gift',
            secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
            person: '/static/images/avatar/1.jpg',
        },
        {
            id: 3,
            primary: 'Recipe to try',
            secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
            person: '/static/images/avatar/2.jpg',
        },
        {
            id: 4,
            primary: 'Yes!',
            secondary: 'I have the tickets to the ReactConf for this year.',
            person: '/static/images/avatar/3.jpg',
        },
        {
            id: 5,
            primary: "Doctor's Appointment",
            secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
            person: '/static/images/avatar/4.jpg',
        },
        {
            id: 6,
            primary: 'Discussion',
            secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
            person: '/static/images/avatar/5.jpg',
        },
        {
            id: 7,
            primary: 'Summer BBQ',
            secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
            person: '/static/images/avatar/1.jpg',
        },
    ];

    const StyledFab = styled(Fab)({
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    });
    // =====================***************================
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );
    // =====================***************================


    const card = (
        <React.Fragment>
            <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </React.Fragment>
    );
    // =====================***************================
    const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme }) => ({
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        variants: [
            {
                props: ({ expand }) => !expand,
                style: {
                    transform: 'rotate(0deg)',
                },
            },
            {
                props: ({ expand }) => !!expand,
                style: {
                    transform: 'rotate(180deg)',
                },
            },
        ],
    }));


    const [expandeda, setExpandeda] = React.useState(false);

    const handleExpandClick = () => {
        setExpandeda(!expandeda);
    };
    // =====================***************================
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 60,
        lineHeight: '60px',
    }));

    const darkTheme = createTheme({ palette: { mode: 'dark' } });
    const lightTheme = createTheme({ palette: { mode: 'light' } });
    // =====================***************================
    const [value, setValue] = React.useState(0);
    // =====================***************================
    const [valuea, setValuea] = React.useState('recents');

    const handleChangeb = (event, newValue) => {
        setValuea(newValue);
    };

    // =====================***************================
    // function refreshMessages() {
    //     const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

    //     return Array.from(new Array(50)).map(
    //         () => messageExamples[getRandomInt(messageExamples.length)],
    //     );
    // }

    // const [values, setValues] = React.useState(0);
    // const ref = React.useRef(null);
    // const [messagess, setMessages] = React.useState(() => refreshMessages());

    // React.useEffect(() => {
    //     ref.current.ownerDocument.body.scrollTop = 0;
    //     setMessages(refreshMessages());
    // }, [values, setMessages]);
    const [openq, setOpenq] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpenq(newOpen);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    // =====================***************================
    const [states, setStates] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawers = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setStates({ ...states, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawers(anchor, false)}
            onKeyDown={toggleDrawers(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    // =====================***************================
    const preventDefault = (event) => event.preventDefault();
    // =====================***************================
    const [anchorEla1, setAnchorEla1] = React.useState(null);
    const opena1 = Boolean(anchorEla1);
    const handleClicka1 = (event) => {
        setAnchorEla1(event.currentTarget);
    };
    const handleClosea1 = () => {
        setAnchorEla1(null);
    };
    // =====================***************================
    const options = [
        'Show some love to MUI',
        'Show all notification content',
        'Hide sensitive notification content',
        'Hide all notification content',
    ];

    const [anchorElh, setAnchorElh] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const openh = Boolean(anchorElh);
    const handleClickListItem = (event) => {
        setAnchorElh(event.currentTarget);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorElh(null);
    };

    const handleCloseh = () => {
        setAnchorElh(null);
    };

    // =====================***************================
    const [anchorElo, setAnchorElo] = React.useState(null);
    const openo = Boolean(anchorElo);
    const handleClicko = (event) => {
        setAnchorElo(event.currentTarget);
    };
    const handleCloseo = () => {
        setAnchorElo(null);
    };
    // =====================***************================
    const optionsl = [
        'None',
        'Atria',
        'Callisto',
        'Dione',
        'Ganymede',
        'Hangouts Call',
        'Luna',
        'Oberon',
        'Phobos',
        'Pyxis',
        'Sedna',
        'Titania',
        'Triton',
        'Umbriel',
    ];

    const ITEM_HEIGHT = 48;


    const [anchorElll, setAnchorElll] = React.useState(null);
    const openll = Boolean(anchorElll);
    const handleClickll = (event) => {
        setAnchorElll(event.currentTarget);
    };
    const handleClosell = () => {
        setAnchorElll(null);
    };
    // =====================***************================
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // =====================***************================
    const actions = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
    ];
    // =====================***************================
    // const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    //     position: 'absolute',
    //     '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    //         bottom: theme.spacing(2),
    //         right: theme.spacing(2),
    //     },
    //     '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    //         top: theme.spacing(2),
    //         left: theme.spacing(2),
    //     },
    // }));

    const actionsd = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
    ];


    const [direction, setDirection] = React.useState('up');
    const [hidden, setHidden] = React.useState(false);

    const handleDirectionChange = (event) => {
        setDirection(event.target.value);
    };

    const handleHiddenChange = (event) => {
        setHidden(event.target.checked);
    };

    // =====================***************================
    const actionss = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
    ];

    const [openq1, setOpenq1] = React.useState(false);
    const handleOpen = () => setOpenq1(true);
    const handleCloseq1 = () => setOpenq1(false);
    // =====================***************================
    const actions0 = [
        { icon: <FileCopyIcon />, name: 'Copy' },
        { icon: <SaveIcon />, name: 'Save' },
        { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Share' },
    ];

    const [open0, setOpen0] = React.useState(false);
    const handleOpen0 = () => setOpen0(true);
    const handleClose0 = () => setOpen0(false);
    // =====================***************================
    const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    // =====================***************================


    const [completed, setCompleted] = React.useState({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext1 = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack1 = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        setCompleted({
            ...completed,
            [activeStep]: true,
        });
        handleNext1();
    };

    const handleReset1 = () => {
        setActiveStep(0);
        setCompleted({});
    };
    // =====================***************================
    const steps2 = [
        {
            label: 'Select campaign settings',
            description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
        },
        {
            label: 'Create an ad group',
            description:
                'An ad group contains one or more ads which target a shared set of keywords.',
        },
        {
            label: 'Create an ad',
            description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
        },
    ];

    const [activeStep2, setActiveStep2] = React.useState(0);

    const handleNext2 = () => {
        setActiveStep2((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack2 = () => {
        setActiveStep2((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset2 = () => {
        setActiveStep2(0);
    };
    // =====================***************================
    // const steps3 = [
    //     {
    //         label: 'Select campaign settings',
    //         description: `For each ad campaign that you create, you can control how much
    //           you're willing to spend on clicks and conversions, which networks
    //           and geographical locations you want your ads to show on, and more.`,
    //     },
    //     {
    //         label: 'Create an ad group',
    //         description:
    //             'An ad group contains one or more ads which target a shared set of keywords.',
    //     },
    //     {
    //         label: 'Create an ad',
    //         description: `Try out different ad text to see what brings in the most customers,
    //           and learn how to enhance your ads using features like ad extensions.
    //           If you run into any problems with your ads, find out how to tell if
    //           they're running and how to resolve approval issues.`,
    //     },
    // ];

    // const theme = useTheme();
    // const [activeStep3, setActiveStep3] = React.useState(0);
    // const maxSteps = steps3.length;

    // const handleNext3 = () => {
    //     setActiveStep3((prevActiveStep) => prevActiveStep + 1);
    // };

    // const handleBack3 = () => {
    //     setActiveStep3((prevActiveStep) => prevActiveStep - 1);
    // };

    // =====================***************================
    // function CustomTabPanel(props) {
    //     const { children, value, index, ...other } = props;

    //     return (
    //         <div
    //             role="tabpanel"
    //             hidden={value !== index}
    //             id={`simple-tabpanel-${index}`}
    //             aria-labelledby={`simple-tab-${index}`}
    //             {...other}
    //         >
    //             {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    //         </div>
    //     );
    // }

    // CustomTabPanel.propTypes = {
    //     children: PropTypes.node,
    //     index: PropTypes.number.isRequired,
    //     value: PropTypes.number.isRequired,
    // };

    // function a11yProps(index) {
    //     return {
    //         id: `simple-tab-${index}`,
    //         'aria-controls': `simple-tabpanel-${index}`,
    //     };
    // }


    // const [value1, setValue1] = React.useState(0);

    // const handleChange1 = (event, newValue) => {
    //     setValue1(newValue);
    // };
    // =====================***************================
    // =====================***************================
    // =====================***************================
    // =====================***************================
    // =====================***************================
    // =====================***************================
    return (
        <>
            <Box sx={{ width: 500 }}>
                {buttons}
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={handleClose}
                    message="I love snacks"
                    key={vertical + horizontal}
                />
            </Box>

            <br /><br />
            {/* ========================********************================== */}
            <Stack spacing={2} sx={{ maxWidth: 600 }}>
                <SnackbarContent message="I love snacks." action={action} />
                <SnackbarContent
                    message={
                        'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
                    }
                />
                <SnackbarContent
                    message="I love candy. I love cookies. I love cupcakes."
                    action={action}
                />
                <SnackbarContent
                    message={
                        'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
                    }
                    action={action}
                />
            </Stack>
            <br /><br />
            {/* ========================********************================== */}
            <div>
                <Button onClick={handleClicka}>Open Snackbar</Button>
                <Snackbar
                    open={opena}
                    autoHideDuration={2000}
                    onClose={handleClosea}
                    message="This Snackbar will be dismissed in 5 seconds."
                />
            </div>
            <br /><br />
            {/* ========================********************================== */}
            <div>
                <Button onClick={handleClickb}>Open Snackbar</Button>
                <Snackbar open={openb} autoHideDuration={6000} onClose={handleCloseb}>
                    <Alert
                        onClose={handleCloseb}
                        severity="success"
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        This is a success Alert inside a Snackbar!
                    </Alert>
                </Snackbar>
            </div>
            <br /><br />
            {/* ========================********************================== */}
            <React.Fragment>
                <CssBaseline />
                <GlobalStyles
                    styles={(theme) => ({
                        body: { backgroundColor: theme.palette.background.paper },
                    })}
                />
                <div>
                    <AppBar position="static" color="primary">
                        <Toolbar>
                            <IconButton
                                edge="start"
                                sx={{ mr: 2 }}
                                color="inherit"
                                aria-label="menu"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" component="div">
                                App bar
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Fab
                        color="secondary"
                        sx={(theme) => ({
                            position: 'absolute',
                            bottom: theme.spacing(2),
                            right: theme.spacing(2),
                        })}
                    >
                        <AddIcon />
                    </Fab>
                    <Snackbar
                        open
                        autoHideDuration={6000}
                        message="Archived"
                        action={
                            <Button color="inherit" size="small">
                                Undo
                            </Button>
                        }
                        sx={{ bottom: { xs: 90, sm: 0 } }}
                    />
                </div>
            </React.Fragment>
            <br /><br />
            {/* ========================********************================== */}
            <SnackbarProvider maxSnack={3}>
                <MyApp />
            </SnackbarProvider>


            <br /><br />
            <Typography variant="h2" component="h2">
                Accordion
            </Typography>
            {/* ===================****************=============== */}
            <br />

            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDownwardIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span">Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography component="span">Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
            <br /><br />
            {/* ========================********************================== */}
            <div>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                            General settings
                        </Typography>
                        <Typography component="span" sx={{ color: 'text.secondary' }}>
                            I am an accordion
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                            Aliquam eget maximus est, id dignissim quam.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                            Users
                        </Typography>
                        <Typography component="span" sx={{ color: 'text.secondary' }}>
                            You are currently not an owner
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus,
                            varius pulvinar diam eros in elit. Pellentesque convallis laoreet
                            laoreet.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                            Advanced settings
                        </Typography>
                        <Typography component="span" sx={{ color: 'text.secondary' }}>
                            Filtering has been entirely disabled for whole web server
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
                            Personal data
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit
                            amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>


            <br /><br />
            <Typography variant="h2" component="h2">
                App Bar
            </Typography>
            {/* ===================****************=============== */}
            <br />

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ flexGrow: 1 }}>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={auth}
                                onChange={handleChangea}
                                aria-label="login switch"
                            />
                        }
                        label={auth ? 'Logout' : 'Login'}
                    />
                </FormGroup>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Photos
                        </Typography>
                        {auth && (
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClosec}
                                >
                                    <MenuItem onClick={handleClosec}>Profile</MenuItem>
                                    <MenuItem onClick={handleClosec}>My account</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            {/* <AppBar position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                LOGO
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{ display: { xs: 'block', md: 'none' } }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                LOGO
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src={A1} />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar> */}
            <br /><br />
            {/* ========================********************================== */}
            {/* <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                sx={{ display: { xs: 'none', sm: 'block' } }}
                            >
                                MUI
                            </Typography>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>
                            <Box sx={{ flexGrow: 1 }} />
                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                    <Badge badgeContent={4} color="error">
                                        <MailIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    aria-label="show 17 new notifications"
                                    color="inherit"
                                >
                                    <Badge badgeContent={17} color="error">
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </Box>
                            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="show more"
                                    aria-controls={mobileMenuId}
                                    aria-haspopup="true"
                                    onClick={handleMobileMenuOpen}
                                    color="inherit"
                                >
                                    <MoreIcon />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    {renderMobileMenu}
                    {renderMenu}
                </Box> */}
            <br /><br />
            {/* ========================********************================== */}
            <React.Fragment>
                <CssBaseline />
                <Paper square sx={{ pb: '50px' }}>
                    <Typography variant="h5" gutterBottom component="div" sx={{ p: 2, pb: 0 }}>
                        Inbox
                    </Typography>
                    <List sx={{ mb: 2 }}>
                        {messages.map(({ id, primary, secondary, person }) => (
                            <React.Fragment key={id}>
                                {id === 1 && (
                                    <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                                        Today
                                    </ListSubheader>
                                )}
                                {id === 3 && (
                                    <ListSubheader sx={{ bgcolor: 'background.paper' }}>
                                        Yesterday
                                    </ListSubheader>
                                )}
                                <ListItemButton>
                                    <ListItemAvatar>
                                        <Avatar alt="Profile Picture" src={person} />
                                    </ListItemAvatar>
                                    <ListItemText primary={primary} secondary={secondary} />
                                </ListItemButton>
                            </React.Fragment>
                        ))}
                    </List>
                </Paper>
                <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
                    <Toolbar>
                        <IconButton color="inherit" aria-label="open drawer">
                            <MenuIcon />
                        </IconButton>
                        <StyledFab color="secondary" aria-label="add">
                            <AddIcon />
                        </StyledFab>
                        <Box sx={{ flexGrow: 1 }} />
                        <IconButton color="inherit">
                            <SearchIcon />
                        </IconButton>
                        <IconButton color="inherit">
                            <MoreIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </React.Fragment>

            <br /><br />
            <Typography variant="h2" component="h2">
                card
            </Typography>
            {/* ===================****************=============== */}
            <br />

            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Word of the Day
                    </Typography>
                    <Typography variant="h5" component="div">
                        be{bull}nev{bull}o{bull}lent
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                    <Typography variant="body2">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>

            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{card}</Card>
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            {/* <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                R
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="/static/images/cards/paella.jpg"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expandeda}
                            onClick={handleExpandClick}
                            aria-expanded={expandeda}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expandeda} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                            <Typography sx={{ marginBottom: 2 }}>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                aside for 10 minutes.
                            </Typography>
                            <Typography sx={{ marginBottom: 2 }}>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                large plate and set aside, leaving chicken and chorizo in the pan. Add
                                pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                stirring often until thickened and fragrant, about 10 minutes. Add
                                saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>
                            <Typography sx={{ marginBottom: 2 }}>
                                Add rice and stir very gently to distribute. Top with artichokes and
                                peppers, and cook without stirring, until most of the liquid is absorbed,
                                15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                mussels, tucking them down into the rice, and cook again without
                                stirring, until mussels have opened and rice is just tender, 5 to 7
                                minutes more. (Discard any mussels that don&apos;t open.)
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card> */}
            <br /><br />
            {/* ========================********************================== */}

            <br /><br />
            <Typography variant="h2" component="h2">
                Paper
            </Typography>
            {/* ===================****************=============== */}
            <br />

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128,
                    },
                }}
            >
                <Paper elevation={0} />
                <Paper />
                <Paper elevation={3} />
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {[lightTheme, darkTheme].map((theme, index) => (
                        <Grid key={index} size={6}>
                            <ThemeProvider theme={theme}>
                                <Box
                                    sx={{
                                        p: 2,
                                        borderRadius: 2,
                                        bgcolor: 'background.default',
                                        display: 'grid',
                                        gridTemplateColumns: { md: '1fr 1fr' },
                                        gap: 2,
                                    }}
                                >
                                    {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
                                        <Item key={elevation} elevation={elevation}>
                                            {`elevation=${elevation}`}
                                        </Item>
                                    ))}
                                </Box>
                            </ThemeProvider>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <br /><br />
            {/* ========================********************================== */}

            <br /><br />
            <Typography variant="h2" component="h2">
                Bottom Navigation
            </Typography>
            {/* ===================****************=============== */}
            <br />

            <Box sx={{ width: 500 }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                </BottomNavigation>
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <BottomNavigation sx={{ width: 500 }} value={valuea} onChange={handleChangeb}>
                <BottomNavigationAction
                    label="Recents"
                    value="recents"
                    icon={<RestoreIcon />}
                />
                <BottomNavigationAction
                    label="Favorites"
                    value="favorites"
                    icon={<FavoriteIcon />}
                />
                <BottomNavigationAction
                    label="Nearby"
                    value="nearby"
                    icon={<LocationOnIcon />}
                />
                <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
            </BottomNavigation>
            <br /><br />
            {/* ========================********************================== */}
            {/* <Box sx={{ pb: 7 }} ref={ref}>
                <CssBaseline />
                <List>
                    {messages.map(({ primary, secondary, person }, index) => (
                        <ListItemButton key={index + person}>
                            <ListItemAvatar>
                                <Avatar alt="Profile Picture" src={person} />
                            </ListItemAvatar>
                            <ListItemText primary={primary} secondary={secondary} />
                        </ListItemButton>
                    ))}
                </List>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation
                        showLabels
                        value={values}
                        onChange={(event, newValue) => {
                            setValues(newValue);
                        }}
                    >
                        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                        <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
                    </BottomNavigation>
                </Paper>
            </Box> */}
            <div>
                <Button onClick={toggleDrawers(true)}>Open drawer</Button>
                <Drawer open={openq} onClose={toggleDrawers(false)}>
                    {DrawerList}
                </Drawer>
            </div>
            <br /><br />
            {/* ========================********************================== */}
            <div>
                {['left', 'right', 'top', 'bottom'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawers(anchor, true)}>{anchor}</Button>
                        <Drawer
                            anchor={anchor}
                            open={states[anchor]}
                            onClose={toggleDrawers(anchor, false)}
                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
            <br /><br />
            {/* ========================********************================== */}
            <br /><br />
            <Typography variant="h2" component="h2">
                link
            </Typography>
            {/* ===================****************=============== */}
            <br />



            <Box
                sx={{
                    typography: 'body1',
                    '& > :not(style) ~ :not(style)': {
                        ml: 2,
                    },
                }}
                onClick={preventDefault}
            >
                <Link href="#">Link</Link>
                <Link href="#" color="inherit">
                    {'color="inherit"'}
                </Link>
                <Link href="#" variant="body2">
                    {'variant="body2"'}
                </Link>
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    typography: 'body1',
                    '& > :not(style) ~ :not(style)': {
                        ml: 2,
                    },
                }}
                onClick={preventDefault}
            >
                <Link href="#" underline="none">
                    {'underline="none"'}
                </Link>
                <Link href="#" underline="hover">
                    {'underline="hover"'}
                </Link>
                <Link href="#" underline="always">
                    {'underline="always"'}
                </Link>
            </Box>

            <br /><br />
            <Typography variant="h2" component="h2">
                Menu
            </Typography>
            {/* ===================****************=============== */}
            <br />

            <div>
                <Button
                    id="basic-button"
                    aria-controls={opena1 ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={opena1 ? 'true' : undefined}
                    onClick={handleClicka1}
                >
                    Dashboard
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEla1}
                    open={opena1}
                    onClose={handleClosea1}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClosea1}>Profile</MenuItem>
                    <MenuItem onClick={handleClosea1}>My account</MenuItem>
                    <MenuItem onClick={handleClosea1}>Logout</MenuItem>
                </Menu>
            </div>
            <br /><br />
            {/* ========================********************================== */}
            <Paper sx={{ width: 320, maxWidth: '100%' }}>
                <MenuList>
                    <MenuItem>
                        <ListItemIcon>
                            <ContentCut fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Cut</ListItemText>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            ⌘X
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <ContentCopy fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Copy</ListItemText>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            ⌘C
                        </Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <ContentPaste fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Paste</ListItemText>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            ⌘V
                        </Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <Cloud fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Web Clipboard</ListItemText>
                    </MenuItem>
                </MenuList>
            </Paper>
            <br /><br />
            {/* ========================********************================== */}
            <div>
                <List
                    component="nav"
                    aria-label="Device settings"
                    sx={{ bgcolor: 'background.paper' }}
                >
                    <ListItemButton
                        id="lock-button"
                        aria-haspopup="listbox"
                        aria-controls="lock-menu"
                        aria-label="when device is locked"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClickListItem}
                    >
                        <ListItemText
                            primary="When device is locked"
                            secondary={options[selectedIndex]}
                        />
                    </ListItemButton>
                </List>
                <Menu
                    id="lock-menu"
                    anchorEl={anchorElh}
                    open={openh}
                    onClose={handleCloseh}
                    MenuListProps={{
                        'aria-labelledby': 'lock-button',
                        role: 'listbox',
                    }}
                >
                    {options.map((option, index) => (
                        <MenuItem
                            key={option}
                            disabled={index === 0}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>
            <br /><br />
            {/* ========================********************================== */}
            <React.Fragment>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Typography sx={{ minWidth: 100 }}>Contact</Typography>
                    <Typography sx={{ minWidth: 100 }}>Profile</Typography>
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClicko}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                        </IconButton>
                    </Tooltip>
                </Box>
                <Menu
                    anchorEl={anchorElo}
                    id="account-menu"
                    open={openo}
                    onClose={handleCloseo}
                    onClick={handleCloseo}
                    slotProps={{
                        paper: {
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&::before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleCloseo}>
                        <Avatar /> Profile
                    </MenuItem>
                    <MenuItem onClick={handleCloseo}>
                        <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleCloseo}>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem onClick={handleCloseo}>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem onClick={handleCloseo}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </React.Fragment>
            <br /><br />
            {/* ========================********************================== */}
            <div>
                <IconButton
                    aria-label="more"
                    id="long-button"
                    aria-controls={openll ? 'long-menu' : undefined}
                    aria-expanded={openll ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleClickll}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                        'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorElll}
                    open={openll}
                    onClose={handleClosell}
                    slotProps={{
                        paper: {
                            style: {
                                maxHeight: ITEM_HEIGHT * 4.5,
                                width: '20ch',
                            },
                        },
                    }}
                >
                    {optionsl.map((option) => (
                        <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClosell}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </div>

            <Stack spacing={2}>
                <Pagination count={10} />
                <Pagination count={10} color="primary" />
                <Pagination count={10} color="secondary" />
                <Pagination count={10} disabled />
            </Stack>
            <br /><br />
            {/* ========================********************================== */}
            <Stack spacing={2}>
                <Pagination count={10} variant="outlined" />
                <Pagination count={10} variant="outlined" color="primary" />
                <Pagination count={10} variant="outlined" color="secondary" />
                <Pagination count={10} variant="outlined" disabled />
            </Stack>
            <br /><br />
            {/* ========================********************================== */}
            <Stack spacing={2}>
                <Pagination count={10} shape="rounded" />
                <Pagination count={10} variant="outlined" shape="rounded" />
            </Stack>
            <br /><br />
            {/* ========================********************================== */}
            <Stack spacing={2}>
                <Pagination count={10} size="small" />
                <Pagination count={10} />
                <Pagination count={10} size="large" />
            </Stack>
            <br /><br />
            {/* ========================********************================== */}
            <Stack spacing={2}>
                <Pagination count={10} showFirstButton showLastButton />
                <Pagination count={10} hidePrevButton hideNextButton />
            </Stack>
            <Stack spacing={2}>
                <Pagination
                    count={10}
                    renderItem={(item) => (
                        <PaginationItem
                            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                            {...item}
                        />
                    )}
                />
            </Stack>
            <br /><br />
            {/* ========================********************================== */}
            <TablePagination
                component="div"
                count={100}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
                <FormControlLabel
                    control={
                        <Switch checked={hidden} onChange={handleHiddenChange} color="primary" />
                    }
                    label="Hidden"
                />
                <FormControl component="fieldset" sx={{ mt: 1, display: 'flex' }}>
                    <FormLabel component="legend">Direction</FormLabel>
                    <RadioGroup
                        aria-label="direction"
                        name="direction"
                        value={direction}
                        onChange={handleDirectionChange}
                        row
                    >
                        <FormControlLabel value="up" control={<Radio />} label="Up" />
                        <FormControlLabel value="right" control={<Radio />} label="Right" />
                        <FormControlLabel value="down" control={<Radio />} label="Down" />
                        <FormControlLabel value="left" control={<Radio />} label="Left" />
                    </RadioGroup>
                </FormControl>
                <Box sx={{ position: 'relative', mt: 3, height: 320 }}>
                    {/* <StyledSpeedDial
                        ariaLabel="SpeedDial playground example"
                        hidden={hidden}
                        icon={<SpeedDialIcon />}
                        direction={direction}
                    >
                        {actionsd.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={action.icon}
                                tooltipTitle={action.name}
                            />
                        ))}
                    </StyledSpeedDial> */}
                </Box>
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial controlled open example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                    onClose={handleCloseq1}
                    onOpen={handleOpen}
                    open={openq1}
                >
                    {actionss.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            onClick={handleCloseq1}
                        />
                    ))}
                </SpeedDial>
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial openIcon example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon openIcon={<EditIcon />} />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <Backdrop open={open0} />
                <SpeedDial
                    ariaLabel="SpeedDial tooltip example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                    onClose={handleClose0}
                    onOpen={handleOpen0}
                    open={open0}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                            tooltipOpen
                            onClick={handleClose0}
                        />
                    ))}
                </SpeedDial>
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        if (isStepOptional(index)) {
                            labelProps.optional = (
                                <Typography variant="caption">Optional</Typography>
                            );
                        }
                        if (isStepSkipped(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleReset}>Reset</Button>
                        </Box>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {isStepOptional(activeStep) && (
                                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                                    Skip
                                </Button>
                            )}
                            <Button onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </Box>
                    </React.Fragment>
                )}
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ width: '100%' }}>
                <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label} completed={completed[index]}>
                            <StepButton color="inherit" onClick={handleStep(index)}>
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {allStepsCompleted() ? (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset1}>Reset</Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
                                Step {activeStep + 1}
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack1}
                                    sx={{ mr: 1 }}
                                >
                                    Back
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleNext1} sx={{ mr: 1 }}>
                                    Next
                                </Button>
                                {activeStep !== steps.length &&
                                    (completed[activeStep] ? (
                                        <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                            Step {activeStep + 1} already completed
                                        </Typography>
                                    ) : (
                                        <Button onClick={handleComplete}>
                                            {completedSteps() === totalSteps() - 1
                                                ? 'Finish'
                                                : 'Complete Step'}
                                        </Button>
                                    ))}
                            </Box>
                        </React.Fragment>
                    )}
                </div>
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ maxWidth: 400 }}>
                <Stepper activeStep={activeStep2} orientation="vertical">
                    {steps2.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel
                                optional={
                                    index === steps2.length - 1 ? (
                                        <Typography variant="caption">Last step</Typography>
                                    ) : null
                                }
                            >
                                {step.label}
                            </StepLabel>
                            <StepContent>
                                <Typography>{step.description}</Typography>
                                <Box sx={{ mb: 2 }}>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext2}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps2.length - 1 ? 'Finish' : 'Continue'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack2}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                </Box>
                            </StepContent>
                        </Step>
                    ))}
                </Stepper>
                {activeStep2 === steps2.length && (
                    <Paper square elevation={0} sx={{ p: 3 }}>
                        <Typography>All steps completed - you&apos;re finished</Typography>
                        <Button onClick={handleReset2} sx={{ mt: 1, mr: 1 }}>
                            Reset
                        </Button>
                    </Paper>
                )}
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            {/* <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 50,
                        pl: 2,
                        bgcolor: 'background.default',
                    }}
                >
                    <Typography>{steps3[activeStep3].label}</Typography>
                </Paper>
                <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
                    {steps3[activeStep3].description}
                </Box>
                <MobileStepper
                    variant="text"
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep3}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext3}
                            disabled={activeStep3 === maxSteps - 1}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack3} disabled={activeStep3 === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
            </Box> */}
            <br /><br />
            {/* ========================********************================== */}
            {/* <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value1} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value1} index={0}>
                    Item One
                </CustomTabPanel>
                <CustomTabPanel value={value1} index={1}>
                    Item Two
                </CustomTabPanel>
                <CustomTabPanel value={value1} index={2}>
                    Item Three
                </CustomTabPanel>
            </Box> */}
            <br /><br />
            {/* ========================********************================== */}
            
        </>
    )
}

export default Surfacess
