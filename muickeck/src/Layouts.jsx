import { Backdrop, Box, Button, ClickAwayListener, Collapse, Container, CssBaseline, Fade, FormControlLabel, Grid, Grow, IconButton, ImageList, ImageListItem, ImageListItemBar, List, ListItem, ListItemText, ListSubheader, Modal, NoSsr, Paper, Popover, Popper, Portal, Slide, Switch, TextareaAutosize, ThemeProvider, Typography, Zoom } from '@mui/material'
import React from 'react'
import styled from 'styled-components';
import InfoIcon from '@mui/icons-material/Info';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransitionGroup } from 'react-transition-group';
import { BarChart } from '@mui/icons-material';


function Layouts() {
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
        },
    ];
    // =============***************================
    function srcset(image, size, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }
    const itemDataa = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            author: '@arwinneil',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            cols: 2,
        },
    ];
    // =============***************================
    const itemDatas = [
        {
            img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
            title: 'Bed',
        },
        {
            img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
            title: 'Kitchen',
        },
        {
            img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
            title: 'Sink',
        },
        {
            img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
            title: 'Books',
        },
        {
            img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
            title: 'Chairs',
        },
        {
            img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
            title: 'Candle',
        },
        {
            img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
            title: 'Laptop',
        },
        {
            img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
            title: 'Doors',
        },
        {
            img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
            title: 'Storage',
        },
        {
            img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
            title: 'Coffee table',
        },
        {
            img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
            title: 'Blinds',
        },
    ];
    // =============***************================
    const itemDatab = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            author: '@bkristastucchio',
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
            author: '@rollelflex_graphy726',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
            author: '@helloimnik',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            author: '@nolanissac',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            author: '@hjrc33',
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            author: '@arwinneil',
            rows: 2,
            cols: 2,
            featured: true,
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
            author: '@tjdragotta',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
            author: '@katie_wasserman',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            author: '@silverdalex',
            rows: 2,
            cols: 2,
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
            author: '@shelleypauls',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
            author: '@peterlaster',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            author: '@southside_customs',
            cols: 2,
        },
    ];
    // =============***************================
    const itemDatac = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            author: '@bkristastucchio',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
            author: '@rollelflex_graphy726',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
            author: '@helloimnik',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            author: '@nolanissac',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            author: '@hjrc33',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            author: '@arwinneil',
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
            author: '@tjdragotta',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
            author: '@katie_wasserman',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            author: '@silverdalex',
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
            author: '@shelleypauls',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
            author: '@peterlaster',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            author: '@southside_customs',
        },
    ];
    // =============***************================
    const itemDatad = [
        {
            img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
            title: 'Bed',
            author: 'swabdesign',
        },
        {
            img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
            title: 'Books',
            author: 'Pavel Nekoranec',
        },
        {
            img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
            title: 'Sink',
            author: 'Charles Deluvio',
        },
        {
            img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
            title: 'Kitchen',
            author: 'Christian Mackie',
        },
        {
            img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
            title: 'Blinds',
            author: 'Darren Richardson',
        },
        {
            img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
            title: 'Chairs',
            author: 'Taylor Simpson',
        },
        {
            img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
            title: 'Laptop',
            author: 'Ben Kolde',
        },
        {
            img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
            title: 'Doors',
            author: 'Philipp Berndt',
        },
        {
            img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
            title: 'Coffee',
            author: 'Jen P.',
        },
        {
            img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
            title: 'Storage',
            author: 'Douglas Sheppard',
        },
        {
            img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
            title: 'Candle',
            author: 'Fi Bell',
        },
        {
            img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
            title: 'Coffee table',
            author: 'Hutomo Abrianto',
        },
    ];
    // =============***************================
    function srcset(image, width, height, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${width * cols}&h=${height * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }
    const itemDatae = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            author: '@bkristastucchio',
            featured: true,
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
            author: '@rollelflex_graphy726',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
            author: '@helloimnik',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            author: '@nolanissac',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            author: '@hjrc33',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            author: '@arwinneil',
            featured: true,
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
            author: '@tjdragotta',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
            author: '@katie_wasserman',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            author: '@silverdalex',
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
            author: '@shelleypauls',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
            author: '@peterlaster',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            author: '@southside_customs',
        },
    ];
    // =============***************================
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const styles = {
        position: 'absolute',
        top: 28,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid',
        p: 1,
        bgcolor: 'background.paper',
    };

    // =============***************================
    const [opena, setOpena] = React.useState(false);

    const handleClicka = () => {
        setOpena((prev) => !prev);
    };

    const handleClickAwaya = () => {
        setOpena(false);
    };

    const styless = {
        position: 'fixed',
        width: 200,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid',
        p: 1,
        bgcolor: 'background.paper',
    };
    // =============***************================
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [openb, setOpenb] = React.useState(false);
    const handleOpen = () => setOpenb(true);
    const handleClose = () => setOpenb(false);
    // =============***************================
    const stylec = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    function ChildModal() {
        const [open, setOpen] = React.useState(false);
        const handleOpen = () => {
            setOpen(true);
        };
        const handleClose = () => {
            setOpen(false);
        };

        return (
            <React.Fragment>
                <Button onClick={handleOpen}>Open Child Modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
                >
                    <Box sx={{ ...style, width: 200 }}>
                        <h2 id="child-modal-title">Text in a child modal</h2>
                        <p id="child-modal-description">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                        <Button onClick={handleClose}>Close Child Modal</Button>
                    </Box>
                </Modal>
            </React.Fragment>
        );
    }

    const [openc, setOpenc] = React.useState(false);
    const handleOpenc = () => {
        setOpenc(true);
    };
    const handleClosec = () => {
        setOpenc(false);
    };


    // =============***************================
    const styled = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [opend, setOpend] = React.useState(false);
    const handleOpend = () => setOpend(true);
    const handleClosed = () => setOpend(false);
    // =============***************================
    function LargeTree() {
        return Array.from(new Array(5000)).map((_, index) => <span key={index}>.</span>);
    }

    const [state, setState] = React.useState({
        open: false,
        defer: false,
    });
    // =============***************================
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const opens = Boolean(anchorEl);
    // =============***************================
    const [anchorEle, setAnchorEle] = React.useState(null);

    const handleClicke = (event) => {
        setAnchorEle(anchorEle ? null : event.currentTarget);
    };

    const opene = Boolean(anchorEle);
    const id = open ? 'simple-popper' : undefined;
    // =============***************================
    const [anchorElf, setAnchorElf] = React.useState(null);
    const [openf, setOpenf] = React.useState(false);
    const [placement, setPlacement] = React.useState();

    const handleClickf = (newPlacement) => (event) => {
        setAnchorElf(event.currentTarget);
        setOpenf((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    // =============***************================
    const [show, setShow] = React.useState(false);
    const container = React.useRef(null);

    const handleClicks = () => {
        setShow(!show);
    };
    // =============***************================  
    const icon = (
        <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
            <svg>
                <Box
                    component="polygon"
                    points="0,100 50,00, 100,100"
                    sx={(theme) => ({
                        fill: theme.palette.common.white,
                        stroke: theme.palette.divider,
                        strokeWidth: 1,
                    })}
                />
            </svg>
        </Paper>
    );

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    // =============***************================
    const icong = (
        <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
            <svg>
                <Box
                    component="polygon"
                    points="0,100 50,00, 100,100"
                    sx={(theme) => ({
                        fill: theme.palette.common.white,
                        stroke: theme.palette.divider,
                        strokeWidth: 1,
                    })}
                />
            </svg>
        </Paper>
    );

    const [checkedg, setCheckedg] = React.useState(false);

    const handleChangeg = () => {
        setCheckedg((prev) => !prev);
    };
    // =============***************================
    const iconh = (
        <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
            <svg>
                <Box
                    component="polygon"
                    points="0,100 50,00, 100,100"
                    sx={(theme) => ({
                        fill: theme.palette.common.white,
                        stroke: theme.palette.divider,
                        strokeWidth: 1,
                    })}
                />
            </svg>
        </Paper>
    );

    const [checkedh, setCheckedh] = React.useState(false);

    const handleChangeh = () => {
        setCheckedh((prev) => !prev);
    };
    // =============***************================
    const iconi = (
        <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
            <svg>
                <Box
                    component="polygon"
                    points="0,100 50,00, 100,100"
                    sx={(theme) => ({
                        fill: theme.palette.common.white,
                        stroke: theme.palette.divider,
                        strokeWidth: 1,
                    })}
                />
            </svg>
        </Paper>
    );


    const [checkedi, setCheckedi] = React.useState(false);
    const containerRef = React.useRef(null);

    const handleChangei = () => {
        setCheckedi((prev) => !prev);
    };
    // =============***************================
    const FRUITS = [
        '🍏 Apple',
        '🍌 Banana',
        '🍍 Pineapple',
        '🥥 Coconut',
        '🍉 Watermelon',
    ];

    function renderItem({ item, handleRemoveFruit }) {
        return (
            <ListItem
                secondaryAction={
                    <IconButton
                        edge="end"
                        aria-label="delete"
                        title="Delete"
                        onClick={() => handleRemoveFruit(item)}
                    >
                        <DeleteIcon />
                    </IconButton>
                }
            >
                <ListItemText primary={item} />
            </ListItem>
        );
    }

    const [fruitsInBasket, setFruitsInBasket] = React.useState(FRUITS.slice(0, 3));

    const handleAddFruit = () => {
        const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));
        if (nextHiddenItem) {
            setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);
        }
    };

    const handleRemoveFruit = (item) => {
        setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);
    };

    const addFruitButton = (
        <Button
            variant="contained"
            disabled={fruitsInBasket.length >= FRUITS.length}
            onClick={handleAddFruit}
        >
            Add fruit to basket
        </Button>
    );

    // =============***************================
    // =============***************================
    // =============***************================
    // =============***************================
    // =============***************================
    // =============***************================
    // =============***************================
    // =============***************================
    return (
        <>
            <br /><br />
            <Typography variant="h2" component="h2">
                BOX
            </Typography>
            {/* ===================****************=============== */}
            <br />

            <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                This Box renders as an HTML section element.
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <ThemeProvider
                theme={{
                    palette: {
                        primary: {
                            main: '#007FFF',
                            dark: '#0066CC',
                        },
                    },
                }}
            >
                <Box
                    sx={{
                        width: 100,
                        height: 100,
                        borderRadius: 1,
                        bgcolor: 'primary.main',
                        '&:hover': {
                            bgcolor: 'primary.dark',
                        },
                    }}
                />
            </ThemeProvider>

            <br /><br />
            <Typography variant="h2" component="h2">
                Container
            </Typography>
            {/* ===================****************=============== */}
            <br />



            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="sm">
                    <Box sx={{ bgcolor: '#cfe8fc', height: '500px' }} />
                </Container>
            </React.Fragment>
            <br /><br />
            {/* ========================********************================== */}
            <React.Fragment>
                <CssBaseline />
                <Container fixed>
                    <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
                </Container>
            </React.Fragment>

            <br /><br />
            <Typography variant="h2" component="h2">
                Grid
            </Typography>
            {/* ===================****************=============== */}
            <br />

            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>


            <br /><br />
            {/* ========================********************================== */}
            <ImageList
                sx={{ width: 1000, height: 800 }}
                variant="quilted"
                cols={4}
                rowHeight={121}
            >
                {itemDataa.map((item) => (
                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            {...srcset(item.img, 121, item.rows, item.cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            <br /><br />
            {/* ========================********************================== */}
            <ImageList sx={{ width: 500, height: 450 }} variant="woven" cols={3} gap={8}>
                {itemDatas.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=161&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <br /><br />
            {/* ========================********************================== */}
            <ImageList sx={{ width: 500, height: 450 }}>
                <ImageListItem key="Subheader" cols={2}>
                    <ListSubheader component="div">December</ListSubheader>
                </ImageListItem>
                {itemDatab.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <br /><br />
            {/* ========================********************================== */}
            <ImageList sx={{ width: 500, height: 450 }}>
                {itemDatac.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={<span>by: {item.author}</span>}
                            position="below"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {itemDatad.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar position="below" title={item.author} />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <ImageList
                sx={{
                    width: 500,
                    height: 450,
                    // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
                    transform: 'translateZ(0)',
                }}
                rowHeight={200}
                gap={1}
            >
                {itemDatae.map((item) => {
                    const cols = item.featured ? 2 : 1;
                    const rows = item.featured ? 2 : 1;

                    return (
                        <ImageListItem key={item.img} cols={cols} rows={rows}>
                            <img
                                {...srcset(item.img, 250, 200, rows, cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar
                                sx={{
                                    background:
                                        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                }}
                                title={item.title}
                                position="top"
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'white' }}
                                        aria-label={`star ${item.title}`}
                                    >
                                        <StarBorderIcon />
                                    </IconButton>
                                }
                                actionPosition="left"
                            />
                        </ImageListItem>
                    );
                })}
            </ImageList>
            <br /><br />
            {/* ========================********************================== */}


            <br /><br />
            <Typography variant="h2" component="h2">
                Click-Away Listener
            </Typography>
            {/* ===================****************=============== */}
            <br />
            <ClickAwayListener onClickAway={handleClickAway}>
                <Box sx={{ position: 'relative' }}>
                    <button type="button" onClick={handleClick}>
                        Open menu dropdown
                    </button>
                    {open ? (
                        <Box sx={styles}>
                            Click me, I will stay visible until you click outside.
                        </Box>
                    ) : null}
                </Box>
            </ClickAwayListener>
            <br /><br />
            {/* ========================********************================== */}
            <ClickAwayListener onClickAway={handleClickAwaya}>
                <div>
                    <button type="button" onClick={handleClicka}>
                        Open menu dropdown
                    </button>
                    {opena ? (
                        <Portal>
                            <Box sx={styless}>
                                Click me, I will stay visible until you click outside.
                            </Box>
                        </Portal>
                    ) : null}
                </div>
            </ClickAwayListener>
            <br /><br />
            {/* ========================********************================== */}
            <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={openb}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Modal>
            </div>
            <br /><br />
            {/* ========================********************================== */}
            <div>
                <Button onClick={handleOpenc}>Open modal</Button>
                <Modal
                    open={openc}
                    onClose={handleClosec}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
                >
                    <Box sx={{ ...style, width: 400 }}>
                        <h2 id="parent-modal-title">Text in a modal</h2>
                        <p id="parent-modal-description">
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </p>
                        <ChildModal />
                    </Box>
                </Modal>
            </div>
            <br /><br />
            {/* ========================********************================== */}
            <div>
                <Button onClick={handleOpend}>Open modal</Button>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={opend}
                    onClose={handleClosed}
                    closeAfterTransition
                    slots={{ backdrop: Backdrop }}
                    slotProps={{
                        backdrop: {
                            timeout: 500,
                        },
                    }}
                >
                    <Fade in={opend}>
                        <Box sx={styled}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Fade>
                </Modal>
            </div>
            <br /><br />
            {/* ========================********************================== */}
            <div>
                <button
                    type="button"
                    onClick={() =>
                        setState({
                            open: !state.open,
                            defer: false,
                        })
                    }
                >
                    {'Render NoSsr defer="false"'}
                </button>
                <br />
                <button
                    type="button"
                    onClick={() =>
                        setState({
                            open: !state.open,
                            defer: true,
                        })
                    }
                >
                    {'Render NoSsr defer="true"'}
                </button>
                <br />
                <br />
                <Box sx={{ width: 300, display: 'flex', flexWrap: 'wrap' }}>
                    {state.open ? (
                        <React.Fragment>
                            <div>Outside NoSsr</div>
                            <NoSsr defer={state.defer}>
                                .....Inside NoSsr
                                <LargeTree />
                            </NoSsr>
                        </React.Fragment>
                    ) : null}
                </Box>
            </div>
            <br /><br />
            {/* ========================********************================== */}
            <div>
                <Typography
                    aria-owns={opens ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                >
                    Hover with a Popover.
                </Typography>
                <Popover
                    id="mouse-over-popover"
                    sx={{ pointerEvents: 'none' }}
                    open={opens}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <Typography sx={{ p: 1 }}>I use Popover.</Typography>
                </Popover>
            </div>
            <br /><br />
            {/* ========================********************================== */}
            <PopupState variant="popover" popupId="demo-popup-popover">
                {(popupState) => (
                    <div>
                        <Button variant="contained" {...bindTrigger(popupState)}>
                            Open Popover
                        </Button>
                        <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
                        </Popover>
                    </div>
                )}
            </PopupState>
            <br /><br />
            {/* ========================********************================== */}
            <div>
                <button aria-describedby={id} type="button" onClick={handleClicke}>
                    Toggle Popper
                </button>
                <Popper id={id} open={opene} anchorEl={anchorEle}>
                    <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
                        The content of the Popper.
                    </Box>
                </Popper>
            </div>

            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ width: 500 }}>
                <Popper
                    // Note: The following zIndex style is specifically for documentation purposes and may not be necessary in your application.
                    sx={{ zIndex: 1200 }}
                    open={openf}
                    anchorEl={anchorElf}
                    placement={placement}
                    transition
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper>
                                <Typography sx={{ p: 2 }}>The content of the Popper.</Typography>
                            </Paper>
                        </Fade>
                    )}
                </Popper>
                <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid>
                        <Button onClick={handleClickf('top-start')}>top-start</Button>
                        <Button onClick={handleClickf('top')}>top</Button>
                        <Button onClick={handleClickf('top-end')}>top-end</Button>
                    </Grid>
                </Grid>
                <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid size={6}>
                        <Button onClick={handleClickf('left-start')}>left-start</Button>
                        <br />
                        <Button onClick={handleClickf('left')}>left</Button>
                        <br />
                        <Button onClick={handleClickf('left-end')}>left-end</Button>
                    </Grid>
                    <Grid container direction="column" sx={{ alignItems: 'flex-end' }} size={6}>
                        <Grid>
                            <Button onClick={handleClickf('right-start')}>right-start</Button>
                        </Grid>
                        <Grid>
                            <Button onClick={handleClickf('right')}>right</Button>
                        </Grid>
                        <Grid>
                            <Button onClick={handleClickf('right-end')}>right-end</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid>
                        <Button onClick={handleClickf('bottom-start')}>bottom-start</Button>
                        <Button onClick={handleClickf('bottom')}>bottom</Button>
                        <Button onClick={handleClickf('bottom-end')}>bottom-end</Button>
                    </Grid>
                </Grid>
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <div>
                <button type="button" onClick={handleClicks}>
                    {show ? 'Unmount children' : 'Mount children'}
                </button>
                <Box sx={{ p: 1, my: 1, border: '1px solid' }}>
                    It looks like I will render here.
                    {show ? (
                        <Portal container={() => container.current}>
                            <span>But I actually render here!</span>
                        </Portal>
                    ) : null}
                </Box>
                <Box sx={{ p: 1, my: 1, border: '1px solid' }} ref={container} />
            </div>
            <br /><br />
            {/* ========================********************================== */}
            <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Empty"
                style={{ width: 200 }}
            />
            <br /><br />
            {/* ========================********************================== */}
            <TextareaAutosize
                aria-label="minimum height"
                minRows={3}
                placeholder="Minimum 3 rows"
                style={{ width: 200 }}
            />
            <br /><br />
            {/* ========================********************================== */}
            <TextareaAutosize
                maxRows={4}
                aria-label="maximum height"
                placeholder="Maximum 4 rows"
                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
                style={{ width: 200 }}
            />
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ height: 300 }}>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={handleChange} />}
                    label="Show"
                />
                <Box
                    sx={{
                        '& > :not(style)': {
                            display: 'flex',
                            justifyContent: 'space-around',
                            height: 120,
                            width: 250,
                        },
                    }}
                >
                    <div>
                        <Collapse in={checked}>{icon}</Collapse>
                        <Collapse in={checked} collapsedSize={40}>
                            {icon}
                        </Collapse>
                    </div>
                    <div>
                        <Box sx={{ width: '50%' }}>
                            <Collapse orientation="horizontal" in={checked}>
                                {icon}
                            </Collapse>
                        </Box>
                        <Box sx={{ width: '50%' }}>
                            <Collapse orientation="horizontal" in={checked} collapsedSize={40}>
                                {icon}
                            </Collapse>
                        </Box>
                    </div>
                </Box>
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ height: 180 }}>
                <FormControlLabel
                    control={<Switch checked={checkedg} onChange={handleChangeg} />}
                    label="Show"
                />
                <Box sx={{ display: 'flex' }}>
                    <Grow in={checkedg}>{icong}</Grow>
                    {/* Conditionally applies the timeout prop to change the entry speed. */}
                    <Grow
                        in={checkedg}
                        style={{ transformOrigin: '0 0 0' }}
                        {...(checked ? { timeout: 1000 } : {})}
                    >
                        {icon}
                    </Grow>
                </Box>
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ height: 180, width: 130, position: 'relative', zIndex: 1 }}>
                <FormControlLabel
                    control={<Switch checked={checkedh} onChange={handleChangeh} />}
                    label="Show"
                />
                <Slide direction="up" in={checkedh} mountOnEnter unmountOnExit>
                    {iconh}
                </Slide>
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <Box
                sx={{
                    width: 240,
                    borderRadius: 2,
                    border: '1px solid',
                    borderColor: 'divider',
                    backgroundColor: 'background.default',
                }}
            >
                <Box sx={{ p: 2, height: 200, overflow: 'hidden' }} ref={containerRef}>
                    <FormControlLabel
                        control={<Switch checked={checkedi} onChange={handleChangei} />}
                        label="Show from target"
                    />
                    <Slide in={checkedi} container={containerRef.current}>
                        {iconi}
                    </Slide>
                </Box>
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ height: 180 }}>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={handleChange} />}
                    label="Show"
                />
                <Box sx={{ display: 'flex' }}>
                    <Zoom in={checked}>{icon}</Zoom>
                    <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
                        {icon}
                    </Zoom>
                </Box>
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ width: 200 }}>
                {addFruitButton}
                <List sx={{ mt: 1 }}>
                    <TransitionGroup>
                        {fruitsInBasket.map((item) => (
                            <Collapse key={item}>{renderItem({ item, handleRemoveFruit })}</Collapse>
                        ))}
                    </TransitionGroup>
                </List>
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <BarChart
                series={[
                    { data: [35, 44, 24, 34] },
                    { data: [51, 6, 49, 30] },
                    { data: [15, 25, 30, 50] },
                    { data: [60, 50, 15, 25] },
                ]}
                height={290}
                xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'] }]}
            />
            <br /><br />
            {/* ========================********************================== */}
            <BarChart
                xAxis={[
                    {
                        id: 'barCategories',
                        data: ['bar A', 'bar B', 'bar C'],
                    },
                ]}
                series={[
                    {
                        data: [2, 5, 3],
                    },
                ]}
                height={900}
            />
            <br /><br />
            {/* ========================********************================== */}
            <br /><br />
            {/* ========================********************================== */}
            <br /><br />
            {/* ========================********************================== */}
            <br /><br />
            {/* ========================********************================== */}
            <br /><br />
            {/* ========================********************================== */}
            <br /><br />
            {/* ========================********************================== */}
            <br /><br />
            {/* ========================********************================== */}
        </>
    )
}

export default Layouts
