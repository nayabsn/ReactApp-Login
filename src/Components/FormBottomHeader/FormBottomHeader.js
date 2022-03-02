import React from 'react';
import './FormBottomHeader.css';

import { Typography } from "@material-ui/core"

const FormBottomHeader = () => {
  return (
    <>
      <Typography class="mainHeading">
        Sign in to Travelguru

        <Typography class="subHeading">Don't have an account? 
          <button class="signup"> Sign up </button>
        </Typography>

      </Typography>
    </>
  );
};

export default FormBottomHeader;