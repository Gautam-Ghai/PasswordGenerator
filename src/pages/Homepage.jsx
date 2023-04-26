import React, { useState, useEffect, useCallback } from 'react'
import './Homepage.css'

import Paper from '@mui/material/Paper';

import { Grid } from '@mui/material';

import InputSlider from '../components/slider';
import RadioButtonsGroup from '../components/radio';
import Checkboxes from '../components/checkbox';
import Password from '../components/password';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CustomeButton from '../components/buttons';

const Homepage = () => {

  const [passLength, setPassLength] = useState(12);
  const [password, setPassword] = useState("P@s$w0rD");
  const [lower, setLower] = useState(true)
  const [upper, setUpper] = useState(true)
  const [num, setNum] = useState(true)
  const [sym, setSym] = useState(true)
  const [opt, setOpt] = useState('all')



  const handleGenerate = useCallback(() => {
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
    const SYMBOL_CHAR_CODES = [33, 35, 36, 37, 38, 40, 41, 60, 61, 62, 63, 64, 91, 92, 93, 95, 123, 125]

    const MOD_UPPERCASE = UPPERCASE_CHAR_CODES.filter(letter => ![73, 76, 79].includes(letter))
    const MOD_LOWERCASE = LOWERCASE_CHAR_CODES.filter(letter => ![105, 108, 111].includes(letter))
    const MOD_NUM = NUMBER_CHAR_CODES.filter(num => ![48, 49].includes(num))
    const MOD_SYM = SYMBOL_CHAR_CODES.filter(sym => ![40, 41, 60, 62, 91, 92, 93, 123, 125].includes(sym))

    function generatePassword(characterAmount, includeLowercase, includeUppercase, includeNumbers, includeSymbols, opt) {
      let charCodes = [];
      if (opt === 'say') {
        if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
        if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
      }
      else if (opt === 'brackets' ){
        if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
        if (includeUppercase) charCodes = charCodes.concat(MOD_UPPERCASE)
        if (includeSymbols) charCodes = charCodes.concat(MOD_SYM)
        if (includeNumbers) charCodes = charCodes.concat(MOD_NUM)
      }
      else if (opt === 'read') {
        if (includeLowercase) charCodes = charCodes.concat(MOD_LOWERCASE)
        if (includeUppercase) charCodes = charCodes.concat(MOD_UPPERCASE)
        if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
        if (includeNumbers) charCodes = charCodes.concat(MOD_NUM)
      }
      else {
        if (includeLowercase) charCodes = charCodes.concat(LOWERCASE_CHAR_CODES)
        if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
        if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
        if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
      }

      const passwordCharacters = []
      for (let i = 0; i < characterAmount; i++) {
        const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
      }
      setPassword(passwordCharacters.join(''));
    }

    generatePassword(passLength, lower, upper, num, sym, opt)
  }, [passLength, lower, upper, num, sym, opt])

  useEffect(() => {
    handleGenerate()
  }, [handleGenerate, passLength, lower, upper, num, sym, opt])

  return (
    <>
      <Navbar />
      <div className='center'>
        <div className='main'>
          <h1 className='margin-1'>
            Need a password? Try our Password Generator.
          </h1>
          <p className='margin-1'>
            Instantly generate a secure, random passwords to stay safe online.
          </p>
          <Paper elevation={3} className="margin-1">
            <Password password={password} handleGenerate={handleGenerate} />
          </Paper>
          <Paper elevation={3} className="password-settings">
            <Grid container spacing={2}>
              <Grid xs={12} md={6}>
                <InputSlider passLength={passLength} setPassLength={setPassLength} />
              </Grid>
              <Grid xs={7} md={4}>
                <RadioButtonsGroup
                  opt={opt}
                  setOpt={setOpt}
                />
              </Grid>
              <Grid xs={5} md={2}>
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
          <CustomeButton password={password} handleGenerate={handleGenerate} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Homepage