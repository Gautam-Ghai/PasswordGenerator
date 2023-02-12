import React, { useState } from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Notification from '../Notification';

import copy from 'copy-to-clipboard';
import './index.css'

function CustomeButton({ handleGenerate, password }) {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleCopy = () => {
        copy(password)
        handleClick()
    }

    const clickGenerate = () => {
        handleGenerate()
    }

    return (
        <>
            <Stack spacing={2} direction="row" className="btn-center" >
                <Button variant="outlined" size="large" onClick={clickGenerate}>Generate</Button>
                <Button variant="contained" size="large" onClick={handleCopy}>Copy</Button>
            </Stack>
            <Notification handleClose={handleClose} open={open} />
        </>
    )
}

export default CustomeButton