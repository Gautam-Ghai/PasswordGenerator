import { Typography } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <Typography sx={{
            bottom: 0,
            left: 0,
            right: 0,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 'fit-content'
        }}>
            Developed by <a href="https://gautamghai.com" target="_blank" rel="noreferrer">Gautam Ghai</a>
        </Typography>
    )
}

export default Footer