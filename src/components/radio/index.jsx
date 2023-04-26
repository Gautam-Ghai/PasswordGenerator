import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/material/Tooltip';
import './index.css'

export default function RadioButtonsGroup({ opt, setOpt }) {

  const handleChange = (e) => {
    setOpt(e.target.value)
  }

  return (
    <FormControl sx={{ display: 'flex', alignItems: 'center'}} >
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={opt}
        name="radio-buttons-group"
        onChange={e => handleChange(e)}
      >
        <FormControlLabel
          value="say"
          control={<Radio />}
          sx={{ marginY: -1}}
          label={
            <p className='pText'>Only Alphabets
              <span>
                <Tooltip title="Avoid numbers and symbols" placement='right'>
                  <InfoOutlinedIcon className='icon' />
                </Tooltip>
              </span>
            </p>
          }
        />
         <FormControlLabel
          value="brackets"
          control={<Radio />}
          sx={{ marginY: -1}}
          label={
            <p className='pText'>Avoid Brackets
              <span>
                <Tooltip title="Avoid symbols like (, ), {, }" placement='right'>
                  <InfoOutlinedIcon className='icon' />
                </Tooltip>
              </span>
            </p>
          }
        />
        <FormControlLabel
          value="read"
          control={<Radio />}
          sx={{ marginY: -1}}
          label={
            <p className='pText'>Easy to read
              <span>
                <Tooltip title="Avoid characters like I, 1, l, 0, O" placement='right'>
                  <InfoOutlinedIcon className='icon' />
                </Tooltip>
              </span>
            </p>
          }
        />
        <FormControlLabel
          value="all"
          control={<Radio />}
          sx={{ marginY: -1}}
          label={
            <p className='pText'>All characters
              <span>
                <Tooltip title="Include all characters" placement='right'>
                  <InfoOutlinedIcon className='icon' />
                </Tooltip>
              </span>
            </p>
          }
        />
      </RadioGroup>
    </FormControl>
  );
}