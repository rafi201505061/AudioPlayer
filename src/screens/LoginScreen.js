import React, { Fragment, useState } from 'react';
import { Grid, Typography, CssBaseline, Button, FormControl, InputLabel, TextField } from '@material-ui/core';
import ValidationTextInput from '../Components/ValidationTextInput';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, red } from '@material-ui/core/colors';
import logo from './asset/one.jpg';
import { motion } from 'framer-motion'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8416c4'
    },
    secondary: red
  },
});

const buttonTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#8416c4'
    }
  },
});

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
const LoginScreen = () => {
  const classes = useStyles();
  const [isPasswordRight, setIsPasswordRight] = useState(true);
  const [isEmailRight, setIsEmailRight] = useState(true);
  return <Fragment>
    <CssBaseline />
    <Grid
      container
      justify='center'
      alignItems='center'
      className={classes.root}
      direction='column'
    >
      <Grid item>
        <motion.img
          src={logo}
          alt='Mood Singer'
          style={{ height: 200, width: 200 }}
          initial={{ y: '-100vh' }}
          animate={{ y: '-3vh' }}
          transition={{ type: 'spring', duration: 1, delay: .5 }}
        />
      </Grid>
      <Grid item>
        <Typography style={{ fontSize: 18, fontWeight: '600', color: '#8416c4' }}>
          MOODSINGER
        </Typography>
      </Grid>
      <Grid item>
        <Typography style={{ fontSize: 12, fontWeight: '600', color: '#eb0e4d' }}>
          switch to happiness
        </Typography>
      </Grid>
      <Grid item container justify='center' alignItems='center'>

        <Grid item>
          <ThemeProvider theme={theme}>
            <ValidationTextInput
              size='small'
              style={{ marginTop: 10, marginBottom: 10 }}
              id="outlined-password-input"
              label="Email"
              type="text"
              autoComplete="current-password"
              variant="outlined"
              color='primary'
              onChange={(event) => validateEmail(event.target.value)
                ? setIsEmailRight(false)
                : setIsEmailRight(true)}
              InputProps={{
                className: classes.multilineColor
              }}
              InputLabelProps={{
                style: { color: '#8416c4' },
              }}
            />
          </ThemeProvider>
        </Grid>

      </Grid>
      <Grid item container direction='column' justify='center' alignItems='center'>
        <Grid item>
          <ThemeProvider theme={theme}>
            <ValidationTextInput
              size='small'
              style={{ marginTop: 10, marginBottom: 10 }}
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              color='primary'
              onChange={(event) => event.target.value.length <= 5
                ? setIsPasswordRight(false)
                : setIsPasswordRight(true)}
              InputProps={{
                className: classes.multilineColor
              }}
              InputLabelProps={{
                style: { color: '#8416c4' },
              }}
            />
          </ThemeProvider>
        </Grid>
        <Grid item>
          {
            isPasswordRight
              ? null
              : <Typography style={{ color: 'red', fontSize: 12 }}>
                **Password must be atleast 6 characters long
            </Typography>
          }

        </Grid>
      </Grid>
      <Grid item>
        <ThemeProvider theme={buttonTheme}>
          <Button variant="outlined" color="primary" style={{ marginTop: 10, marginBottom: 10, borderWidth: 2 }}>
            Sign In
          </Button>
        </ThemeProvider>

      </Grid>

      <Grid item container alignItems='center' justify='center'>
        <Grid item>
          <Typography style={{ fontWeight: '600', fontSize: 14, marginTop: 10, color: '#8416c4' }}>
            Don't have an account?
          </Typography>
        </Grid>
        <Grid>
          <Typography className={classes.textButton}>
            Sign Up
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  </Fragment>

}

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    height: 'auto',
    backgroundColor: 'black'
  },
  textButton: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#eb0e4d',
    '&:hover': {
      color: '#11458f'
    },
    marginTop: 10
  },
  multilineColor: {
    color: '#8416c4'
  }

})

export { LoginScreen };