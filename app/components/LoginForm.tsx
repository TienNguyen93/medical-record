'use client'
import React from 'react'
import styles from "../login/login.module.css"
import { Box, Container, Typography }
  from '@mui/material'
import TextField from '@mui/material/TextField'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'

import Link from 'next/link'

// import { createTheme, ThemeProvider } from '@mui/material/styles';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#3f51b5',
//       light: '#6573c3',
//       dark: '#2c387e'
//     }
//   }
// })

const LoginForm = () => {
  return (
    // <ThemeProvider theme={theme}>
      <Container style={{ padding: '0 350px' }}>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <TextField
            required
            id="outlined-required"
            label="Email"
            placeholder='Enter your email'
            sx={{ mb: 2.5 }}
            size="small"
          />
          <TextField
            required
            id="outlined-required"
            label="Password"
            type="password"
            placeholder='Set your password'
            sx={{ marginBottom: '10px' }}
            size="small"
          />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Remember me"
            />
          </FormGroup>
          <Button variant="contained" sx={{ margin: "30px 100px 20px" }}>
            <Typography variant="body1" sx={{ textTransform: 'capitalize' }}>
              Sign in
            </Typography>
          </Button>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2">
            <Link href="/reset-password" className={styles.loginLink}>
              Forgot Password?
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ color: 'gray' }}>
            Need an email account?
            <Link href="/create-account" className={styles.loginLink} style={{ marginLeft: '5px' }}>
              Create account
            </Link>
          </Typography>
        </Box>
      </Container>
    // </ThemeProvider>
  )
}

export default LoginForm