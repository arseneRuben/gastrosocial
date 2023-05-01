import React from 'react'
import {  Grid, InputAdornment, IconButton } from '@material-ui/core';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
const InputComponent = ({ name, label, type, onChange, value , autoFocus, half, handleShowPassword}) => (
    <Grid item xs={12} sm={half ? 6 : 12}>
    <div>
        <label htmlFor={name}>{label}</label>
        <input type={type} name={name} id={name} onChange={onChange} value={value}  autoFocus={autoFocus} InputProps={name === 'password' ? {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleShowPassword}>
              {type === 'password' ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
            </IconButton>
          </InputAdornment>
        ),
      } : null} />
    </div>
    </Grid>
)

export default InputComponent
