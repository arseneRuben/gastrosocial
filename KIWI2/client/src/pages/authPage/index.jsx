import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import useStyles from './styles';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import InputComponent from '../../component/form/input-component';
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const LoginPage = () => {
  const state = null;

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  const handleChange = (e) => {

  };
  return (

  <div>
  
    
     
      <div><h1>Login Page</h1></div>
    
  </div>)
};
export default LoginPage;