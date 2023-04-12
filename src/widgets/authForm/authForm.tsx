import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { BoxAuth } from './s-authForm'
import features from '@features/index'

export const AuthForm = () => {
  return (
    <BoxAuth>
      <Box className="authHeader">
        <Avatar
          alt="Remy Sharp"
          src="../../public/myLogo.jpg"
          sx={{ width: 66, height: 66 }}
        />
        <Typography variant="h4"> Авторизация </Typography>
      </Box>
      <features.AuthForm />
    </BoxAuth>
  )
}
