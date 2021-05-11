import './App.css';
import React, { useState } from 'react';
import RomanNumerals from './helpers/RomanNumerals';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  textFields: {
    padding: theme.spacing(3),
    color: theme.palette.text.secondary,
    boxShadow: `0 0 7px ${theme.palette.background.default}`,
    background: theme.palette.background.default,
  },
}));

function App() {
  const classes = useStyles();
  
  const [roman, setRoman] = useState('');
  const [decimal, setDecimal] = useState('');
  const [romanError, setRomanError] = useState('');
  const [decimalError, setDecimalError] = useState('');

  const onRomanChange = (roman) => {
    setRoman(roman);
    setRomanError('');
    try {
      const decimal = RomanNumerals.fromRoman(roman);
      setDecimal(decimal);
    } catch (e) {
      setRomanError(e.toString());
    }
  }

  const onDecimalChange = (decimal) => {
    setDecimal(decimal);
    setDecimalError('');
    try {
      const roman = RomanNumerals.toRoman(decimal);
      setRoman(roman);
    } catch (e) {
      setDecimalError(e.toString());
    }
  }

  return (
    <div className="App">
      <header className="App-header">

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Learn Roman together</h1>
        </Grid>
        <Grid item xs={5}>Type Roman</Grid>
        <Grid item xs={2}>or</Grid>
        <Grid item xs={5}>Decimal number</Grid>

        <Grid container className={classes.textFields}>
          <Grid item xs={5}>
            <TextField
              className={classes.textField}
              error={romanError.length > 0}
              helperText={romanError}
              value={roman}
              onChange={evt => onRomanChange(evt.target.value)}
              label="Roman Number"
              variant="outlined" />
          </Grid>
          <Grid item xs={2}>=</Grid>
          <Grid item xs={5}>
            <TextField
              className={classes.textField}
              error={decimalError.length > 0}
              helperText={decimalError}
              value={decimal}
              onChange={evt => onDecimalChange(evt.target.value)}
              label="Decimal Number"
              variant="outlined" />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <h4>and see the result</h4>
        </Grid>
        
      </Grid>
      <a
        className="App-link"
        href="https://en.wikipedia.org/wiki/Roman_numerals"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn more on Wikipedia (English)
      </a>
      </header>
    </div>
  );
}

export default App;
