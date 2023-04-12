import React, { useState } from 'react'
import { SForm } from './s-authForm'
import { authTry, validationSchema } from './api';
import { useFormik } from 'formik';
import { Button, Input } from 'antd';

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
  
  const handlerKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      formik.handleSubmit();
    }
  };

  return (
    <SForm onSubmitCapture={formik.handleSubmit} onKeyDown={handlerKeyDown}>
      <SForm.Item
        help={formik.touched.email && formik.errors.email}
        validateStatus={formik.touched.email && formik.errors.email ? 'error' : ''}
        label={formik.initialValues.email}
      >
        <Input 
          placeholder="input with clear icon" 
          id="email" 
          name="email"
          allowClear 
          onChange={formik.handleChange} 
        />
      </SForm.Item>
      <SForm.Item
        help={formik.touched.password && formik.errors.password}
        validateStatus={formik.touched.password && formik.errors.password ? 'error' : ''}
        label={formik.initialValues.password}
      >
        <Input 
          placeholder="input with clear icon" 
          id="password" 
          name="password"
          allowClear 
          onChange={formik.handleChange} 
        />
      </SForm.Item>
      <SForm.Item>
        <Button disabled={!formik.isValid}>Войти</Button>
      </SForm.Item>
    </SForm>
  )
}
