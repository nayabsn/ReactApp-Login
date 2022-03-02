// Import required libraries
import React from "react";

// Internal Imports
import picture from './image_light.png';                 
import FormTopHeader from './Components/FormTopHeader/FormTopHeader'                    
import FormBottomHeader from './Components/FormBottomHeader/FormBottomHeader'     
import InputField from './Components/InputField/InputField'              
import SubmitButton from './Components/SubmitButton/SubmitButton'                    
import FormFooter from './Components/FormFooter/FormFooter'                   

// External Imports
import { Grid, Paper } from "@material-ui/core"
import { Divider } from "@material-ui/core"
import { Box } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core"


// Webpage styling (Includes Responsive Design)

const useStyles = makeStyles(theme => ({

  image: {
    background: 'white',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,

    [theme.breakpoints.down('sm')]: {
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 30,
   },
  },

  form: {
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    background: 'radial-gradient(circle at left bottom, white 80%, #f4d7e7)',

    [theme.breakpoints.down('sm')]: {
      borderBottomLeftRadius: 30,
      borderTopRightRadius: 0,
   },
  },
  
  divider: {
    borderBottom: '1px solid #eceef7'
  }
}))


// Main Application

function App() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const paperStyle={padding:0, margin:60, backgroundColor: 'transparent'}

  return (
    <Grid container style={{background: '#e7ecfb'}}>
    <Paper elevation={0} style={paperStyle}>
      <Grid container> 
        
        {/* Left Side Bar Image */}
        <Grid item xs={12} md={7}>
          <img className={classes.image} src={picture} style={{width:'100%', height:'100%'}}/>
        </Grid>
        
        {/* Right Side Form */}
        <Grid item xs={12} md={5} className={classes.form}>
          
          <Box pl={7} pr={7} pt={3}>

            {/* Top/First header of the Login Form */}
            <FormTopHeader />                
            <Box pt={2}><Divider className={classes.divider} /></Box>    
            
            {/* Bottom/Second header of the Login Form */}
            <FormBottomHeader />
            <Box pb={4}> <Divider className={classes.divider}/></Box>    

            {/* Input Fields of the Login Form */}
            <InputField />
            <Box pt={1}/>

            {/* Submit Button */}
            <SubmitButton />
            <Box pt={4}> <Divider className={classes.divider}/></Box>    

            {/* Footer/Social Buttons of the Login Form */}
            <FormFooter />

          </Box>
        </Grid>
      </Grid>
    </Paper>
    </Grid>
  );
} export default App;
