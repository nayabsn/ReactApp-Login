import React from 'react';
import './FormFooter.css';

import { Box } from "@material-ui/core"
import { Button } from "@material-ui/core"
import { AiFillFacebook } from "react-icons/ai";
import { BsApple, BsDash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Typography } from "@material-ui/core"

const FormFooter = () => {
  return (
    <>
      <Box pt={2} pb={2} display="flex" justifyContent="center">
        <Typography class="or">
          <BsDash class="leftdash" /><BsDash class="dash" /> OR <BsDash class="dash" /><BsDash class="rightdash" />
        </Typography>
      </Box>
      
      <Box pb={5} display="flex">
        <Button class="googleBtn">
          <Typography> 
            <FcGoogle class="googleLogo"/>
            <span class="btnText">
              Sign in with Google
            </span>
          </Typography>
        </Button>

        <Button class="facebookBtn">
          <AiFillFacebook />
        </Button>
        <Button class="appleBtn">
          <BsApple />
        </Button>
      </Box>
    </>
  );
};

export default FormFooter;