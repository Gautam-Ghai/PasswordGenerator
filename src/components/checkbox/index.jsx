import React from 'react'
import './index.css'

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Checkboxes({ num, setNum, lower, setLower, upper, setUpper, sym, setSym }) {
    return (
        <div className='check'>
            <FormGroup >
                <FormControlLabel control={<Checkbox />} label="Uppercase" checked={upper} onChange={(e) => setUpper(e.target.checked)} />
                <FormControlLabel control={<Checkbox />} label="Lowercase" checked={lower} onChange={(e) => setLower(e.target.checked)} />
                <FormControlLabel control={<Checkbox />} label="Numbers" checked={num} onChange={(e) => setNum(e.target.checked)} />
                <FormControlLabel control={<Checkbox />} label="Symbols" checked={sym} onChange={(e) => setSym(e.target.checked)} />
            </FormGroup>
        </div>
    );
}