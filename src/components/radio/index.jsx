import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function RadioButtonsGroup() {
  return (
    <FormControl sx={{display: 'flex', alignItems: 'center'}} >
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="other"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Easy to say" />
        <FormControlLabel value="male" control={<Radio />} label="Easy to read" />
        <FormControlLabel value="other" control={<Radio />} label="All characters" />
      </RadioGroup>
    </FormControl>
  );
}