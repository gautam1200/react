import { Badge, badgeClasses, Box, Button, ButtonBase, ButtonGroup, Checkbox, Fab, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, InputBase, InputLabel, MenuItem, Radio, RadioGroup, Rating, Select, Stack, Switch, Tab, Tabs, Tooltip, Typography, Zoom } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Favorite, FavoriteBorder, Fingerprint } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from 'styled-components';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SaveIcon from '@mui/icons-material/Save';
import { pink } from '@mui/material/colors';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const buttons = [
    <Button key="one">One</Button>,
    <Button key="two">Two</Button>,
    <Button key="three">Three</Button>,
];

const StyledRatinga = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
        color: '#ff3d47',
    },
});

// =================*****************===============

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: (theme.vars ?? theme).palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

// =================*****************===============
// =================*****************===============
// =================*****************===============


const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

function Inputs() {
    // const images = [
    //     {
    //         url: { A1 },title: 'Breakfast', width: '40%',
    //     },
    //     {
    //         url: { A2 },title: 'Burgers',width: '30%',
    //     },
    //     {
    //         url: { A3 },title: 'Camera', width: '30%',
    //     },
    // ];

    // const ImageButton = styled(ButtonBase)(({ theme }) => ({
    //     position: 'relative',
    //     height: 200,
    //     [theme.breakpoints.down('sm')]: {
    //         width: '100% !important', // Overrides inline-style
    //         height: 100,
    //     },
    //     '&:hover, &.Mui-focusVisible': {
    //         zIndex: 1,
    //         '& .MuiImageBackdrop-root': {
    //             opacity: 0.15,
    //         },
    //         '& .MuiImageMarked-root': {
    //             opacity: 0,
    //         },
    //         '& .MuiTypography-root': {
    //             border: '4px solid currentColor',
    //         },
    //     },
    // }));

    // const ImageSrc = styled('span')({
    //     position: 'absolute',
    //     left: 0,
    //     right: 0,
    //     top: 0,
    //     bottom: 0,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center 40%',
    // });

    // const Image = styled('span')(({ theme }) => ({
    //     position: 'absolute',left: 0, right: 0, top: 0, bottom: 0,display: 'flex', alignItems: 'center',justifyContent: 'center',
    //     color: theme.palette.common.white,
    // }));

    // const ImageBackdrop = styled('span')(({ theme }) => ({
    //     position: 'absolute',left: 0,right: 0,top: 0,bottom: 0,backgroundColor: theme.palette.common.black,opacity: 0.4,
    //     transition: theme.transitions.create('opacity'),
    // }));

    // const ImageMarked = styled('span')(({ theme }) => ({ height: 3,width: 18,backgroundColor: theme.palette.common.white,position: 'absolute',bottom: -2,left: 'calc(50% - 9px)',transition: theme.transitions.create('opacity'),
    // }));
    // =========*************===========

    const [loading,] = React.useState(false);
    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timeout);
    });
    // =========*************===========

    const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {top: -12px;right: -6px;}`;

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });

    // =========*************===========

    const [loadinga, setLoading] = React.useState(true);
    function handleClick() {
        setLoading(true);
    }
    // =========*************===========

    // const [open, setOpen] = React.useState(false);
    // const anchorRef = React.useRef(null);
    // const [selectedIndex, setSelectedIndex] = React.useState(1);

    // const handleClick = () => {
    //     console.info(`You clicked ${options[selectedIndex]}`);
    // };

    // const handleMenuItemClick = (event, index) => {
    //     setSelectedIndex(index);
    //     setOpen(false);
    // };

    // const handleToggle = () => {
    //     setOpen((prevOpen) => !prevOpen);
    // };

    // const handleClose = (event) => {
    //     if (anchorRef.current && anchorRef.current.contains(event.target)) {
    //         return;
    //     }

    //     setOpen(false);
    // };

    // =========*************===========

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    // =========*************===========

    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: false,
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    const { gilad, jason, antoine } = state;
    const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

    // =========*************===========

    const [value, setValue] = React.useState('female');

    const handleChange1 = (event) => {
        setValue(event.target.value);
    };
    // =========*************===========

    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange2 = (event) => {
        setSelectedValue(event.target.value);
    };
    // =========*************===========
    const [selectedValueb, setSelectedValueb] = React.useState('a');

    const handleChange3 = (event) => {
        setSelectedValue(event.target.value);
    };

    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange3,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });
    // =========*************===========

    const [valuea, setValuea] = React.useState('');
    const [errora, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');

    const handleRadioChange = (event) => {
        setValuea(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (valuea === 'best') {
            setHelperText('You got it!');
            setError(false);
        } else if (valuea === 'worst') {
            setHelperText('Sorry, wrong answer!');
            setError(true);
        } else {
            setHelperText('Please select an option.');
            setError(true);
        }
    };
    // =========*************===========
    const [valueb, setValueb] = React.useState(2);

    // =========*************===========
    const [age, setAge] = React.useState('');

    const handleChangeq = (event) => {
        setAge(event.target.value);
    };
    // =========*************===========
    // =========*************===========
    // =========*************===========
    // =========*************===========
    // =========*************===========
    // =========*************===========


    // ========================**********************==========================
    return (
        <>


            <br /><br />
            <Typography variant="h2" component="h2">
                Button
            </Typography>
            {/* ===================****************=============== */}
            <br />

            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <br /><br />
            {/* ===================**************=============== */}

            <Stack direction="row" spacing={2}>
                <Button>Primary</Button>
                <Button disabled>Disabled</Button>
                <Button href="#text-buttons">Link</Button>
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}

            <Stack direction="row" spacing={2}>
                <Button variant="contained">Contained</Button>
                <Button variant="contained" disabled>
                    Disabled
                </Button>
                <Button variant="contained" href="#contained-buttons">
                    Link
                </Button>
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}

            <Button variant="contained" disableElevation>
                Disable elevation
            </Button>
            <br /><br />
            {/* ===================**************=============== */}

            <Stack direction="row" spacing={2}>
                <Button variant="outlined">Primary</Button>
                <Button variant="outlined" disabled>
                    Disabled
                </Button>
                <Button variant="outlined" href="#outlined-buttons">
                    Link
                </Button>
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}

            <Stack direction="row" spacing={2}>
                <Button color="secondary">Secondary</Button>
                <Button variant="contained" color="success">
                    Success
                </Button>
                <Button variant="outlined" color="error">
                    Error
                </Button>
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}

            <Box sx={{ '& button': { m: 1 } }}>
                <div>
                    <Button size="small">Small</Button>
                    <Button size="medium">Medium</Button>
                    <Button size="large">Large</Button>
                </div>
                <div>
                    <Button variant="outlined" size="small">
                        Small
                    </Button>
                    <Button variant="outlined" size="medium">
                        Medium
                    </Button>
                    <Button variant="outlined" size="large">
                        Large
                    </Button>
                </div>
                <div>
                    <Button variant="contained" size="small">
                        Small
                    </Button>
                    <Button variant="contained" size="medium">
                        Medium
                    </Button>
                    <Button variant="contained" size="large">
                        Large
                    </Button>
                </div>
            </Box>

            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>
            <br /><br />
            {/* ===================**************=============== */}

            <Stack direction="row" spacing={1}>
                <IconButton aria-label="delete">
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete" disabled color="primary">
                    <DeleteIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="add an alarm">
                    <AlarmIcon />
                </IconButton>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}

            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
                <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="small" />
                </IconButton>
                <IconButton aria-label="delete" size="large">
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete" size="large">
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </Stack>

            <Stack direction="row" spacing={1}>
                <IconButton aria-label="fingerprint" color="secondary">
                    <Fingerprint />
                </IconButton>
                <IconButton aria-label="fingerprint" color="success">
                    <Fingerprint />
                </IconButton>
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}

            <Tooltip title="Click to see loading">
                <IconButton onClick={() => setLoading(true)} loading={loading}>
                    <ShoppingCartIcon />
                </IconButton>
            </Tooltip>

            <IconButton>
                <ShoppingCartIcon fontSize="small" />
                <CartBadge badgeContent={2} color="primary" overlap="circular" />
            </IconButton>

            <br /><br />
            {/* ===================**************=============== */}

            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
            >
                Upload files
                <VisuallyHiddenInput
                    type="file"
                    onChange={(event) => console.log(event.target.files)}
                    multiple
                />
            </Button>

            <br /><br />
            {/* ===================**************=============== */}

            <Stack spacing={2}>
                <Stack direction="row" spacing={2}>
                    <Button loading variant="outlined">
                        Submit
                    </Button>
                    <Button loading loadingIndicator="Loading…" variant="outlined">
                        Fetch data
                    </Button>
                    <Button
                        loading
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="outlined"
                    >
                        Save
                    </Button>
                </Stack>
                <Button
                    fullWidth
                    loading
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="outlined"
                >
                    Full width
                </Button>
                <Button
                    fullWidth
                    loading
                    loadingPosition="end"
                    endIcon={<SaveIcon />}
                    variant="outlined"
                >
                    Full width
                </Button>
                <Stack direction="row" spacing={2}>
                    <Button loading variant="outlined" loadingPosition="start">
                        Submit
                    </Button>
                    <Button loading variant="outlined" loadingPosition="end">
                        Submit
                    </Button>
                    <Button
                        loading
                        variant="outlined"
                        loadingPosition="end"
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
                </Stack>
            </Stack>

            <br /><br />
            {/* ===================**************=============== */}

            <div>
                <FormControlLabel
                    sx={{ display: 'block' }}
                    control={
                        <Switch
                            checked={loadinga}
                            onChange={() => setLoading(!loadinga)}
                            name="loading"
                            color="primary"
                        />
                    }
                    label="Loading"
                />
                <Box sx={{ '& > button': { m: 1 } }}>
                    <Button
                        size="small"
                        onClick={handleClick}
                        loading={loadinga}
                        variant="outlined"
                        disabled
                    >
                        Disabled
                    </Button>
                    <Button
                        size="small"
                        onClick={handleClick}
                        loading={loadinga}
                        loadingIndicator="Loading…"
                        variant="outlined"
                    >
                        Fetch data
                    </Button>
                    <Button
                        size="small"
                        onClick={handleClick}
                        endIcon={<SendIcon />}
                        loading={loadinga}
                        loadingPosition="end"
                        variant="contained"
                    >
                        Send
                    </Button>
                    <Button
                        size="small"
                        color="secondary"
                        onClick={handleClick}
                        loading={loadinga}
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="contained"
                    >
                        Save
                    </Button>
                </Box>
                <Box sx={{ '& > button': { m: 1 } }}>
                    <Button onClick={handleClick} loading={loading} variant="outlined" disabled>
                        Disabled
                    </Button>
                    <Button
                        onClick={handleClick}
                        loading={loadinga}
                        loadingIndicator="Loading…"
                        variant="outlined"
                    >
                        Fetch data
                    </Button>
                    <Button
                        onClick={handleClick}
                        endIcon={<SendIcon />}
                        loading={loadinga}
                        loadingPosition="end"
                        variant="contained"
                    >
                        Send
                    </Button>
                    <Button
                        color="secondary"
                        onClick={handleClick}
                        loading={loadinga}
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="contained"
                    >
                        Save
                    </Button>
                </Box>
            </div>

            <br /><br />
            {/* ===================**************=============== */}

            {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}>
                {images.map((image) => (
                    <ImageButton
                        focusRipple
                        key={image.title}
                        style={{
                            width: image.width,
                        }}
                    >
                        <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                        <ImageBackdrop className="MuiImageBackdrop-root" />
                        <Image>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                sx={(theme) => ({
                                    position: 'relative',
                                    p: 4,
                                    pt: 2,
                                    pb: `calc(${theme.spacing(1)} + 6px)`,
                                })}
                            >
                                {image.title}
                                <ImageMarked className="MuiImageMarked-root" />
                            </Typography>
                        </Image>
                    </ImageButton>
                ))}
            </Box> */}


            <br /><br />
            <Typography variant="h2" component="h2">
                Button Group
            </Typography>
            {/* ===================****************=============== */}
            <br />

            <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <br /><br />
            {/* ===================**************=============== */}
            <ButtonGroup variant="outlined" aria-label="Basic button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <br /><br />
            <ButtonGroup variant="text" aria-label="Basic button group">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <br /><br />
            {/* ===================**************=============== */}

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center', '& > *': { m: 1, },
                }}
            >
                <ButtonGroup size="small" aria-label="Small button group">
                    {buttons}
                </ButtonGroup>
                <ButtonGroup color="secondary" aria-label="Medium-sized button group">
                    {buttons}
                </ButtonGroup>
                <ButtonGroup size="large" aria-label="Large button group">
                    {buttons}
                </ButtonGroup>
            </Box>

            <br /><br />

            <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled button group"
            >
                <Button>One</Button>
                <Button>Two</Button>
            </ButtonGroup>


            <br /><br />

            <ButtonGroup variant="outlined" aria-label="Loading button group">
                <Button>Submit</Button>
                <Button>Fetch data</Button>
                <Button loading loadingPosition="start" startIcon={<SaveIcon />}>
                    Save
                </Button>
            </ButtonGroup>
            {/* ===================**************=============== */}

            {/* <React.Fragment>
                <ButtonGroup
                    variant="contained"
                    ref={anchorRef}
                    aria-label="Button group with a nested menu"
                >
                    <Button onClick={handleClick}>{options[selectedIndex]}</Button>
                    <Button
                        size="small"
                        aria-controls={open ? 'split-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                    >
                        <ArrowDropDownIcon />
                    </Button>
                </ButtonGroup>
                <Popper
                    sx={{ zIndex: 1 }}
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom' ? 'center top' : 'center bottom',
                            }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList id="split-button-menu" autoFocusItem>
                                        {options.map((option, index) => (
                                            <MenuItem
                                                key={option}
                                                disabled={index === 2}
                                                selected={index === selectedIndex}
                                                onClick={(event) => handleMenuItemClick(event, index)}
                                            >
                                                {option}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </React.Fragment> */}


            <br /><br />
            <Typography variant="h2" component="h2">
                Checkbox
            </Typography>
            {/* ===================****************=============== */}
            <br />

            <div>
                <Checkbox {...label} defaultChecked />
                <Checkbox {...label} />
                <Checkbox {...label} disabled />
                <Checkbox {...label} disabled checked />
            </div>

            <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                <FormControlLabel required control={<Checkbox />} label="Required" />
                <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
            </FormGroup>

            <div>
                <Checkbox {...label} defaultChecked size="small" />
                <Checkbox {...label} defaultChecked />
                <Checkbox
                    {...label}
                    defaultChecked
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
            </div>

            <div>
                <Checkbox {...label} defaultChecked />
                <Checkbox {...label} defaultChecked color="secondary" />
                <Checkbox {...label} defaultChecked color="success" />
                <Checkbox {...label} defaultChecked color="default" />
                <Checkbox
                    {...label}
                    defaultChecked
                    sx={{
                        color: pink[800], '&.Mui-checked': { color: pink[600], },
                    }}
                />
            </div>

            <div>
                <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                <Checkbox
                    {...label}
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BookmarkIcon />}
                />
            </div>

            <br /><br />
            {/* ===================**************=============== */}

            <Box sx={{ display: 'flex' }}>
                <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
                    <FormLabel component="legend">Assign responsibility</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                            }
                            label="Gilad Gray"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={jason} onChange={handleChange} name="jason" />
                            }
                            label="Jason Killian"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                            }
                            label="Antoine Llorca"
                        />
                    </FormGroup>
                    <FormHelperText>Be careful</FormHelperText>
                </FormControl>
                <FormControl
                    required
                    error={error}
                    component="fieldset"
                    sx={{ m: 3 }}
                    variant="standard"
                >
                    <FormLabel component="legend">Pick two</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
                            }
                            label="Gilad Gray"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={jason} onChange={handleChange} name="jason" />
                            }
                            label="Jason Killian"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
                            }
                            label="Antoine Llorca"
                        />
                    </FormGroup>
                    <FormHelperText>You can display an error</FormHelperText>
                </FormControl>
            </Box>

            <br /><br />
            {/* ===================**************=============== */}

            <FormControl component="fieldset">
                <FormLabel component="legend">Label placement</FormLabel>
                <FormGroup aria-label="position" row>
                    <FormControlLabel
                        value="bottom"
                        control={<Checkbox />}
                        label="Bottom"
                        labelPlacement="bottom"
                    />
                    <FormControlLabel
                        value="end"
                        control={<Checkbox />}
                        label="End"
                        labelPlacement="end"
                    />
                </FormGroup>
            </FormControl>

            <br /><br />
            <Typography variant="h2" component="h2">
                Floating Action Button
            </Typography>
            {/* ===================****************=============== */}
            <br />

            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>
                <Fab variant="extended">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Navigate
                </Fab>
                <Fab disabled aria-label="like">
                    <FavoriteIcon />
                </Fab>
            </Box>

            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab size="small" color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>
                <Fab size="medium" color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Box>
            <br /><br />

            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab variant="extended" size="small" color="primary">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Extended
                </Fab>
                <Fab variant="extended" size="medium" color="primary">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Extended
                </Fab>
                <Fab variant="extended" color="primary">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Extended
                </Fab>
            </Box>

            <br /><br />
            <Typography variant="h2" component="h2">
                Radio Group
            </Typography>
            {/* ===================****************=============== */}
            <br />

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
            </FormControl>

            <br /><br />

            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    <FormControlLabel
                        value="disabled"
                        disabled
                        control={<Radio />}
                        label="other"
                    />
                </RadioGroup>
            </FormControl>

            <br /><br />

            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange1}
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>
            </FormControl>

            <br /><br />

            <div>
                <Radio
                    checked={selectedValue === 'a'}
                    onChange={handleChange2}
                    value="a"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'A' }}
                />
                <Radio
                    checked={selectedValue === 'b'}
                    onChange={handleChange2}
                    value="b"
                    name="radio-buttons"
                    inputProps={{ 'aria-label': 'B' }}
                />
            </div>

            <br /><br />

            <div>
                <Radio {...controlProps('a')} />
                <Radio {...controlProps('b')} color="secondary" />
                <Radio {...controlProps('c')} color="success" />
                <Radio {...controlProps('d')} color="default" />
                <Radio
                    {...controlProps('e')}
                    sx={{
                        color: pink[800],
                        '&.Mui-checked': {
                            color: pink[600],
                        },
                    }}
                />
            </div>

            <br /><br />

            <form onSubmit={handleSubmit}>
                <FormControl sx={{ m: 3 }} error={errora} variant="standard">
                    <FormLabel id="demo-error-radios">Pop quiz: MUI is...</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-error-radios"
                        name="quiz"
                        value={valuea}
                        onChange={handleRadioChange}
                    >
                        <FormControlLabel value="best" control={<Radio />} label="The best!" />
                        <FormControlLabel value="worst" control={<Radio />} label="The worst." />
                    </RadioGroup>
                    <FormHelperText>{helperText}</FormHelperText>
                    <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
                        Check Answer
                    </Button>
                </FormControl>
            </form>

            <br /><br />
            <Typography variant="h2" component="h2">
                Rating
            </Typography>
            {/* ===================****************=============== */}
            <br />


            <Box sx={{ '& > legend': { mt: 2 } }}>
                <Typography component="legend">Controlled</Typography>
                <Rating
                    name="simple-controlled"
                    value={valueb}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
                <Typography component="legend">Uncontrolled</Typography>
                <Rating
                    name="simple-uncontrolled"
                    onChange={(event, newValue) => {
                        console.log(newValue);
                    }}
                    defaultValue={2}
                />
                <Typography component="legend">Read only</Typography>
                <Rating name="read-only" value={valueb} readOnly />
                <Typography component="legend">Disabled</Typography>
                <Rating name="disabled" value={valueb} disabled />
                <Typography component="legend">No rating given</Typography>
                <Rating name="no-value" value={null} />
            </Box>
            <br /><br />
            <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}

            <Stack spacing={1}>
                <Rating name="size-small" defaultValue={2} size="small" />
                <Rating name="size-medium" defaultValue={2} />
                <Rating name="size-large" defaultValue={2} size="large" />
            </Stack>


            <br /><br />
            <Typography variant="h2" component="h2">
                Select
            </Typography>
            {/* ===================****************=============== */}
            <br />

            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChangeq}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <br /><br />

            <div>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label="Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <br /><br />

            <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>With label + helper text</FormHelperText>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Without label</FormHelperText>
                </FormControl>
            </div>
            <br /><br />

            <div>
                <FormControl sx={{ m: 1, minWidth: 80 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={age}
                        onChange={handleChange}
                        autoWidth
                        label="Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={21}>Twenty one</MenuItem>
                        <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <br /><br />

            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small-label">Age</InputLabel>
                <Select
                    labelId="demo-select-small-label"
                    id="demo-select-small"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>


           
        </>

    )
}

export default Inputs

