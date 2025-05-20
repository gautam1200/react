// import { VolumeDown } from '@mui/icons-material';
import { alpha, Box, FilledInput, FormControl, FormControlLabel, FormGroup, FormHelperText, Grid, IconButton, InputAdornment, InputBase, InputLabel, MenuItem, OutlinedInput, Paper, Slider, Stack, Switch, TextField, Typography, useFormControl } from '@mui/material';
import React, { useState } from 'react'
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import styled from 'styled-components';
import MuiInput from '@mui/material/Input';
import { pink } from '@mui/material/colors';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import Divider from '@mui/material/Divider';


function Sliderss() {
    const [value, setValue] = useState(30);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    // ============****************===========
    function valuetext(value) {
        return `${value}°C`;
    }
    // ============****************===========
    const marks = [
        {
            value: 0, label: '0°C',
        },
        {
            value: 20, label: '20°C',
        },
        {
            value: 37, label: '37°C',
        },
        {
            value: 100, label: '100°C',
        },
    ];

    function valuetext(value) {
        return `${value}°C`;
    }



    // ============****************===========
    //     function valuetext(value) {
    //   return `${value}°C`;
    // }
    const [valuea, setValuea] = React.useState([20, 37]);

    const handleChangea = (event, newValue) => {
        setValuea(newValue);
    };
    // ============****************===========
    const minDistance = 10;

    const [value1, setValue1] = React.useState([20, 37]);

    const handleChange1 = (event, newValue, activeThumb) => {
        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };

    const [value2, setValue2] = React.useState([20, 37]);

    const handleChange2 = (event, newValue, activeThumb) => {
        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], 100 - minDistance);
                setValue2([clamped, clamped + minDistance]);
            } else {
                const clamped = Math.max(newValue[1], minDistance);
                setValue2([clamped - minDistance, clamped]);
            }
        } else {
            setValue2(newValue);
        }
    };
    // ============****************===========
    const Input = styled(MuiInput)`width: 42px;`;
    const [valueb, setValueb] = React.useState(30);

    const handleSliderChange = (event, newValue) => {
        setValueb(newValue);
    };

    const handleInputChange = (event) => {
        setValueb(event.target.value === '' ? 0 : Number(event.target.value));
    };

    const handleBlur = () => {
        if (valueb < 0) {
            setValueb(0);
        } else if (valueb > 100) {
            setValueb(100);
        }
    };
    // ============****************===========
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    // ============****************===========
    const currencies = [
        {
            value: 'USD', label: '$',
        },
        {
            value: 'EUR', label: '€',
        },
        {
            value: 'BTC', label: '฿',
        },
        {
            value: 'JPY', label: '¥',
        },
    ];

    // ============****************===========
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
    // ============****************===========
    const [name, setName] = React.useState('Cat in the Hat');
    // ============****************===========
    function MyFormHelperText() {
        const { focused } = useFormControl() || {};

        const helperText = React.useMemo(() => {
            if (focused) {
                return 'This field is being focused';
            }

            return 'Helper text';
        }, [focused]);

        return <FormHelperText>{helperText}</FormHelperText>;
    }
    // ============****************===========
    // ============****************===========
    return (
        <>
            <br /><br />
            <Typography variant="h2" component="h2">
                Select
            </Typography>
            {/* ===================****************=============== */}
            <br />
            <Box sx={{ width: 200 }}>
                <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
                    <VolumeDown />
                    <Slider aria-label="Volume" value={value} onChange={handleChange} />
                    <VolumeUp />
                </Stack>
                <Slider disabled defaultValue={30} aria-label="Disabled slider" />
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <Box sx={{ width: 300 }}>
                <Slider
                    size="small"
                    defaultValue={70}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                />
                <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <Box sx={{ width: 300 }}>
                <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    shiftStep={30}
                    step={10}
                    marks
                    min={10}
                    max={110}
                />
                <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <Box sx={{ width: 300 }}>
                <Slider
                    aria-label="Small steps"
                    defaultValue={0.00000005}
                    getAriaValueText={valuetext}
                    step={0.00000001}
                    marks
                    min={-0.00000005}
                    max={0.0000001}
                    valueLabelDisplay="auto"
                />
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <Box sx={{ width: 300 }}>
                <Slider
                    aria-label="Custom marks"
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    step={10}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <Box sx={{ width: 300 }}>
                <Slider
                    aria-label="Restricted values"
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    step={null}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <Box sx={{ width: 300 }}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={valuea}
                    onChange={handleChangea}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                />
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <Box sx={{ width: 300 }}>
                <Slider
                    getAriaLabel={() => 'Minimum distance'}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                />
                <Slider
                    getAriaLabel={() => 'Minimum distance shift'}
                    value={value2}
                    onChange={handleChange2}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    disableSwap
                />
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <Box sx={{ width: 250 }}>
                <Typography id="input-slider" gutterBottom>
                    Volume
                </Typography>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid>
                        <VolumeUp />
                    </Grid>
                    <Grid size="grow">
                        <Slider
                            valueb={typeof valueb === 'number' ? valueb : 0}
                            onChange={handleSliderChange}
                            aria-labelledby="input-slider"
                        />
                    </Grid>
                    <Grid>
                        <Input
                            value={valueb}
                            size="small"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                                step: 10,
                                min: 0,
                                max: 100,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <Box sx={{ width: 300 }}>
                <Slider
                    aria-label="Temperature"
                    defaultValue={30}
                    getAriaValueText={valuetext}
                    color="secondary"
                />
            </Box>


            <br /><br />
            <Typography variant="h2" component="h2">
                Switch
            </Typography>
            {/* ===================****************=============== */}
            <br />

            <div>
                <Switch {...label} defaultChecked />
                <Switch {...label} />
                <Switch {...label} disabled defaultChecked />
                <Switch {...label} disabled />
            </div>
            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Label" />
                <FormControlLabel required control={<Switch />} label="Required" />
                <FormControlLabel disabled control={<Switch />} label="Disabled" />
            </FormGroup>
            <div>
                <Switch {...label} defaultChecked size="small" />
                <Switch {...label} defaultChecked />
            </div>

            <br /><br />
            <Typography variant="h2" component="h2">
                Text Field
            </Typography>
            {/* ===================****************=============== */}
            <br />

            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" />
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                    />
                    <TextField
                        disabled
                        id="outlined-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                    />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />
                    <TextField
                        id="outlined-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                    />
                    <TextField
                        id="outlined-number"
                        label="Number"
                        type="number"
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                    />
                    <TextField id="outlined-search" label="Search field" type="search" />
                    <TextField
                        id="outlined-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="filled-required"
                        label="Required"
                        defaultValue="Hello World"
                        variant="filled"
                    />
                    <TextField
                        disabled
                        id="filled-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                        variant="filled"
                    />
                    <TextField
                        id="filled-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                    />
                    <TextField
                        id="filled-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        variant="filled"
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                    />
                    <TextField
                        id="filled-number"
                        label="Number"
                        type="number"
                        variant="filled"
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                    />
                    <TextField
                        id="filled-search"
                        label="Search field"
                        type="search"
                        variant="filled"
                    />
                    <TextField
                        id="filled-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                        variant="filled"
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="standard-required"
                        label="Required"
                        defaultValue="Hello World"
                        variant="standard"
                    />
                    <TextField
                        disabled
                        id="standard-disabled"
                        label="Disabled"
                        defaultValue="Hello World"
                        variant="standard"
                    />
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                    />
                    <TextField
                        id="standard-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        variant="standard"
                        slotProps={{
                            input: {
                                readOnly: true,
                            },
                        }}
                    />
                    <TextField
                        id="standard-number"
                        label="Number"
                        type="number"
                        variant="standard"
                        slotProps={{
                            inputLabel: {
                                shrink: true,
                            },
                        }}
                    />
                    <TextField
                        id="standard-search"
                        label="Search field"
                        type="search"
                        variant="standard"
                    />
                    <TextField
                        id="standard-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                        variant="standard"
                    />
                </div>
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        error
                        id="outlined-error"
                        label="Error"
                        defaultValue="Hello World"
                    />
                    <TextField
                        error
                        id="outlined-error-helper-text"
                        label="Error"
                        defaultValue="Hello World"
                        helperText="Incorrect entry."
                    />
                </div>
                <div>
                    <TextField
                        error
                        id="filled-error"
                        label="Error"
                        defaultValue="Hello World"
                        variant="filled"
                    />
                    <TextField
                        error
                        id="filled-error-helper-text"
                        label="Error"
                        defaultValue="Hello World"
                        helperText="Incorrect entry."
                        variant="filled"
                    />
                </div>
                <div>
                    <TextField
                        error
                        id="standard-error"
                        label="Error"
                        defaultValue="Hello World"
                        variant="standard"
                    />
                    <TextField
                        error
                        id="standard-error-helper-text"
                        label="Error"
                        defaultValue="Hello World"
                        helperText="Incorrect entry."
                        variant="standard"
                    />
                </div>
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Multiline Placeholder"
                        placeholder="Placeholder"
                        multiline
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                    />
                </div>
                <div>
                    <TextField
                        id="filled-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                        variant="filled"
                    />
                    <TextField
                        id="filled-textarea"
                        label="Multiline Placeholder"
                        placeholder="Placeholder"
                        multiline
                        variant="filled"
                    />
                    <TextField
                        id="filled-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="filled"
                    />
                </div>
                <div>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Multiline"
                        multiline
                        maxRows={4}
                        variant="standard"
                    />
                    <TextField
                        id="standard-textarea"
                        label="Multiline Placeholder"
                        placeholder="Placeholder"
                        multiline
                        variant="standard"
                    />
                    <TextField
                        id="standard-multiline-static"
                        label="Multiline"
                        multiline
                        rows={4}
                        defaultValue="Default Value"
                        variant="standard"
                    />
                </div>
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        defaultValue="EUR"
                        helperText="Please select your currency"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="outlined-select-currency-native"
                        select
                        label="Native select"
                        defaultValue="EUR"
                        slotProps={{
                            select: {
                                native: true,
                            },
                        }}
                        helperText="Please select your currency"
                    >
                        {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </div>
                <div>
                    <TextField
                        id="filled-select-currency"
                        select
                        label="Select"
                        defaultValue="EUR"
                        helperText="Please select your currency"
                        variant="filled"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="filled-select-currency-native"
                        select
                        label="Native select"
                        defaultValue="EUR"
                        slotProps={{
                            select: {
                                native: true,
                            },
                        }}
                        helperText="Please select your currency"
                        variant="filled"
                    >
                        {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </div>
                <div>
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Select"
                        defaultValue="EUR"
                        helperText="Please select your currency"
                        variant="standard"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="standard-select-currency-native"
                        select
                        label="Native select"
                        defaultValue="EUR"
                        slotProps={{
                            select: {
                                native: true,
                            },
                        }}
                        helperText="Please select your currency"
                        variant="standard"
                    >
                        {currencies.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </div>
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <div>
                    <TextField
                        label="With normal TextField"
                        id="outlined-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        slotProps={{
                            input: {
                                startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                            },
                        }}
                    />
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <OutlinedInput
                            id="outlined-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            aria-describedby="outlined-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                        <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={
                                            showPassword ? 'hide the password' : 'display the password'
                                        }
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Amount"
                        />
                    </FormControl>
                </div>
                <div>
                    <TextField
                        label="With normal TextField"
                        id="filled-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        slotProps={{
                            input: {
                                startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                            },
                        }}
                        variant="filled"
                    />
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                        <FilledInput
                            id="filled-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            aria-describedby="filled-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                        <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                        <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                        <FilledInput
                            id="filled-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={
                                            showPassword ? 'hide the password' : 'display the password'
                                        }
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                        <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
                        <FilledInput
                            id="filled-adornment-amount"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                </div>
                <div>
                    <TextField
                        label="With normal TextField"
                        id="standard-start-adornment"
                        sx={{ m: 1, width: '25ch' }}
                        slotProps={{
                            input: {
                                startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                            },
                        }}
                        variant="standard"
                    />
                    <FormControl variant="standard" sx={{ m: 1, mt: 3, width: '25ch' }}>
                        <Input
                            id="standard-adornment-weight"
                            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                            aria-describedby="standard-weight-helper-text"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                        <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={
                                            showPassword ? 'hide the password' : 'display the password'
                                        }
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                        <Input
                            id="standard-adornment-amount"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        />
                    </FormControl>
                </div>
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <Box
                component="form"
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        label="Size"
                        id="outlined-size-small"
                        defaultValue="Small"
                        size="small"
                    />
                    <TextField label="Size" id="outlined-size-normal" defaultValue="Normal" />
                </div>
                <div>
                    <TextField
                        label="Size"
                        id="filled-size-small"
                        defaultValue="Small"
                        variant="filled"
                        size="small"
                    />
                    <TextField
                        label="Size"
                        id="filled-size-normal"
                        defaultValue="Normal"
                        variant="filled"
                    />
                </div>
                <div>
                    <TextField
                        label="Size"
                        id="standard-size-small"
                        defaultValue="Small"
                        size="small"
                        variant="standard"
                    />
                    <TextField
                        label="Size"
                        id="standard-size-normal"
                        defaultValue="Normal"
                        variant="standard"
                    />
                </div>
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <Box sx={{ width: 500, maxWidth: '100%' }}>
                <TextField fullWidth label="fullWidth" id="fullWidth" />
            </Box>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-controlled"
                    label="Controlled"
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value);
                    }}
                />
                <TextField
                    id="outlined-uncontrolled"
                    label="Uncontrolled"
                    defaultValue="foo"
                />
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1 } }}
                noValidate
                autoComplete="off"
            >
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">Name</InputLabel>
                    <Input id="component-simple" defaultValue="Composed TextField" />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-helper">Name</InputLabel>
                    <Input
                        id="component-helper"
                        defaultValue="Composed TextField"
                        aria-describedby="component-helper-text"
                    />
                    <FormHelperText id="component-helper-text">
                        Some important helper text
                    </FormHelperText>
                </FormControl>
                <FormControl disabled variant="standard">
                    <InputLabel htmlFor="component-disabled">Name</InputLabel>
                    <Input id="component-disabled" defaultValue="Composed TextField" />
                    <FormHelperText>Disabled</FormHelperText>
                </FormControl>
                <FormControl error variant="standard">
                    <InputLabel htmlFor="component-error">Name</InputLabel>
                    <Input
                        id="component-error"
                        defaultValue="Composed TextField"
                        aria-describedby="component-error-text"
                    />
                    <FormHelperText id="component-error-text">Error</FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="component-outlined">Name</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        defaultValue="Composed TextField"
                        label="Name"
                    />
                </FormControl>
                <FormControl variant="filled">
                    <InputLabel htmlFor="component-filled">Name</InputLabel>
                    <FilledInput id="component-filled" defaultValue="Composed TextField" />
                </FormControl>
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
            >
                <TextField label="Outlined secondary" color="secondary" focused />
                <TextField label="Filled success" variant="filled" color="success" focused />
                <TextField
                    label="Standard warning"
                    variant="standard"
                    color="warning"
                    focused
                />
            </Box>
            <br /><br />
            {/* ===================**************=============== */}
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Google Maps"
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                    <DirectionsIcon />
                </IconButton>
            </Paper>
            <br /><br />
            {/* ===================**************=============== */}
            <form noValidate autoComplete="off">
                <FormControl sx={{ width: '25ch' }}>
                    <OutlinedInput placeholder="Please enter text" />
                    <MyFormHelperText />
                </FormControl>
            </form>
            <br /><br />
            {/* ===================**************=============== */}
            <br /><br />
            {/* ===================**************=============== */}
            <br /><br />
            {/* ===================**************=============== */}
            <br /><br />
            {/* ===================**************=============== */}
            <br /><br />
            {/* ===================**************=============== */}
            <br /><br />
            {/* ===================**************=============== */}
            <br /><br />
            {/* ===================**************=============== */}
            <br /><br />
            {/* ===================**************=============== */}
        </>
    )
}

export default Sliderss


