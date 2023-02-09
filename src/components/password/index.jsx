import React, { useEffect, useState } from 'react'
import './password.css'

import copy from 'copy-to-clipboard';

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import RefreshIcon from '@mui/icons-material/Refresh';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Slide from '@mui/material/Slide';

function Password({ handleGenerate, password }) {

    const [rotate, setRotate] = useState(false);
    const [strength, setStrength] = useState(100);

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const strengthVariant = {
        100: 'success',
        60: 'warning',
        30: 'error',
        0: 'error'
    }

    const animate = () => {

        setRotate(true);

        setTimeout(() => setRotate(false), 325);

    }

    const handleOnClick = () => {
        handleGenerate();
        animate();
        SlideTransition();
    }

    const handleCopy = () => {
        copy(password)
        handleClick()
    }

    useEffect(() => {
        if (password.length > 11) setStrength(100)
        if (password.length < 12) setStrength(60)
        if (password.length < 8) setStrength(30)
        if (password.length < 4) setStrength(0)
    }, [password])

    const SlideTransition = (props) => {
        return <Slide {...props} direction="down" />;
    }

    return (
        <>
            <Box sx={{ padding: '2rem' }}>
                <Stack direction="row" spacing={1}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, maxWidth: '50vw', whiteSpace: 'nowrap', overflow: 'auto' }}>
                        {password}
                    </Typography>
                    <Tooltip title="Copy" placement='top'>
                        <IconButton aria-label="delete" onClick={handleCopy}>
                            <ContentCopyIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Generate" placement='top'>
                        <IconButton aria-label="delete" onClick={handleOnClick}>
                            <RefreshIcon className={`refresh ${rotate ? `shake` : null}`} />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Box>
            <LinearProgress variant="determinate" value={strength} color={strengthVariant[strength]} />

            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} TransitionComponent={SlideTransition} >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Copied
                </Alert>
            </Snackbar>
        </>
    )
}

export default Password