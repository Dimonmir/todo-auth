import { Avatar, Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { BoxForm } from './s-authForm'
import { authTry, validationSchema } from './api';
import { useFormik } from 'formik';
import { VisibilityOff, Visibility } from '@mui/icons-material';

export const AuthForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      authTry(values.email, values.password)
    },
  }); 
  
const [showPassword, setShowPassword] = useState(false);
const handleClickShowPassword = () => setShowPassword(!showPassword);
const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <BoxForm onSubmit={formik.handleSubmit}>
        <TextField 
          variant="outlined" 
          id="email"
          name="email"
          label="Введите почту"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          label='Введите пароль'
          variant="outlined"
          id="password"
          name="password"
          type={showPassword ? "text" : "password"} 
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        <Button variant="contained" type="submit"> Войти </Button>
    </BoxForm>
  )
}
