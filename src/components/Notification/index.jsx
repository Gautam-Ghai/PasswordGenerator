import React, { useEffect } from 'react'

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';

function Notification({ handleClose, open}) {

    const SlideTransition = (props) => {
        return <Slide {...props} direction="down" />;
    }

    useEffect(() => {
        if (open) SlideTransition();
    }, [open])
    
    return (
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} TransitionComponent={SlideTransition} >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Copied
            </Alert>
        </Snackbar>
    )
}

export default Notification