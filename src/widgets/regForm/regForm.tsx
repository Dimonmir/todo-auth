import React, { useState } from 'react'
import { BoxAuth } from './s-regForm'
import features from '@features/index'
import { Avatar, Typography } from 'antd'

export const RegForm = () => {
  return (
    <BoxAuth>
      <div className="authHeader">
        <Avatar
          size={40}
          icon={<img src={"/myLogo.jpg"} alt="avatar" />}
        />
        <Typography.Title level={2} > Регистрация </Typography.Title>
      </div>
      <features.RegForm />
    </BoxAuth>
  )
}
