import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Alert, AlertTitle, AppBar, Avatar, Backdrop, Box, Card, CardContent, CardHeader, CardMedia, CircularProgress, circularProgressClasses, ClickAwayListener, Collapse, Container, CssBaseline, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Fab, Fade, FormControl, FormControlLabel, Grid, IconButton, InputLabel, LinearProgress, linearProgressClasses, List, ListItemButton, ListItemText, MenuItem, Paper, Radio, RadioGroup, Select, Skeleton, Slide, Snackbar, Stack, Switch, TextField, Toolbar, Zoom } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import A1 from './A1.jpeg'
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import TrapFocus from '@mui/material/Unstable_TrapFocus';
// import { useDialogs, DialogsProvider } from '@toolpad/core';
import { DialogsProvider, useDialogs } from '@toolpad/core/useDialogs';
import { green } from '@mui/material/colors';
import SaveIcon from '@mui/icons-material/Save';
import MoreVertIcon from '@mui/icons-material/MoreVert';





const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));

const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

function Tooltips() {

    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };
    // =============*****************===================
    const [opens, setOpens] = React.useState(false);

    const handleClose = () => {
        setOpens(false);
    };

    const handleOpen = () => {
        setOpens(true);
    };
    // =============*****************===================
    const CustomWidthTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))({
        [`& .${tooltipClasses.tooltip}`]: {
            maxWidth: 500,
        },
    });

    const NoMaxWidthTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))({
        [`& .${tooltipClasses.tooltip}`]: {
            maxWidth: 'none',
        },
    });

    const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`;
    // =============*****************===================
    const positionRef = React.useRef({
        x: 0,
        y: 0,
    });
    const popperRef = React.useRef(null);
    const areaRef = React.useRef(null);

    const handleMouseMove = (event) => {
        positionRef.current = { x: event.clientX, y: event.clientY };

        if (popperRef.current != null) {
            popperRef.current.update();
        }
    };
    // =============*****************===================
    const Div = styled('div')(({ theme }) => ({
        ...theme.typography.button,
        backgroundColor: (theme.vars || theme).palette.background.paper,
        padding: theme.spacing(1),
    }));
    // =============*****************===================
    const [opena, setOpena] = React.useState(true);
    // =============*****************===================
    const [openw, setOpenw] = React.useState(false);
    const handleClosew = () => {
        setOpenw(false);
    };
    const handleOpenw = () => {
        setOpenw(true);
    };
    // =============*****************===================
    const [openf, setOpenf] = React.useState(false);

    const handleClickOpen = () => {
        setOpenf(true);
    };

    const handleClosef = () => {
        setOpenf(false);
    };
    // =============*****************===================
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });


    const [openq, setOpenq] = React.useState(false);

    const handleClickOpenq = () => {
        setOpenq(true);
    };

    const handleCloseq = () => {
        setOpenq(false);
    };

    // =============*****************===================
    const [openj, setOpenj] = React.useState(false);

    const handleClickOpenj = () => {
        setOpenj(true);
    };

    const handleClosej = () => {
        setOpenj(false);
    };
    // =============*****************===================
    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
    }));

    const [openo, setOpeno] = React.useState(false);

    const handleClickOpeno = () => {
        setOpeno(true);
    };
    const handleCloseo = () => {
        setOpeno(false);
    };
    // =============*****************===================
    const Transitiont = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });
    const [opent, setOpent] = React.useState(false);

    const handleClickOpent = () => {
        setOpent(true);
    };

    const handleCloset = () => {
        setOpent(false);
    };
    // =============*****************===================
    const [openy, setOpeny] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const handleClickOpeny = () => {
        setOpeny(true);
    };

    const handleClosey = () => {
        setOpeny(false);
    };

    const handleMaxWidthChange = (event) => {
        setMaxWidth(
            // @ts-expect-error autofill of arbitrary value is not handled.
            event.target.value,
        );
    };

    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };
    // =============*****************===================
    const options = [
        'None', 'Atria', 'Callisto', 'Dione', 'Ganymede', 'Hangouts Call', 'Luna', 'Oberon', 'Phobos', 'Pyxis', 'Sedna', 'Titania', 'Triton', 'Umbriel',
    ];

    function ConfirmationDialogRaw(props) {
        const { onClose, value: valueProp, open, ...other } = props;
        const [value, setValue] = React.useState(valueProp);
        const radioGroupRef = React.useRef(null);

        React.useEffect(() => {
            if (!open) {
                setValue(valueProp);
            }
        }, [valueProp, open]);

        const handleEntering = () => {
            if (radioGroupRef.current != null) {
                radioGroupRef.current.focus();
            }
        };

        const handleCancel = () => {
            onClose();
        };

        const handleOk = () => {
            onClose(value);
        };

        const handleChange = (event) => {
            setValue(event.target.value);
        };

        return (
            <Dialog
                sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
                maxWidth="xs"
                TransitionProps={{ onEntering: handleEntering }}
                open={open}
                {...other}
            >
                <DialogTitle>Phone Ringtone</DialogTitle>
                <DialogContent dividers>
                    <RadioGroup
                        ref={radioGroupRef}
                        aria-label="ringtone"
                        name="ringtone"
                        value={value}
                        onChange={handleChange}
                    >
                        {options.map((option) => (
                            <FormControlLabel
                                value={option}
                                key={option}
                                control={<Radio />}
                                label={option}
                            />
                        ))}
                    </RadioGroup>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button onClick={handleOk}>Ok</Button>
                </DialogActions>
            </Dialog>
        );
    }

    ConfirmationDialogRaw.propTypes = {
        onClose: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
        value: PropTypes.string.isRequired,
    };

    const [openz, setOpenz] = React.useState(false);
    const [value, setValue] = React.useState('Dione');

    const handleClickListItem = () => {
        setOpenz(true);
    };

    const handleClosez = (newValue) => {
        setOpenz(false);

        if (newValue) {
            setValue(newValue);
        }
    };
    // =============*****************===================
    const [bannerOpen, setBannerOpen] = React.useState(true);

    const closeBanner = () => {
        setBannerOpen(false);
    };
    // =============*****************===================
    const [openp, setOpenp] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpenp = (scrollType) => () => {
        setOpenp(true);
        setScroll(scrollType);
    };

    const handleClosep = () => {
        setOpenp(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);
    // =============*****************===================
    function MyCustomDialog({ open, onClose, payload }) {
        return (
            <Dialog fullWidth open={open} onClose={() => onClose()}>
                <DialogTitle>Custom Error Handler</DialogTitle>
                <DialogContent>
                    <Alert severity="error">
                        {`An error occurred while deleting item "${payload.id}":`}
                        <pre>{payload.error}</pre>
                    </Alert>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => onClose()}>Close me</Button>
                </DialogActions>
            </Dialog>
        );
    }

    MyCustomDialog.propTypes = {
        /**
         * A function to call when the dialog should be closed. If the dialog has a return
         * value, it should be passed as an argument to this function. You should use the promise
         * that is returned to show a loading state while the dialog is performing async actions
         * on close.
         * @param result The result to return from the dialog.
         * @returns A promise that resolves when the dialog can be fully closed.
         */
        onClose: PropTypes.func.isRequired,
        /**
         * Whether the dialog is open.
         */
        open: PropTypes.bool.isRequired,
        /**
         * The payload that was passed when the dialog was opened.
         */
        payload: PropTypes.shape({
            error: PropTypes.string,
            id: PropTypes.string,
        }).isRequired,
    };

    const mockApiDelete = async (id) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!id) {
                    reject(new Error('ID is required'));
                } else if (parseInt(id, 10) % 2 === 0) {
                    console.log('id', parseInt(id, 10));
                    resolve(true);
                } else if (parseInt(id, 10) % 2 === 1) {
                    reject(new Error('Can not delete odd numbered elements'));
                } else if (Number.isNaN(parseInt(id, 10))) {
                    reject(new Error('ID must be a number'));
                } else {
                    reject(new Error('Unknown error'));
                }
            }, 1000);
        });
    };

    function DemoContent() {
        const dialogs = useDialogs();
        const [isDeleting, setIsDeleting] = React.useState(false);

        const handleDelete = async () => {
            const id = await dialogs.prompt('Enter the ID to delete', {
                okText: 'Delete',
                cancelText: 'Cancel',
            });

            if (id) {
                const deleteConfirmed = await dialogs.confirm(
                    `Are you sure you want to delete "${id}"?`,
                );
                if (deleteConfirmed) {
                    try {
                        setIsDeleting(true);
                        await mockApiDelete(id);
                        dialogs.alert('Deleted!');
                    } catch (error) {
                        const message = error instanceof Error ? error.message : 'Unknown error';
                        await dialogs.open(MyCustomDialog, { id, error: message });
                    } finally {
                        setIsDeleting(false);
                    }
                }
            }
        };
        return (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', gap: 16 }}>
                    <Button variant="contained" loading={isDeleting} onClick={handleDelete}>
                        Delete
                    </Button>
                </div>
            </div>
        );
    }

    // =============*****************===================
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        return () => {
            clearInterval(timer);
        };
    }, []);

    // =============*****************===================
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const timer = React.useRef(undefined);

    const buttonSx = {
        ...(success && {
            bgcolor: green[500],
            '&:hover': {
                bgcolor: green[700],
            },
        }),
    };

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleButtonClick = () => {
        if (!loading) {
            setSuccess(false);
            setLoading(true);
            timer.current = setTimeout(() => {
                setSuccess(true);
                setLoading(false);
            }, 2000);
        }
    };
    // =============*****************===================
    function CircularProgressWithLabel(props) {
        return (
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <CircularProgress variant="determinate" {...props} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        variant="caption"
                        component="div"
                        sx={{ color: 'text.secondary' }}
                    >
                        {`${Math.round(props.value)}%`}
                    </Typography>
                </Box>
            </Box>
        );
    }

    CircularProgressWithLabel.propTypes = {
        /**
         * The value of the progress indicator for the determinate variant.
         * Value between 0 and 100.
         * @default 0
         */
        value: PropTypes.number.isRequired,
    };


    const [progresss, setProgresss] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgresss((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);
    // =============*****************===================
    const [progressq, setProgressq] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgressq((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);
    // =============*****************===================
    const [progressa, setProgressa] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);

    const progressRef = React.useRef(() => { });
    React.useEffect(() => {
        progressRef.current = () => {
            if (progress === 100) {
                setProgressa(0);
                setBuffer(10);
            } else {
                setProgressa(progress + 1);
                if (buffer < 100 && progress % 5 === 0) {
                    const newBuffer = buffer + 1 + Math.random() * 10;
                    setBuffer(newBuffer > 100 ? 100 : newBuffer);
                }
            }
        };
    });

    React.useEffect(() => {
        const timer = setInterval(() => {
            progressRef.current();
        }, 100);

        return () => {
            clearInterval(timer);
        };
    }, []);
    // =============*****************===================
    function LinearProgressWithLabel(props) {
        return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" {...props} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {`${Math.round(props.value)}%`}
                    </Typography>
                </Box>
            </Box>
        );
    }

    LinearProgressWithLabel.propTypes = {
        /**
         * The value of the progress indicator for the determinate and buffer variants.
         * Value between 0 and 100.
         */
        value: PropTypes.number.isRequired,
    };

    const [progressp, setProgressp] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgressp((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);
    // =============*****************===================
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

    // Inspired by the former Facebook spinners.
    function FacebookCircularProgress(props) {
        return (
            <Box sx={{ position: 'relative' }}>
                <CircularProgress
                    variant="determinate"
                    sx={(theme) => ({
                        color: theme.palette.grey[200],
                        ...theme.applyStyles('dark', {
                            color: theme.palette.grey[800],
                        }),
                    })}
                    size={40}
                    thickness={4}
                    {...props}
                    value={100}
                />
                <CircularProgress
                    variant="indeterminate"
                    disableShrink
                    sx={(theme) => ({
                        color: '#1a90ff',
                        animationDuration: '550ms',
                        position: 'absolute',
                        left: 0,
                        [`& .${circularProgressClasses.circle}`]: {
                            strokeLinecap: 'round',
                        },
                        ...theme.applyStyles('dark', {
                            color: '#308fe8',
                        }),
                    })}
                    size={40}
                    thickness={4}
                    {...props}
                />
            </Box>
        );
    }

    // From https://github.com/mui/material-ui/issues/9496#issuecomment-959408221

    function GradientCircularProgress() {
        return (
            <React.Fragment>
                <svg width={0} height={0}>
                    <defs>
                        <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#e01cd5" />
                            <stop offset="100%" stopColor="#1CB5E0" />
                        </linearGradient>
                    </defs>
                </svg>
                <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
            </React.Fragment>
        );
    }
    // =============*****************===================
    const [loadingj, setLoadingj] = React.useState(false);
    const [query, setQuery] = React.useState('idle');
    const timerRef = React.useRef(undefined);

    React.useEffect(
        () => () => {
            clearTimeout(timerRef.current);
        },
        [],
    );

    const handleClickLoading = () => {
        setLoadingj((prevLoading) => !prevLoading);
    };

    const handleClickQuery = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }

        if (query !== 'idle') {
            setQuery('idle');
            return;
        }

        setQuery('progress');
        timerRef.current = setTimeout(() => {
            setQuery('success');
        }, 2000);
    };
    // =============*****************===================
    const data = [
        {
            src: A1,
            title: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
            channel: 'Don Diablo',
            views: '396k views',
            createdAt: 'a week ago',
        },
        {
            src: A1,
            title: 'Queen - Greatest Hits',
            channel: 'Queen Official',
            views: '40M views',
            createdAt: '3 years ago',
        },
        {
            src: A1,
            title: 'Calvin Harris, Sam Smith - Promises (Official Video)',
            channel: 'Calvin Harris',
            views: '130M views',
            createdAt: '10 months ago',
        },
    ];

    function Media(props) {
        const { loading = false } = props;

        return (
            <Grid container wrap="nowrap">
                {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
                    <Box key={index} sx={{ width: 210, marginRight: 0.5, my: 5 }}>
                        {item ? (
                            <img
                                style={{ width: 210, height: 118 }}
                                alt={item.title}
                                src={item.src}
                            />
                        ) : (
                            <Skeleton variant="rectangular" width={210} height={118} />
                        )}
                        {item ? (
                            <Box sx={{ pr: 2 }}>
                                <Typography gutterBottom variant="body2">
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{ display: 'block', color: 'text.secondary' }}
                                >
                                    {item.channel}
                                </Typography>
                                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                                    {`${item.views} • ${item.createdAt}`}
                                </Typography>
                            </Box>
                        ) : (
                            <Box sx={{ pt: 0.5 }}>
                                <Skeleton />
                                <Skeleton width="60%" />
                            </Box>
                        )}
                    </Box>
                ))}
            </Grid>
        );
    }

    Media.propTypes = {
        loading: PropTypes.bool,
    };
    // =============*****************===================
    function Media(props) {
        const { loading = false } = props;

        return (
            <Card sx={{ maxWidth: 345, m: 2 }}>
                <CardHeader
                    avatar={
                        loading ? (
                            <Skeleton animation="wave" variant="circular" width={40} height={40} />
                        ) : (
                            <Avatar
                                alt="Ted talk"
                                src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
                            />
                        )
                    }
                    action={
                        loading ? null : (
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        )
                    }
                    title={
                        loading ? (
                            <Skeleton
                                animation="wave"
                                height={10}
                                width="80%"
                                style={{ marginBottom: 6 }}
                            />
                        ) : (
                            'Ted'
                        )
                    }
                    subheader={
                        loading ? (
                            <Skeleton animation="wave" height={10} width="40%" />
                        ) : (
                            '5 hours ago'
                        )
                    }
                />
                {loading ? (
                    <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
                ) : (
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
                        alt="Nicola Sturgeon on a TED talk stage"
                    />
                )}
                <CardContent>
                    {loading ? (
                        <React.Fragment>
                            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                            <Skeleton animation="wave" height={10} width="80%" />
                        </React.Fragment>
                    ) : (
                        <Typography variant="body2" component="p" sx={{ color: 'text.secondary' }}>
                            {
                                "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
                            }
                        </Typography>
                    )}
                </CardContent>
            </Card>
        );
    }

    Media.propTypes = {
        loading: PropTypes.bool,
    };

    // =============*****************===================
    const variants = ['h1', 'h3', 'body1', 'caption'];

    function TypographyDemo(props) {
        const { loading = false } = props;

        return (
            <div>
                {variants.map((variant) => (
                    <Typography component="div" key={variant} variant={variant}>
                        {loading ? <Skeleton /> : variant}
                    </Typography>
                ))}
            </div>
        );
    }

    TypographyDemo.propTypes = {
        loading: PropTypes.bool,
    };
    // =============*****************===================
    const Image = styled('img')({
        width: '100%',
    });

    function SkeletonChildrenDemo(props) {
        const { loading = false } = props;

        return (
            <div>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ margin: 1 }}>
                        {loading ? (
                            <Skeleton variant="circular">
                                <Avatar />
                            </Skeleton>
                        ) : (
                            <Avatar src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg" />
                        )}
                    </Box>
                    <Box sx={{ width: '100%' }}>
                        {loading ? (
                            <Skeleton width="100%">
                                <Typography>.</Typography>
                            </Skeleton>
                        ) : (
                            <Typography>Ted</Typography>
                        )}
                    </Box>
                </Box>
                {loading ? (
                    <Skeleton variant="rectangular" width="100%">
                        <div style={{ paddingTop: '57%' }} />
                    </Skeleton>
                ) : (
                    <Image
                        src="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
                        alt=""
                    />
                )}
            </div>
        );
    }

    SkeletonChildrenDemo.propTypes = {
        loading: PropTypes.bool,
    };

    // =============*****************===================
    const [openaa, setOpenaa] = React.useState(false);

    const handleClick = () => {
        setOpenaa(true);
    };

    const handleCloseaa = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenaa(false);
    };

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    // =============*****************===================
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, openss } = state;

    const handleClickss = (newState) => () => {
        setState({ ...newState, open: true });
    };

    const handleClosess = () => {
        setState({ ...state, open: false });
    };

    const buttons = (
        <React.Fragment>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={handleClickss({ vertical: 'top', horizontal: 'center' })}>
                    Top-Center
                </Button>
            </Box>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid size={6}>
                    <Button onClick={handleClickss({ vertical: 'top', horizontal: 'left' })}>
                        Top-Left
                    </Button>
                </Grid>
                <Grid sx={{ textAlign: 'right' }} size={6}>
                    <Button onClick={handleClickss({ vertical: 'top', horizontal: 'right' })}>
                        Top-Right
                    </Button>
                </Grid>
                <Grid size={6}>
                    <Button onClick={handleClickss({ vertical: 'bottom', horizontal: 'left' })}>
                        Bottom-Left
                    </Button>
                </Grid>
                <Grid sx={{ textAlign: 'right' }} size={6}>
                    <Button onClick={handleClickss({ vertical: 'bottom', horizontal: 'right' })}>
                        Bottom-Right
                    </Button>
                </Grid>
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button onClick={handleClickss({ vertical: 'bottom', horizontal: 'center' })}>
                    Bottom-Center
                </Button>
            </Box>
        </React.Fragment>
    );
    // =============*****************===================
    // =============*****************===================
    // =============*****************===================
    // =============*****************===================
    // =============*****************===================


    return (
        <>
            <br /><br />
            <Typography variant="h2" component="h2">
                Tooltip
            </Typography>
            {/* ===================****************=============== */}
            <br />
            <Tooltip title="Delete">
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
            <br /><br />
            {/* ========================********************================== */}
            {/* <Box sx={{ width: 500 }}>
                <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid>
                        <Tooltip title="Add" placement="top-start">
                            <Button>top-start</Button>
                        </Tooltip>
                        <Tooltip title="Add" placement="top">
                            <Button>top</Button>
                        </Tooltip>
                        <Tooltip title="Add" placement="top-end">
                            <Button>top-end</Button>
                        </Tooltip>
                    </Grid>
                </Grid>
                <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid size={6}>
                        <Tooltip title="Add" placement="left-start">
                            <Button>left-start</Button>
                        </Tooltip>
                        <br />
                        <Tooltip title="Add" placement="left">
                            <Button>left</Button>
                        </Tooltip>
                        <br />
                        <Tooltip title="Add" placement="left-end">
                            <Button>left-end</Button>
                        </Tooltip>
                    </Grid>
                    <Grid container direction="column" sx={{ alignItems: 'flex-end' }} size={6}>
                        <Grid>
                            <Tooltip title="Add" placement="right-start">
                                <Button>right-start</Button>
                            </Tooltip>
                        </Grid>
                        <Grid>
                            <Tooltip title="Add" placement="right">
                                <Button>right</Button>
                            </Tooltip>
                        </Grid>
                        <Grid>
                            <Tooltip title="Add" placement="right-end">
                                <Button>right-end</Button>
                            </Tooltip>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid>
                        <Tooltip title="Add" placement="bottom-start">
                            <Button>bottom-start</Button>
                        </Tooltip>
                        <Tooltip title="Add" placement="bottom">
                            <Button>bottom</Button>
                        </Tooltip>
                        <Tooltip title="Add" placement="bottom-end">
                            <Button>bottom-end</Button>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Box> */}
            <br /><br />
            {/* ========================********************================== */}
            {/* <div>
                <LightTooltip title="Add">
                    <Button>Light</Button>
                </LightTooltip>
                <BootstrapTooltip title="Add">
                    <Button>Bootstrap</Button>
                </BootstrapTooltip>
                <HtmlTooltip
                    title={
                        <React.Fragment>
                            <Typography color="inherit">Tooltip with HTML</Typography>
                            <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
                            {"It's very engaging. Right?"}
                        </React.Fragment>
                    }
                >
                    <Button>HTML</Button>
                </HtmlTooltip>
            </div> */}
            <br /><br />
            {/* ========================********************================== */}
            {/* <Tooltip title="Add" arrow>
                <Button>Arrow</Button>
            </Tooltip> */}
            <br /><br />
            {/* ========================********************================== */}
            {/* <Tooltip
                title="Add"
                slotProps={{
                    popper: {
                        modifiers: [
                            {
                                name: 'offset',
                                options: {
                                    offset: [0, -14],
                                },
                            },
                        ],
                    },
                }}
            >
                <Button>Offset</Button>
            </Tooltip> */}
            <br /><br />
            {/* ========================********************================== */}
            {/* <Tooltip
                title="Add"
                slotProps={{
                    popper: {
                        sx: {
                            [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                            {
                                marginTop: '0px',
                            },
                            [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
                            {
                                marginBottom: '0px',
                            },
                            [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
                            {
                                marginLeft: '0px',
                            },
                            [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
                            {
                                marginRight: '0px',
                            },
                        },
                    },
                }}
            >
                <Button>Margin</Button>
            </Tooltip> */}
            <br /><br />
            {/* ========================********************================== */}
            {/* <div>
                <Grid container sx={{ justifyContent: 'center' }}>
                    <Grid>
                        <Tooltip disableFocusListener title="Add">
                            <Button>Hover or touch</Button>
                        </Tooltip>
                    </Grid>
                    <Grid>
                        <Tooltip disableHoverListener title="Add">
                            <Button>Focus or touch</Button>
                        </Tooltip>
                    </Grid>
                    <Grid>
                        <Tooltip disableFocusListener disableTouchListener title="Add">
                            <Button>Hover</Button>
                        </Tooltip>
                    </Grid>
                    <Grid>
                        <ClickAwayListener onClickAway={handleTooltipClose}>
                            <div>
                                <Tooltip
                                    onClose={handleTooltipClose}
                                    open={open}
                                    disableFocusListener
                                    disableHoverListener
                                    disableTouchListener
                                    title="Add"
                                    slotProps={{
                                        popper: {
                                            disablePortal: true,
                                        },
                                    }}
                                >
                                    <Button onClick={handleTooltipOpen}>Click</Button>
                                </Tooltip>
                            </div>
                        </ClickAwayListener>
                    </Grid>
                </Grid>
            </div> */}
            <br /><br />
            {/* ========================********************================== */}
            {/* <Tooltip open={opens} onClose={handleClose} onOpen={handleOpen} title="Add">
                <Button>Controlled</Button>
            </Tooltip> */}
            <br /><br />
            {/* ========================********************================== */}
            <div>
                <Tooltip title={longText}>
                    <Button sx={{ m: 1 }}>Default Width [300px]</Button>
                </Tooltip>
                <CustomWidthTooltip title={longText}>
                    <Button sx={{ m: 1 }}>Custom Width [500px]</Button>
                </CustomWidthTooltip>
                <br /><br />
                <NoMaxWidthTooltip title={longText}>
                    <Button sx={{ m: 1 }}>No wrapping</Button>
                </NoMaxWidthTooltip>
            </div>
            <br /><br />
            {/* ========================********************================== */}
            {/* <Tooltip title="Add" disableInteractive>
                <Button>Not interactive</Button>
            </Tooltip>
            <Tooltip title="You don't have permission to do this">
                <span>
                    <Button disabled>A Disabled Button</Button>
                </span>
            </Tooltip> */}
            <br /><br />
            {/* ========================********************================== */}
            {/* <div>
                <Tooltip title="Add">
                    <Button>Grow</Button>
                </Tooltip>
                <Tooltip
                    title="Add"
                    slots={{
                        transition: Fade,
                    }}
                    slotProps={{
                        transition: { timeout: 600 },
                    }}
                >
                    <Button>Fade</Button>
                </Tooltip>
                <Tooltip
                    title="Add"
                    slots={{
                        transition: Zoom,
                    }}
                >
                    <Button>Zoom</Button>
                </Tooltip>
            </div> */}
            <br /><br />
            {/* ========================********************================== */}
            <Tooltip
                title={<img src={A1} alt="Tooltip" style={{ maxWidth: 200 }} />}
                followCursor
            >
                <Box sx={{ bgcolor: 'text.disabled', color: 'background.paper', p: 2 }}>
                    Disabled Action
                </Box>
            </Tooltip>
            <br /><br />
            {/* ========================********************================== */}
            <Tooltip
                title="Add"
                placement="top"
                arrow
                slotProps={{
                    popper: {
                        popperRef,
                        anchorEl: {
                            getBoundingClientRect: () => {
                                return new DOMRect(
                                    positionRef.current.x,
                                    areaRef.current.getBoundingClientRect().y,
                                    0,
                                    0,
                                );
                            },
                        },
                    },
                }}
            >
                <Box
                    ref={areaRef}
                    onMouseMove={handleMouseMove}
                    sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', p: 2 }}
                >
                    Hover
                </Box>
            </Tooltip>
            <br /><br />
            {/* ========================********************================== */}
            <Tooltip title="Add" enterDelay={500} leaveDelay={200}>
                <Button>[500ms, 200ms]</Button>
            </Tooltip>

            <br /><br />
            <Typography variant="h2" component="h2">
                Typography
            </Typography>
            {/* ===================****************=============== */}
            <br />


            <Box sx={{ width: '100%', maxWidth: 500 }}>
                <Typography variant="h1" gutterBottom>
                    h1. Heading
                </Typography>
                <Typography variant="h2" gutterBottom>
                    h2. Heading
                </Typography>
                <Typography variant="h3" gutterBottom>
                    h3. Heading
                </Typography>
                <Typography variant="h4" gutterBottom>
                    h4. Heading
                </Typography>
                <Typography variant="h5" gutterBottom>
                    h5. Heading
                </Typography>
                <Typography variant="h6" gutterBottom>
                    h6. Heading
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur
                </Typography>
                <Typography variant="body1" gutterBottom>
                    body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="body2" gutterBottom>
                    body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                    blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                    neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                    quasi quidem quibusdam.
                </Typography>
                <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                    button text
                </Typography>
                <Typography variant="caption" gutterBottom sx={{ display: 'block' }}>
                    caption text
                </Typography>
                <Typography variant="overline" gutterBottom sx={{ display: 'block' }}>
                    overline text
                </Typography>
            </Box>
            <Div>{"This div's text looks like that of a button."}</Div>


            <br /><br />
            <Typography variant="h2" component="h2">
                Alert
            </Typography>
            {/* ===================****************=============== */}
            <br />


            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                Here is a gentle confirmation that your action was successful.
            </Alert>
            <br /><br />
            {/* ========================********************================== */}
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="success">This is a success Alert.</Alert>
                <Alert severity="info">This is an info Alert.</Alert>
                <Alert severity="warning">This is a warning Alert.</Alert>
                <Alert severity="error">This is an error Alert.</Alert>
            </Stack>


            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert variant="filled" severity="success">
                    This is a filled success Alert.
                </Alert>
                <Alert variant="filled" severity="info">
                    This is a filled info Alert.
                </Alert>
                <Alert variant="filled" severity="warning">
                    This is a filled warning Alert.
                </Alert>
                <Alert variant="filled" severity="error">
                    This is a filled error Alert.
                </Alert>
            </Stack>


            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert variant="outlined" severity="success">
                    This is an outlined success Alert.
                </Alert>
                <Alert variant="outlined" severity="info">
                    This is an outlined info Alert.
                </Alert>
                <Alert variant="outlined" severity="warning">
                    This is an outlined warning Alert.
                </Alert>
                <Alert variant="outlined" severity="error">
                    This is an outlined error Alert.
                </Alert>
            </Stack>

            <Alert severity="success" color="warning">
                This is a success Alert with warning colors.
            </Alert>


            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="warning" onClose={() => { }}>
                    This Alert displays the default close icon.
                </Alert>
                <Alert
                    severity="success"
                    action={
                        <Button color="inherit" size="small">
                            UNDO
                        </Button>
                    }
                >
                    This Alert uses a Button component for its action.
                </Alert>
            </Stack>

            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                    This success Alert has a custom icon.
                </Alert>
                <Alert icon={false} severity="success">
                    This success Alert has no icon.
                </Alert>
                <Alert
                    iconMapping={{
                        success: <CheckCircleOutlineIcon fontSize="inherit" />,
                    }}
                >
                    This success Alert uses `iconMapping` to override the default icon.
                </Alert>
            </Stack>

            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    This is a success Alert with an encouraging title.
                </Alert>
                <Alert severity="info">
                    <AlertTitle>Info</AlertTitle>
                    This is an info Alert with an informative title.
                </Alert>
                <Alert severity="warning">
                    <AlertTitle>Warning</AlertTitle>
                    This is a warning Alert with a cautious title.
                </Alert>
                <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>
                    This is an error Alert with a scary title.
                </Alert>
            </Stack>


            <Box sx={{ width: '100%' }}>
                <Collapse in={opena}>
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                    setOpena(false);
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        Click the close icon to see the Collapse transition in action!
                    </Alert>
                </Collapse>
                <Button
                    disabled={opena}
                    variant="outlined"
                    onClick={() => {
                        setOpena(true);
                    }}
                >
                    Re-open
                </Button>
            </Box>


            <br /><br />
            <Typography variant="h2" component="h2">
                Backdrop
            </Typography>
            {/* ===================****************=============== */}
            <br />

            <div>
                <Button onClick={handleOpenw}>Show backdrop</Button>
                <Backdrop
                    sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                    open={openw}
                    onClick={handleClosew}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </div>

            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpen}>
                    Open alert dialog
                </Button>
                <Dialog
                    open={openf}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClosef}>Disagree</Button>
                        <Button onClick={handleClosef} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
            <br /><br />
            {/* ========================********************================== */}
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpenq}>
                    Slide in alert dialog
                </Button>
                <Dialog
                    open={openq}
                    slots={{
                        transition: Transition,
                    }}
                    keepMounted
                    onClose={handleCloseq}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseq}>Disagree</Button>
                        <Button onClick={handleCloseq}>Agree</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
            <br /><br />
            {/* ========================********************================== */}
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpenj}>
                    Open form dialog
                </Button>
                <Dialog
                    open={openj}
                    onClose={handleClosej}
                    slotProps={{
                        paper: {
                            component: 'form',
                            onSubmit: (event) => {
                                event.preventDefault();
                                const formData = new FormData(event.currentTarget);
                                const formJson = Object.fromEntries(formData.entries());
                                const email = formJson.email;
                                console.log(email);
                                handleClosej();
                            },
                        },
                    }}
                >
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We
                            will send updates occasionally.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClosej}>Cancel</Button>
                        <Button type="submit">Subscribe</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
            <br /><br />
            {/* ========================********************================== */}
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpeno}>
                    Open dialog
                </Button>
                <BootstrapDialog
                    onClose={handleCloseo}
                    aria-labelledby="customized-dialog-title"
                    open={openo}
                >
                    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                        Modal title
                    </DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={handleCloseo}
                        sx={(theme) => ({
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: theme.palette.grey[500],
                        })}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                            consectetur ac, vestibulum at eros.
                        </Typography>
                        <Typography gutterBottom>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                        </Typography>
                        <Typography gutterBottom>
                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                            magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleCloseo}>
                            Save changes
                        </Button>
                    </DialogActions>
                </BootstrapDialog>
            </React.Fragment>
            <br /><br />
            {/* ========================********************================== */}
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpent}>
                    Open full-screen dialog
                </Button>
                <Dialog
                    fullScreen
                    open={opent}
                    onClose={handleCloset}
                    TransitionComponent={Transitiont}
                >
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleCloset}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Sound
                            </Typography>
                            <Button autoFocus color="inherit" onClick={handleCloset}>
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <List>
                        <ListItemButton>
                            <ListItemText primary="Phone ringtone" secondary="Titania" />
                        </ListItemButton>
                        <Divider />
                        <ListItemButton>
                            <ListItemText
                                primary="Default notification ringtone"
                                secondary="Tethys"
                            />
                        </ListItemButton>
                    </List>
                </Dialog>
            </React.Fragment>
            <br /><br />
            {/* ========================********************================== */}
            <React.Fragment>
                <Button variant="outlined" onClick={handleClickOpeny}>
                    Open max-width dialog
                </Button>
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={openy}
                    onClose={handleClosey}
                >
                    <DialogTitle>Optional sizes</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            You can set my maximum width and whether to adapt or not.
                        </DialogContentText>
                        <Box
                            noValidate
                            component="form"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                m: 'auto',
                                width: 'fit-content',
                            }}
                        >
                            <FormControl sx={{ mt: 2, minWidth: 120 }}>
                                <InputLabel htmlFor="max-width">maxWidth</InputLabel>
                                <Select
                                    autoFocus
                                    value={maxWidth}
                                    onChange={handleMaxWidthChange}
                                    label="maxWidth"
                                    inputProps={{
                                        name: 'max-width',
                                        id: 'max-width',
                                    }}
                                >
                                    <MenuItem value={false}>false</MenuItem>
                                    <MenuItem value="xs">xs</MenuItem>
                                    <MenuItem value="sm">sm</MenuItem>
                                    <MenuItem value="md">md</MenuItem>
                                    <MenuItem value="lg">lg</MenuItem>
                                    <MenuItem value="xl">xl</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControlLabel
                                sx={{ mt: 1 }}
                                control={
                                    <Switch checked={fullWidth} onChange={handleFullWidthChange} />
                                }
                                label="Full width"
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClosey}>Close</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <List component="div" role="group">
                    <ListItemButton divider disabled>
                        <ListItemText primary="Interruptions" />
                    </ListItemButton>
                    <ListItemButton
                        divider
                        aria-haspopup="true"
                        aria-controls="ringtone-menu"
                        aria-label="phone ringtone"
                        onClick={handleClickListItem}
                    >
                        <ListItemText primary="Phone ringtone" secondary={value} />
                    </ListItemButton>
                    <ListItemButton divider disabled>
                        <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                    </ListItemButton>
                    <ConfirmationDialogRaw
                        id="ringtone-menu"
                        keepMounted
                        open={openz}
                        onClose={handleClosez}
                        value={value}
                    />
                </List>
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <React.Fragment>
                <CssBaseline />
                <AppBar position="fixed" component="nav">
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Container component="main" sx={{ pt: 3 }}>
                    <Toolbar />
                    <Typography sx={{ marginBottom: 2 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet.
                    </Typography>
                    <Typography sx={{ marginBottom: 2 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet.
                    </Typography>
                </Container>
                <TrapFocus open disableAutoFocus disableEnforceFocus>
                    <Fade appear={false} in={bannerOpen}>
                        <Paper
                            role="dialog"
                            aria-modal="false"
                            aria-label="Cookie banner"
                            square
                            variant="outlined"
                            tabIndex={-1}
                            sx={{
                                position: 'fixed',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                m: 0,
                                p: 2,
                                borderWidth: 0,
                                borderTopWidth: 1,
                            }}
                        >
                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                sx={{ justifyContent: 'space-between', gap: 2 }}
                            >
                                <Box
                                    sx={{ flexShrink: 1, alignSelf: { xs: 'flex-start', sm: 'center' } }}
                                >
                                    <Typography sx={{ fontWeight: 'bold' }}>
                                        This website uses cookies
                                    </Typography>
                                    <Typography variant="body2">
                                        example.com relies on cookies to improve your experience.
                                    </Typography>
                                </Box>
                                <Stack
                                    direction={{
                                        xs: 'row-reverse',
                                        sm: 'row',
                                    }}
                                    sx={{
                                        gap: 2,
                                        flexShrink: 0,
                                        alignSelf: { xs: 'flex-end', sm: 'center' },
                                    }}
                                >
                                    <Button size="small" onClick={closeBanner} variant="contained">
                                        Allow all
                                    </Button>
                                    <Button size="small" onClick={closeBanner}>
                                        Reject all
                                    </Button>
                                </Stack>
                            </Stack>
                        </Paper>
                    </Fade>
                </TrapFocus>
            </React.Fragment>
            <br /><br />
            {/* ========================********************================== */}
            <React.Fragment>
                <Button onClick={handleClickOpenp('paper')}>scroll=paper</Button>
                <Button onClick={handleClickOpenp('body')}>scroll=body</Button>
                <Dialog
                    open={openp}
                    onClose={handleClosep}
                    scroll={scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                    <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            {[...new Array(50)]
                                .map(
                                    () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                                )
                                .join('\n')}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClosep}>Cancel</Button>
                        <Button onClick={handleClosep}>Subscribe</Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
            <br /><br />
            {/* ========================********************================== */}
            <DialogsProvider>
                <DemoContent />
            </DialogsProvider>


            <br /><br />
            <Typography variant="h2" component="h2">
                Progress
            </Typography>
            {/* ===================****************=============== */}
            <br />


            <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>

            <br />
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                <CircularProgress color="secondary" />
                <CircularProgress color="success" />
                <CircularProgress color="inherit" />
            </Stack>

            <Stack spacing={2} direction="row" alignItems="center">
                <CircularProgress size="30px" />
                <CircularProgress size={40} />
                <CircularProgress size="3rem" />
            </Stack>

            <Stack spacing={2} direction="row">
                <CircularProgress variant="determinate" value={25} />
                <CircularProgress variant="determinate" value={50} />
                <CircularProgress variant="determinate" value={75} />
                <CircularProgress variant="determinate" value={100} />
                <CircularProgress variant="determinate" value={progress} />
            </Stack>


            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ m: 1, position: 'relative' }}>
                    <Fab
                        aria-label="save"
                        color="primary"
                        sx={buttonSx}
                        onClick={handleButtonClick}
                    >
                        {success ? <CheckIcon /> : <SaveIcon />}
                    </Fab>
                    {loading && (
                        <CircularProgress
                            size={68}
                            sx={{
                                color: green[500],
                                position: 'absolute',
                                top: -6,
                                left: -6,
                                zIndex: 1,
                            }}
                        />
                    )}
                </Box>
                <Box sx={{ m: 1, position: 'relative' }}>
                    <Button
                        variant="contained"
                        sx={buttonSx}
                        disabled={loading}
                        onClick={handleButtonClick}
                    >
                        Accept terms
                    </Button>
                    {loading && (
                        <CircularProgress
                            size={24}
                            sx={{
                                color: green[500],
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px',
                                marginLeft: '-12px',
                            }}
                        />
                    )}
                </Box>
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <CircularProgressWithLabel value={progresss} />
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
            <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                <LinearProgress color="secondary" />
                <LinearProgress color="success" />
                <LinearProgress color="inherit" />
            </Stack>
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ width: '100%' }}>
                <LinearProgress variant="determinate" value={progressq} />
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ width: '100%' }}>
                <LinearProgress variant="buffer" value={progressa} valueBuffer={buffer} />
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ width: '100%' }}>
                <LinearProgressWithLabel value={progressp} />
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
                <FacebookCircularProgress />
                <GradientCircularProgress />
                <br />
                <BorderLinearProgress variant="determinate" value={50} />
            </Stack>
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ height: 40 }}>
                    <Fade
                        in={loadingj}
                        style={{
                            transitionDelay: loadingj ? '800ms' : '0ms',
                        }}
                        unmountOnExit
                    >
                        <CircularProgress />
                    </Fade>
                </Box>
                <Button onClick={handleClickLoading} sx={{ m: 2 }}>
                    {loadingj ? 'Stop loading' : 'Loading'}
                </Button>
                <Box sx={{ height: 40 }}>
                    {query === 'success' ? (
                        <Typography>Success!</Typography>
                    ) : (
                        <Fade
                            in={query === 'progress'}
                            style={{
                                transitionDelay: query === 'progress' ? '800ms' : '0ms',
                            }}
                            unmountOnExit
                        >
                            <CircularProgress />
                        </Fade>
                    )}
                </Box>
                <Button onClick={handleClickQuery} sx={{ m: 2 }}>
                    {query !== 'idle' ? 'Reset' : 'Simulate a load'}
                </Button>
            </Box>
            <CircularProgress disableShrink />

            <br /><br />
            <Typography variant="h2" component="h2">
                Skeleton
            </Typography>
            {/* ===================****************=============== */}
            <br />

            <Stack spacing={1}>
                {/* For variant="text", adjust the height via font-size */}
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" width={210} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
            </Stack>

            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ width: 300 }}>
                <Skeleton />
                <Skeleton animation="wave" />
                <Skeleton animation={false} />
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ overflow: 'hidden' }}>
                <Media loading />
                <Media />
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <div>
                <Media loading />
                <Media />
            </div>
            <br /><br />
            {/* ========================********************================== */}
            <Grid container spacing={8}>
                <Grid size="grow">
                    <TypographyDemo loading />
                </Grid>
                <Grid size="grow">
                    <TypographyDemo />
                </Grid>
            </Grid>
            <br /><br />
            {/* ========================********************================== */}
            <Grid container spacing={8}>
                <Grid size="grow">
                    <SkeletonChildrenDemo loading />
                </Grid>
                <Grid size="grow">
                    <SkeletonChildrenDemo />
                </Grid>
            </Grid>
            <br /><br />
            {/* ========================********************================== */}
            <Box
                sx={{
                    bgcolor: '#121212',
                    p: 8,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Skeleton
                    sx={{ bgcolor: 'grey.900' }}
                    variant="rectangular"
                    width={210}
                    height={118}
                />
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <Button onClick={handleClick}>Open Snackbar</Button>
            <Snackbar
                open={openss}
                autoHideDuration={6000}
                onClose={handleClosess}
                message="Note archived"
                action={action}
            />
            <br /><br />
            {/* ========================********************================== */}
            <Box sx={{ width: 500 }}>
                {buttons}
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={openss}
                    onClose={handleClosess}
                    message="I love snacks"
                    key={vertical + horizontal}
                />
            </Box>
            
        </>
    )
}

export default Tooltips


