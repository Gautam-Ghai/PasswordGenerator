import React, { useState, useEffect } from 'react'
import './Homepage.css'

import Paper from '@mui/material/Paper';

import { Grid } from '@mui/material';

import InputSlider from '../components/slider';
import RadioButtonsGroup from '../components/radio';
import Checkboxes from '../components/checkbox';
import Password from '../components/password';
import Navbar from '../components/navbar';

const Homepage = () => {

  const [passLength, setPassLength] = useState(12);
  const [password, setPassword] = useState("P@s$w0rD");
  const [lower, setLower] = useState(true)
  const [upper, setUpper] = useState(true)
  const [num, setNum] = useState(true)
  const [sym, setSym] = useState(true)

  function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
      array.push(i)
    }
    return array
  }

  const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
  const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
  const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
  const SYMBOL_CHAR_CODES = [35, 36, 37, 38, 40, 41, 60, 61, 62, 63, 64, 91, 92, 93, 95, 123, 125]

  function generatePassword(characterAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = [];
    if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)

    const passwordCharacters = []
    for (let i = 0; i < characterAmount; i++) {
      const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
      passwordCharacters.push(String.fromCharCode(characterCode))
    }
    setPassword(passwordCharacters.join(''));
  }

  const handleGenerate = () => {
    generatePassword(passLength, lower, upper, num, sym)
  }

  useEffect(() => {
    handleGenerate()
  }, [])

  useEffect(() => {
    handleGenerate()
  }, [passLength, lower, upper, num, sym])

  return (
    <>
      <Navbar />
      <div className='center'>
        <div className='main'>
          <h1 className='header'>
            Need a password? Try our Password Generator.
          </h1>
          <p className='text'>
            Instantly generate a secure, random passwords to stay safe online.
          </p>
          <Paper elevation={3} className="card">
            <Password password={password} handleGenerate={handleGenerate} />
          </Paper>
          <Paper elevation={3} className="card" sx={{padding: '3rem'}}>
            <Grid container spacing={2}>
              <Grid xs={12} md={6}>
                <InputSlider passLength={passLength} setPassLength={setPassLength} />
              </Grid>
              <Grid xs={6} md={3}>
                <RadioButtonsGroup />
              </Grid>
              <Grid xs={6} md={3}>
                <Checkboxes
                  lower={lower}
                  setLower={setLower}
                  upper={upper}
                  setUpper={setUpper}
                  num={num}
                  setNum={setNum}
                  sym={sym}
                  setSym={setSym}
                />
              </Grid>
            </Grid>
          </Paper>
        </div>
      </div>
    </>
  )
}

export default Homepage