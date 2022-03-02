import React from 'react';
import './FormTopHeader.css';

import { FaLink } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { Typography } from "@material-ui/core"

const FormTopHeader = () => {
  return (
    <>
      <div class="flex-container">
        <div class="section-left">
          <button>
            <Typography class="link">Travelguru
              <FaLink class="linkBtn" />
            </Typography>
          </button>
          </div>
          
        <div class="section-right">
          <input class="react-switch-checkbox" id="react-switch-new" type="checkbox" />
          <label class="react-switch-label" htmlFor="react-switch-new" >
            <BsSun class="react-switch-button" /> 
          </label>
          
        </div>
      </div>
    </>
  );
};

export default FormTopHeader;