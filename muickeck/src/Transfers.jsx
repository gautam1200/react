import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Avatar, AvatarGroup, Badge, Box, ButtonBase, ButtonGroup, Chip, Collapse, createSvgIcon, FormControlLabel, FormGroup, IconButton, ListItem, ListItemAvatar, ListSubheader, Paper, Stack, SvgIcon, Switch, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import LaptopIcon from '@mui/icons-material/Laptop';
import TvIcon from '@mui/icons-material/Tv';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CheckIcon from '@mui/icons-material/Check';
import A1 from './A1.jpeg'
import A2 from './A2.jpeg'
import A3 from './A3.jpeg'
import { deepOrange, deepPurple, green, pink } from '@mui/material/colors';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import styled from 'styled-components';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import FaceIcon from '@mui/icons-material/Face';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import HomeIcon from '@mui/icons-material/Home';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import FourKIcon from '@mui/icons-material/FourK';
import ThreeSixtyIcon from '@mui/icons-material/ThreeSixty';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { ExpandLess, StarBorder } from '@mui/icons-material';
import SendIcon from '@mui/icons-material/Send';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import StarIcon from '@mui/icons-material/Star';
import CommentIcon from '@mui/icons-material/Comment';
import { FixedSizeList } from 'react-window';
import { DataGrid } from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';



function not(a, b) {
    return a.filter((value) => !b.includes(value));
}

function intersection(a, b) {
    return a.filter((value) => b.includes(value));
}

function union(a, b) {
    return [...a, ...not(b, a)];
}

function Transfers() {
    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState([0, 1, 2, 3]);
    const [right, setRight] = React.useState([4, 5, 6, 7]);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const numberOfChecked = (items) => intersection(checked, items).length;

    const handleToggleAll = (items) => () => {
        if (numberOfChecked(items) === items.length) {
            setChecked(not(checked, items));
        } else {
            setChecked(union(checked, items));
        }
    };

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked));
        setLeft(not(left, leftChecked));
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked));
        setRight(not(right, rightChecked));
        setChecked(not(checked, rightChecked));
    };

    const customList = (title, items) => (
        <Card>
            <CardHeader
                sx={{ px: 2, py: 1 }}
                avatar={
                    <Checkbox
                        onClick={handleToggleAll(items)}
                        checked={numberOfChecked(items) === items.length && items.length !== 0}
                        indeterminate={
                            numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0
                        }
                        disabled={items.length === 0}
                        inputProps={{
                            'aria-label': 'all items selected',
                        }}
                    />
                }
                title={title}
                subheader={`${numberOfChecked(items)}/${items.length} selected`}
            />
            <Divider />
            <List
                sx={{
                    width: 200,
                    height: 230,
                    bgcolor: 'background.paper',
                    overflow: 'auto',
                }}
                dense
                component="div"
                role="list"
            >
                {items.map((value) => {
                    const labelId = `transfer-list-all-item-${value}-label`;

                    return (
                        <ListItemButton
                            key={value}
                            role="listitem"
                            onClick={handleToggle(value)}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.includes(value)}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        'aria-labelledby': labelId,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={`List item ${value + 1}`} />
                        </ListItemButton>
                    );
                })}
            </List>
        </Card>
    );
    // ====================******************==================

    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    // ====================******************==================
    const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

    const handleFormat = (event, newFormats) => {
        setFormats(newFormats);
    };
    // ====================******************==================
    const [alignmenta, setAlignmenta] = React.useState('left');

    const handleChange = (event, newAlignment) => {
        setAlignmenta(newAlignment);
    };

    const children = [
        <ToggleButton value="left" key="left">
            <FormatAlignLeftIcon />
        </ToggleButton>,
        <ToggleButton value="center" key="center">
            <FormatAlignCenterIcon />
        </ToggleButton>,
        <ToggleButton value="right" key="right">
            <FormatAlignRightIcon />
        </ToggleButton>,
        <ToggleButton value="justify" key="justify">
            <FormatAlignJustifyIcon />
        </ToggleButton>,
    ];

    const control = {
        value: alignmenta,
        onChange: handleChange,
        exclusive: true,
    };
    // ====================******************==================
    const [view, setView] = React.useState('list');

    const handleChangea = (event, nextView) => {
        setView(nextView);
    };
    // ====================******************==================
    const [alignmentb, setAlignmentb] = React.useState('left');
    const [devices, setDevices] = React.useState(() => ['phone']);

    const handleAlignmentb = (event, newAlignment) => {
        if (newAlignment !== null) {
            setAlignmentb(newAlignment);
        }
    };

    const handleDevices = (event, newDevices) => {
        if (newDevices.length) {
            setDevices(newDevices);
        }
    };
    // ====================******************==================
    const [selected, setSelected] = React.useState(false);
    // ====================******************==================
    // const StyledBadge = styled(Badge)(({ theme }) => ({
    //     '& .MuiBadge-badge': {
    //         backgroundColor: '#44b700',
    //         color: '#44b700',
    //         boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    //         '&::after': {
    //             position: 'absolute',
    //             top: 0,
    //             left: 0,
    //             width: '100%',
    //             height: '100%',
    //             borderRadius: '50%',
    //             animation: 'ripple 1.2s infinite ease-in-out',
    //             border: '1px solid currentColor',
    //             content: '""',
    //         },
    //     },
    //     '@keyframes ripple': {
    //         '0%': {
    //             transform: 'scale(.8)',
    //             opacity: 1,
    //         },
    //         '100%': {
    //             transform: 'scale(2.4)',
    //             opacity: 0,
    //         },
    //     },
    // }));

    // const SmallAvatar = styled(Avatar)(({ theme }) => ({
    //     width: 22,
    //     height: 22,
    //     border: `2px solid ${theme.palette.background.paper}`,
    // }));
    // ====================******************==================
    const [avatarSrc, setAvatarSrc] = React.useState(undefined);

    const handleAvatarChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
            // Read the file as a data URL
            const reader = new FileReader();
            reader.onload = () => {
                setAvatarSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    // ====================******************==================
    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
            padding: '0 4px',
        },
    }));
    // ====================******************==================
    const [count, setCount] = React.useState(1);
    const [invisible, setInvisible] = React.useState(false);

    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
    };
    // ====================******************==================
    const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
    const shapeCircleStyles = { borderRadius: '50%' };
    const rectangle = <Box component="span" sx={shapeStyles} />;
    const circle = (
        <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
    );
    // ====================******************==================

    function notificationsLabel(count) {
        if (count === 0) {
            return 'no notifications';
        }
        if (count > 99) {
            return 'more than 99 notifications';
        }
        return `${count} notifications`;
    }

    // ====================******************==================
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };
    // ====================******************==================
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    // ====================******************==================

    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' },
    ]);

    const handleDeletes = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };
    // ====================******************==================
    const style = {
        py: 0,
        width: '100%',
        maxWidth: 360,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
    };
    // ====================******************==================
    // const Root = styled('div')(({ theme }) => ({
    //     width: '100%',
    //     ...theme.typography.body2,
    //     color: (theme.vars || theme).palette.text.secondary,
    //     '& > :not(style) ~ :not(style)': {
    //         marginTop: theme.spacing(2),
    //     },
    // }));

    // const content = (
    //     <p>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`}</p>
    // );
    const styless = {
        p: 0,
        width: '100%',
        maxWidth: 360,
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        backgroundColor: 'background.paper',
    };
    // ====================******************==================
    <SvgIcon >
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
    // ====================******************==================
    const HomeIcon = createSvgIcon(
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
        'Home',
    );

    const PlusIcon = createSvgIcon(
        // credit: plus icon from https://heroicons.com
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>,
        'Plus',
    );
    // ====================******************==================
    const [open, setOpen] = React.useState(true);

    const handleClicka = () => {
        setOpen(!open);
    };
    // ====================******************==================
    function generate(element) {
        return [0, 1, 2].map((value) =>
            React.cloneElement(element, {
                key: value,
            }),
        );
    }

    // const Demo = styled('div')(({ theme }) => ({
    //     backgroundColor: (theme.vars || theme).palette.background.paper,
    // }));
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);
    // ====================******************==================
    const [checkeds, setCheckedd] = React.useState([1]);

    const handleTogglel = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setCheckedd(newChecked);
    };
    // ====================******************==================
    function renderRow(props) {
        const { index, style } = props;

        return (
            <ListItem style={style} key={index} component="div" disablePadding>
                <ListItemButton>
                    <ListItemText primary={`Item ${index + 1}`} />
                </ListItemButton>
            </ListItem>
        );
    }
    // ====================******************==================
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];
    // ====================******************==================
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
    ];

    const rowssss = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];

    const paginationModel = { page: 0, pageSize: 5 };
    // ====================******************==================
    // const StyledTableCell = styled(TableCell)(({ theme }) => ({
    //     [`&.${tableCellClasses.head}`]: {
    //         backgroundColor: theme.palette.common.black,
    //         color: theme.palette.common.white,
    //     },
    //     [`&.${tableCellClasses.body}`]: {
    //         fontSize: 14,
    //     },
    // }));

    // const StyledTableRow = styled(TableRow)(({ theme }) => ({
    //     '&:nth-of-type(odd)': {
    //         backgroundColor: theme.palette.action.hover,
    //     },
    //     // hide last border
    //     '&:last-child td, &:last-child th': {
    //         border: 0,
    //     },
    // }));

    // function createData(name, calories, fat, carbs, protein) {
    //     return { name, calories, fat, carbs, protein };
    // }

    // const rowsw = [
    //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //     createData('Cupcake', 305, 3.7, 67, 4.3),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    // ];
    // ====================******************==================
    // ====================******************==================
    // ====================******************==================
    // ====================******************==================
    // ====================******************==================
    // ====================******************==================
    // ====================******************==================
    // ====================******************==================
    // ====================******************==================




    return (
        <>
            <br /><br />
            <Typography variant="h2" component="h2">
                Toggle Button
            </Typography>
            {/* ===================****************=============== */}
            <br />
            <Grid
                container
                spacing={2}
                sx={{ justifyContent: 'center', alignItems: 'center' }}
            >
                <Grid>{customList('Choices', left)}</Grid>
                <Grid>
                    <Grid container direction="column" sx={{ alignItems: 'center' }}>
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            onClick={handleCheckedRight}
                            disabled={leftChecked.length === 0}
                            aria-label="move selected right"
                        >
                            &gt;
                        </Button>
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            onClick={handleCheckedLeft}
                            disabled={rightChecked.length === 0}
                            aria-label="move selected left"
                        >
                            &lt;
                        </Button>
                    </Grid>
                </Grid>
                <Grid>{customList('Chosen', right)}</Grid>

                <br /><br />
            </Grid>
            {/* ===================**************=============== */}
            <ToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
                aria-label="text alignment"
            >
                <ToggleButton value="left" aria-label="left aligned">
                    <FormatAlignLeftIcon />
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                    <FormatAlignCenterIcon />
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                    <FormatAlignRightIcon />
                </ToggleButton>
                <ToggleButton value="justify" aria-label="justified" disabled>
                    <FormatAlignJustifyIcon />
                </ToggleButton>
            </ToggleButtonGroup>
            <br /><br />
            {/* ===================**************=============== */}
            <ToggleButtonGroup
                value={formats}
                onChange={handleFormat}
                aria-label="text formatting"
            >
                <ToggleButton value="bold" aria-label="bold">
                    <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton value="italic" aria-label="italic">
                    <FormatItalicIcon />
                </ToggleButton>
                <ToggleButton value="underlined" aria-label="underlined">
                    <FormatUnderlinedIcon />
                </ToggleButton>
                <ToggleButton value="color" aria-label="color" disabled>
                    <FormatColorFillIcon />
                    <ArrowDropDownIcon />
                </ToggleButton>
            </ToggleButtonGroup>
            <br /><br />
            {/* ===================**************=============== */}
            <Stack spacing={2} sx={{ alignItems: 'center' }}>
                <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
                    {children}
                </ToggleButtonGroup>
                <ToggleButtonGroup {...control} aria-label="Medium sizes">
                    {children}
                </ToggleButtonGroup>
                <ToggleButtonGroup size="large" {...control} aria-label="Large sizes">
                    {children}
                </ToggleButtonGroup>
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}
            <ToggleButtonGroup
                orientation="vertical"
                value={view}
                exclusive
                onChange={handleChangea}
            >
                <ToggleButton value="list" aria-label="list">
                    <ViewListIcon />
                </ToggleButton>
                <ToggleButton value="module" aria-label="module">
                    <ViewModuleIcon />
                </ToggleButton>
                <ToggleButton value="quilt" aria-label="quilt">
                    <ViewQuiltIcon />
                </ToggleButton>
            </ToggleButtonGroup>
            <br /><br />
            {/* ===================**************=============== */}
            <Stack direction="row" spacing={4}>
                <ToggleButtonGroup
                    value={alignmentb}
                    exclusive
                    onChange={handleAlignmentb}
                    aria-label="text alignment"
                >
                    <ToggleButton value="left" aria-label="left aligned">
                        <FormatAlignLeftIcon />
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="centered">
                        <FormatAlignCenterIcon />
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="right aligned">
                        <FormatAlignRightIcon />
                    </ToggleButton>
                </ToggleButtonGroup>

                <ToggleButtonGroup
                    value={devices}
                    onChange={handleDevices}
                    aria-label="device"
                >
                    <ToggleButton value="laptop" aria-label="laptop">
                        <LaptopIcon />
                    </ToggleButton>
                    <ToggleButton value="tv" aria-label="tv">
                        <TvIcon />
                    </ToggleButton>
                    <ToggleButton value="phone" aria-label="phone">
                        <PhoneAndroidIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}
            <ToggleButton
                value="check"
                selected={selected}
                onChange={() => setSelected((prevSelected) => !prevSelected)}
            >
                <CheckIcon />
            </ToggleButton>

            <br /><br />
            <Typography variant="h2" component="h2">
                Avatar
            </Typography>
            {/* ===================****************=============== */}
            <br />
            <Stack direction="row" spacing={2}>
                <Avatar alt="Remy Sharp" src={A1} />
                <Avatar alt="Travis Howard" src={A2} />
                <Avatar alt="Cindy Baker" src={A3} />
            </Stack>
            <br /><br />
            <Stack direction="row" spacing={2}>
                <Avatar>H</Avatar>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
            </Stack>
            <br /><br /><br />
            <Stack direction="row" spacing={2}>
                <Avatar
                    alt="Remy Sharp"
                    src={A1}
                    sx={{ width: 24, height: 24 }}
                />
                <Avatar alt="Remy Sharp" src={A2} />
                <Avatar
                    alt="Remy Sharp"
                    src={A3}
                    sx={{ width: 56, height: 56 }}
                />
            </Stack>
            <br /><br />
            <Stack direction="row" spacing={2}>
                <Avatar>
                    <FolderIcon />
                </Avatar>
                <Avatar sx={{ bgcolor: pink[500] }}>
                    <PageviewIcon />
                </Avatar>
                <Avatar sx={{ bgcolor: green[500] }}>
                    <AssignmentIcon />
                </Avatar>
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}
            <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
                    N
                </Avatar>
                <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                    <AssignmentIcon />
                </Avatar>
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}
            <Stack direction="row" spacing={2}>
                <Avatar
                    sx={{ bgcolor: deepOrange[500] }}
                    alt="Remy Sharp"
                    src="/broken-image.jpg"
                >
                    B
                </Avatar>
                <Avatar
                    sx={{ bgcolor: deepOrange[500] }}
                    alt="Remy Sharp"
                    src="/broken-image.jpg"
                />
                <Avatar src="/broken-image.jpg" />
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}
            <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src={A1} />
                <Avatar alt="Travis Howard" src={A2} />
                <Avatar alt="Cindy Baker" src={A3} />
                <Avatar alt="Agnes Walker" src={A1} />
                <Avatar alt="Trevor Henderson" src={A2} />
                <Avatar alt="Trevor Henderson" src={A2} />
                <Avatar alt="Trevor Henderson" src={A2} />
            </AvatarGroup>
            <AvatarGroup total={24}>
                <Avatar alt="Remy Sharp" src={A1} />
                <Avatar alt="Travis Howard" src={A2} />
                <Avatar alt="Agnes Walker" src={A3} />
                <Avatar alt="Trevor Henderson" src={A1} />
            </AvatarGroup>
            <AvatarGroup
                renderSurplus={(surplus) => <span>+{surplus.toString()[0]}k</span>}
                total={4251}
            >
                <Avatar alt="Remy Sharp" src={A1} />
                <Avatar alt="Travis Howard" src={A2} />
                <Avatar alt="Agnes Walker" src={A3} />
                <Avatar alt="Trevor Henderson" src={A2} />
            </AvatarGroup>
            <br /><br />
            {/* ===================**************=============== */}
            <Stack spacing={4}>
                <AvatarGroup spacing="medium">
                    <Avatar alt="Remy Sharp" src={A1} />
                    <Avatar alt="Travis Howard" src={A2} />
                    <Avatar alt="Cindy Baker" src={A3} />
                </AvatarGroup>
                <AvatarGroup spacing="small">
                    <Avatar alt="Remy Sharp" src={A3} />
                    <Avatar alt="Travis Howard" src={A1} />
                    <Avatar alt="Cindy Baker" src={A2} />
                </AvatarGroup>
                <AvatarGroup spacing={24}>
                    <Avatar alt="Remy Sharp" src={A2} />
                    <Avatar alt="Travis Howard" src={A3} />
                    <Avatar alt="Cindy Baker" src={A1} />
                </AvatarGroup>
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}
            {/* <Stack direction="row" spacing={2}>
                <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src={A2} />
                </StyledBadge>
                <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    badgeContent={
                        <SmallAvatar alt="Remy Sharp" src={A1} />
                    }
                >
                    <Avatar alt="Travis Howard" src={A3} />
                </Badge>
            </Stack> */}
            <br /><br />
            {/* ===================**************=============== */}
            <ButtonBase
                component="label"
                role={undefined}
                tabIndex={-1} // prevent label from tab focus
                aria-label="Avatar image"
                sx={{
                    borderRadius: '40px',
                    '&:has(:focus-visible)': {
                        outline: '2px solid',
                        outlineOffset: '2px',
                    },
                }}
            >
                <Avatar alt="Upload new avatar" src={avatarSrc} />
                <input
                    type="file"
                    accept="image/*"
                    style={{
                        border: 0,
                        clip: 'rect(0 0 0 0)',
                        height: '1px',
                        margin: '-1px',
                        overflow: 'hidden',
                        padding: 0,
                        position: 'absolute',
                        whiteSpace: 'nowrap',
                        width: '1px',
                    }}
                    onChange={handleAvatarChange}
                />
            </ButtonBase>
            <br /><br />

            <br /><br />
            <Typography variant="h2" component="h2">
                Badge
            </Typography>
            {/* ===================****************=============== */}
            <br />


            <Badge badgeContent={4} color="primary">
                <MailIcon color="action" />
            </Badge>
            <br /><br /><br />
            <Stack spacing={2} direction="row">
                <Badge badgeContent={4} color="secondary">
                    <MailIcon color="action" />
                </Badge>
                <Badge badgeContent={4} color="success">
                    <MailIcon color="action" />
                </Badge>
            </Stack>
            <br /><br /><br />
            {/* <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                    <ShoppingCartIcon />
                </StyledBadge>
            </IconButton> */}
            <br /><br />
            {/* ===================**************=============== */}
            <Box
                sx={{
                    color: 'action.active',
                    display: 'flex',
                    flexDirection: 'column',
                    '& > *': {
                        marginBottom: 2,
                    },
                    '& .MuiBadge-root': {
                        marginRight: 4,
                    },
                }}
            >
                <div>
                    <Badge color="secondary" badgeContent={count}>
                        <MailIcon />
                    </Badge>
                    <ButtonGroup>
                        <Button
                            aria-label="reduce"
                            onClick={() => {
                                setCount(Math.max(count - 1, 0));
                            }}
                        >
                            <RemoveIcon fontSize="small" />
                        </Button>
                        <Button
                            aria-label="increase"
                            onClick={() => {
                                setCount(count + 1);
                            }}
                        >
                            <AddIcon fontSize="small" />
                        </Button>
                    </ButtonGroup>
                </div>
                <div>
                    <Badge color="secondary" variant="dot" invisible={invisible}>
                        <MailIcon />
                    </Badge>
                    <FormControlLabel
                        sx={{ color: 'text.primary' }}
                        control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />}
                        label="Show Badge"
                    />
                </div>
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
                <Badge color="secondary" badgeContent={0}>
                    <MailIcon />
                </Badge>
                <Badge color="secondary" badgeContent={0} showZero>
                    <MailIcon />
                </Badge>
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}
            <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
                <Badge color="secondary" badgeContent={99}>
                    <MailIcon />
                </Badge>
                <Badge color="secondary" badgeContent={100}>
                    <MailIcon />
                </Badge>
                <Badge color="secondary" badgeContent={1000} max={999}>
                    <MailIcon />
                </Badge>
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}
            <Stack spacing={3} direction="row">
                <Badge color="secondary" badgeContent=" ">
                    {rectangle}
                </Badge>
                <Badge color="secondary" badgeContent=" " variant="dot">
                    {rectangle}
                </Badge>
                <Badge color="secondary" overlap="circular" badgeContent=" ">
                    {circle}
                </Badge>
                <Badge color="secondary" overlap="circular" badgeContent=" " variant="dot">
                    {circle}
                </Badge>
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}
            <IconButton aria-label={notificationsLabel(100)}>
                <Badge badgeContent={100} color="secondary">
                    <MailIcon />
                </Badge>
            </IconButton>

            <br /><br />
            <Typography variant="h2" component="h2">
                Chips
            </Typography>
            {/* ===================****************=============== */}
            <br />
            <Stack direction="row" spacing={1}>
                <Chip label="Chip Filled" />
                <Chip label="Chip Outlined" variant="outlined" />
            </Stack>
            <Stack direction="row" spacing={1}>
                <Chip label="Clickable" onClick={handleClick} />
                <Chip label="Clickable" variant="outlined" onClick={handleClick} />
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}
            <Stack direction="row" spacing={1}>
                <Chip label="Deletable" onDelete={handleDelete} />
                <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}
            <Stack direction="row" spacing={1}>
                <Chip
                    label="Clickable Deletable"
                    onClick={handleClick}
                    onDelete={handleDelete}
                />
                <Chip
                    label="Clickable Deletable"
                    variant="outlined"
                    onClick={handleClick}
                    onDelete={handleDelete}
                />
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}
            <Stack direction="row" spacing={1}>
                <Chip label="Clickable Link" component="a" href="#" clickable />
                <Chip
                    label="Clickable Link"
                    component="a"
                    href="#"
                    variant="outlined"
                    clickable
                />
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}
            <Stack direction="row" spacing={1}>
                <Chip
                    label="Custom delete icon"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<DoneIcon />}
                />
                <Chip
                    label="Custom delete icon"
                    onClick={handleClick}
                    onDelete={handleDelete}
                    deleteIcon={<DeleteIcon />}
                    variant="outlined"
                />
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}
            <Stack direction="row" spacing={1}>
                <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
                <Chip
                    avatar={<Avatar alt="Natacha" src={A1} />}
                    label="Avatar"
                    variant="outlined"
                />
            </Stack>
            <Stack direction="row" spacing={1}>
                <Chip icon={<FaceIcon />} label="With Icon" />
                <Chip icon={<FaceIcon />} label="With Icon" variant="outlined" />
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}
            <Stack spacing={1} sx={{ alignItems: 'center' }}>
                <Stack direction="row" spacing={1}>
                    <Chip label="primary" color="primary" />
                    <Chip label="success" color="success" />
                </Stack>
                <Stack direction="row" spacing={1}>
                    <Chip label="primary" color="primary" variant="outlined" />
                    <Chip label="success" color="success" variant="outlined" />
                </Stack>
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}
            <Stack direction="row" spacing={1}>
                <Chip label="Small" size="small" />
                <Chip label="Small" size="small" variant="outlined" />
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}
            <Box sx={{ width: 100 }}>
                <Chip
                    sx={{
                        height: 'auto',
                        '& .MuiChip-label': {
                            display: 'block',
                            whiteSpace: 'normal',
                        },
                    }}
                    label="This is a chip that has multiple lines."
                />
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <Paper
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    listStyle: 'none',
                    p: 0.5,
                    m: 0,
                }}
                component="ul"
            >
                {chipData.map((data) => {
                    let icon;

                    if (data.label === 'React') {
                        icon = <TagFacesIcon />;
                    }

                    return (
                        <ListItem key={data.key}>
                            <Chip
                                icon={icon}
                                label={data.label}
                                onDelete={data.label === 'React' ? undefined : handleDeletes(data)}
                            />
                        </ListItem>
                    );
                })}
            </Paper>
            <br /><br />
            <Typography variant="h2" component="h2">
                Divider
            </Typography>
            {/* ===================****************=============== */}
            <br />

            <Card variant="outlined" sx={{ maxWidth: 360 }}>
                <Box sx={{ p: 2 }}>
                    <Stack
                        direction="row"
                        sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                    >
                        <Typography gutterBottom variant="h5" component="div">
                            Toothbrush
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            $4.50
                        </Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
                        just down the hall.
                    </Typography>
                </Box>
                <Divider />
                <Box sx={{ p: 2 }}>
                    <Typography gutterBottom variant="body2">
                        Select type
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip color="primary" label="Soft" size="small" />
                        <Chip label="Medium" size="small" />
                        <Chip label="Hard" size="small" />
                    </Stack>
                </Box>
            </Card>
            <br /><br />
            {/* ===================**************=============== */}
            <List sx={style}>
                <ListItem>
                    <ListItemText primary="Full width variant below" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <ListItemText primary="Inset variant below" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemText primary="Middle variant below" />
                </ListItem>
                <Divider variant="middle" component="li" />
                <ListItem>
                    <ListItemText primary="List item" />
                </ListItem>
            </List>
            <br /><br />
            {/* ===================**************=============== */}
            {/* <Root>
                {content}
                <Divider>CENTER</Divider>
                {content}
                <Divider textAlign="left">LEFT</Divider>
                {content}
                <Divider textAlign="right">RIGHT</Divider>
                {content}
                <Divider>
                    <Chip label="Chip" size="small" />
                </Divider>
                {content}
            </Root> */}
            <List sx={styless} aria-label="mailbox folders">
                <ListItem>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <ListItemText primary="Drafts" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <ListItemText primary="Trash" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                    <ListItemText primary="Spam" />
                </ListItem>
            </List>
            <br /><br />
            {/* ===================**************=============== */}
            <Stack direction="row" spacing={3}>
                <HomeIcon />
                <HomeIcon color="primary" />
                <HomeIcon color="secondary" />
                <HomeIcon color="success" />
                <HomeIcon color="action" />
                <HomeIcon color="disabled" />
                <HomeIcon sx={{ color: pink[500] }} />
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}
            <Box sx={{ flexGrow: 1 }}>
                <Grid container sx={{ color: 'text.primary' }}>
                    <Grid size={4}>
                        <Typography>Filled</Typography>
                    </Grid>
                    <Grid size={8}>
                        <DeleteIcon />
                        <DeleteForeverIcon />
                    </Grid>
                    <Grid size={4}>
                        <Typography>Outlined</Typography>
                    </Grid>
                    <Grid size={8}>
                        <DeleteOutlinedIcon />
                        <DeleteForeverOutlinedIcon />
                    </Grid>
                    <Grid size={4}>
                        <Typography>Rounded</Typography>
                    </Grid>
                    <Grid size={8}>
                        <DeleteRoundedIcon />
                        <DeleteForeverRoundedIcon />
                    </Grid>
                    <Grid size={4}>
                        <Typography>Two Tone</Typography>
                    </Grid>
                    <Grid size={8}>
                        <DeleteTwoToneIcon />
                        <DeleteForeverTwoToneIcon />
                    </Grid>
                    <Grid size={4}>
                        <Typography>Sharp</Typography>
                    </Grid>
                    <Grid size={8}>
                        <DeleteSharpIcon />
                        <DeleteForeverSharpIcon />
                    </Grid>
                    <Grid size={4}>
                        <Typography>Edge-cases</Typography>
                    </Grid>
                    <Grid size={8}>
                        <ThreeDRotationIcon />
                        <FourKIcon />
                        <ThreeSixtyIcon />
                    </Grid>
                </Grid>
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <SvgIcon>
                {/* credit: cog icon from https://heroicons.com */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                    />
                </svg>
            </SvgIcon>
            <br /><br />
            {/* ===================**************=============== */}
            <Stack direction="row" spacing={3} sx={{ alignItems: 'flex-end' }}>
                <HomeIcon fontSize="small" />
                <HomeIcon />
                <HomeIcon fontSize="large" />
                <HomeIcon sx={{ fontSize: 40 }} />
            </Stack>
            <br /><br />
            {/* ===================**************=============== */}
            <Stack direction="row" spacing={3}>
                <HomeIcon />
                <HomeIcon color="primary" />
                <PlusIcon />
                <PlusIcon color="secondary" />
            </Stack>


            <br /><br />
            <Typography variant="h2" component="h2">
                List
            </Typography>
            {/* ===================****************=============== */}
            <br />

            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <nav aria-label="main mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <InboxIcon />
                                </ListItemIcon>
                                <ListItemText primary="Inbox" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DraftsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Drafts" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
                <Divider />
                <nav aria-label="secondary mailbox folders">
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Trash" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component="a" href="#simple-list">
                                <ListItemText primary="Spam" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </nav>
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Nested List Items
                    </ListSubheader>
                }
            >
                <ListItemButton>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Sent mail" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItemButton>
                <ListItemButton onClick={handleClicka}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <StarBorder />
                            </ListItemIcon>
                            <ListItemText primary="Starred" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            <br /><br />
            {/* ===================**************=============== */}
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
            </List>
            <br /><br />
            {/* ===================**************=============== */}
            <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
                <FormGroup row>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={dense}
                                onChange={(event) => setDense(event.target.checked)}
                            />
                        }
                        label="Enable dense"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={secondary}
                                onChange={(event) => setSecondary(event.target.checked)}
                            />
                        }
                        label="Enable secondary text"
                    />
                </FormGroup>
                <Grid container spacing={2}>
                    <Grid
                        size={{
                            xs: 12,
                            md: 6,
                        }}
                    >
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                            Text only
                        </Typography>

                        <List dense={dense}>
                            {generate(
                                <ListItem>
                                    <ListItemText
                                        primary="Single-line item"
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItem>,
                            )}
                        </List>

                    </Grid>
                    <Grid
                        size={{
                            xs: 12,
                            md: 6,
                        }}
                    >
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                            Icon with text
                        </Typography>
                        {/* <Demo> */}
                        <List dense={dense}>
                            {generate(
                                <ListItem>
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Single-line item"
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItem>,
                            )}
                        </List>
                        {/* </Demo> */}
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid
                        size={{
                            xs: 12,
                            md: 6,
                        }}
                    >
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                            Avatar with text
                        </Typography>
                        {/* <D  emo> */}
                        <List dense={dense}>
                            {generate(
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Single-line item"
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItem>,
                            )}
                        </List>
                        {/* </Demo> */}
                    </Grid>
                    <Grid
                        size={{
                            xs: 12,
                            md: 6,
                        }}
                    >
                        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                            Avatar with text and icon
                        </Typography>
                        {/* <Demo> */}
                        <List dense={dense}>
                            {generate(
                                <ListItem
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    }
                                >
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Single-line item"
                                        secondary={secondary ? 'Secondary text' : null}
                                    />
                                </ListItem>,
                            )}
                        </List>
                        {/* </Demo> */}
                    </Grid>
                </Grid>
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={A1} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    sx={{ color: 'text.primary', display: 'inline' }}
                                >
                                    Ali Connors
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src={A2} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    sx={{ color: 'text.primary', display: 'inline' }}
                                >
                                    to Scott, Alex, Jennifer
                                </Typography>
                                {" — Wish I could come, but I'm out of town this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src={A3} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Oui Oui"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    sx={{ color: 'text.primary', display: 'inline' }}
                                >
                                    Sandra Adams
                                </Typography>
                                {' — Do you have Paris recommendations? Have you ever…'}
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </List>
            <br /><br />
            {/* ===================**************=============== */}
            <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {[0, 1, 2, 3].map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                        <ListItem
                            key={value}
                            secondaryAction={
                                <Checkbox
                                    edge="end"
                                    onChange={handleTogglel(value)}
                                    checkeds={checkeds.includes(value)}
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            }
                            disablePadding
                        >
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar
                                        alt={`Avatar n°${value + 1}`}
                                        src={`/static/images/avatar/${value + 1}.jpg`}
                                    />
                                </ListItemAvatar>
                                <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
            <br /><br />
            {/* ===================**************=============== */}
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                subheader={<ListSubheader>Settings</ListSubheader>}
            >
                <ListItem>
                    <ListItemIcon>
                        <WifiIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-wifi" primary="Wi-Fi" />
                    <Switch
                        edge="end"
                        onChange={handleToggle('wifi')}
                        checked={checked.includes('wifi')}
                        inputProps={{
                            'aria-labelledby': 'switch-list-label-wifi',
                        }}
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <BluetoothIcon />
                    </ListItemIcon>
                    <ListItemText id="switch-list-label-bluetooth" primary="Bluetooth" />
                    <Switch
                        edge="end"
                        onChange={handleToggle('bluetooth')}
                        checked={checked.includes('bluetooth')}
                        inputProps={{
                            'aria-labelledby': 'switch-list-label-bluetooth',
                        }}
                    />
                </ListItem>
            </List>
            <br /><br />
            {/* ===================**************=============== */}
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: 300,
                    '& ul': { padding: 0 },
                }}
                subheader={<li />}
            >
                {[0, 1, 2, 3, 4].map((sectionId) => (
                    <li key={`section-${sectionId}`}>
                        <ul>
                            <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                            {[0, 1, 2].map((item) => (
                                <ListItem key={`item-${sectionId}-${item}`}>
                                    <ListItemText primary={`Item ${item}`} />
                                </ListItem>
                            ))}
                        </ul>
                    </li>
                ))}
            </List>
            <br /><br />
            {/* ===================**************=============== */}
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                aria-label="contacts"
            >
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <StarIcon />
                        </ListItemIcon>
                        <ListItemText primary="Chelsea Otakan" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText inset primary="Eric Hoffman" />
                    </ListItemButton>
                </ListItem>
            </List>
            <br /><br />
            {/* ===================**************=============== */}

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {[1, 2, 3].map((value) => (
                    <ListItem
                        key={value}
                        disableGutters
                        secondaryAction={
                            <IconButton aria-label="comment">
                                <CommentIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText primary={`Line item ${value}`} />
                    </ListItem>
                ))}
            </List>
            <br /><br />
            {/* ===================**************=============== */}
            <Box
                sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
            >
                <FixedSizeList
                    height={400}
                    width={360}
                    itemSize={46}
                    itemCount={200}
                    overscanCount={5}
                >
                    {renderRow}
                </FixedSizeList>
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowssss.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br /><br />
            {/* ===================**************=============== */}
            <Paper sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={rowssss}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>
            <br /><br />
            {/* ===================**************=============== */}
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <br /><br />
            {/* ===================**************=============== */}
                {/* <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                                <StyledTableCell align="right">Calories</StyledTableCell>
                                <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                                <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                                <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rowsw.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                    <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                    <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                    <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> */}


        </>


    );
}

export default Transfers