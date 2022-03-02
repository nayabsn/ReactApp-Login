import React from 'react';
import './SubmitButton.css';

import { Button } from "@material-ui/core"
import { Typography } from "@material-ui/core"

const SubmitButton = () => {
  return (
    <>
    <Typography>
      <Button className="submit" variant="contained">Continue</Button>
    </Typography>
    </>
  );
};

export default SubmitButton;