import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Box, Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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
            <Box sx={{ width: 500 }}>
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
            </Box>
            <br /><br />
            {/* ========================********************================== */}
            <div>
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
            </div>
            <br /><br />
            {/* ========================********************================== */}
            <Tooltip title="Add" arrow>
                <Button>Arrow</Button>
            </Tooltip>
            <br /><br />
            {/* ========================********************================== */}
            <Tooltip
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
            </Tooltip>
            <br /><br />
            {/* ========================********************================== */}
            <Tooltip
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
            </Tooltip>
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

export default Tooltips


