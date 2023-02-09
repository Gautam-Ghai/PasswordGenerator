import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider({ passLength, setPassLength }) {

    const handleSliderChange = (event, newValue) => {
        setPassLength(newValue);
    };

    const handleInputChange = (event) => {
        setPassLength(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (passLength < 1) {
            setPassLength(1);
        } else if (passLength > 50) {
            setPassLength(50);
        }
    };

    return (
        <Box sx={{marginRight: 4}}>
            <Typography id="input-slider" gutterBottom>
                Password Length
            </Typography>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                    <Input
                        value={passLength}
                        size="medium"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                            min: 1,
                            max: 50,
                            type: 'number',
                            'aria-labelledby': 'input-slider',
                        }}
                    />
                </Grid>
                <Grid item sx={{flexGrow: 1}}>
                    <Slider
                        value={typeof passLength === 'number' ? passLength : 1}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        defaultValue={passLength}
                        min={1}
                        max={50}
                    />
                </Grid>

            </Grid>
        </Box>
    );
}