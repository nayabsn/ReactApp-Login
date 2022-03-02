import React from 'react';
import './InputField.css';

import { AiFillEyeInvisible , AiFillEye } from "react-icons/ai";
import { InputAdornment  } from "@material-ui/core"
import { TextField  } from "@material-ui/core"
import { IconButton } from "@material-ui/core"
import { Typography } from "@material-ui/core"


const InputField = () => {

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
    <Typography>
    <TextField 
    id="inputText" 
      fullWidth
      InputProps={{classes:{notchedOutline:"noBorder"}}}
      variant="outlined" 
      placeholder="Full Name" 
      type="text"
      />

      <TextField 
      id="inputText" 
      InputProps={{classes:{notchedOutline:"noBorder"}}}
      fullWidth
      variant="outlined" 
      placeholder="Email" 
      type="email"
      />
      
      <TextField 
      id="password"
      class="inputText"
      fullWidth
      variant="outlined" 
      placeholder="Password" 
      type="password"
      type={values.showPassword ? 'text' : 'password'}
      value={values.password}
      onChange={handleChange('password')}
      InputProps={{
        endAdornment: (
          <InputAdornment class="btn">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            />
            {values.showPassword ? <AiFillEye class="icon" /> : <AiFillEyeInvisible class="icon" />}
          </InputAdornment>
        ), classes:{notchedOutline:"noBorder"}
      }}
      />
      </Typography>
    </>
  );
};

export default InputField;