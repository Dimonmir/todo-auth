import React from 'react'
import { BoxAuth } from './s-authForm'
import features from '@features/index'
import { Avatar, Typography } from 'antd'

export const AuthForm = () => {
  return (
    <BoxAuth>
      <div className="authHeader">
        <Avatar
          icon="../../myLogo.jpg"
        />
        <Typography.Title level={3} >h3. Ant Design</Typography.Title>
      </div>
      <features.AuthForm />
    </BoxAuth>
  )
}
