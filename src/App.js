// Import required libraries
import React from "react";
import picture from './image_light.png';                    // Image used on homepage
import Switch from './Components/Switch'                    // Toggle Button
import { Typography } from "@material-ui/core"
import { Grid, Paper } from "@material-ui/core"
import { InputBase } from "@material-ui/core"
import { Button } from "@material-ui/core"
import { Divider } from "@material-ui/core"
import { Box } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core"
import { FcGoogle } from "react-icons/fc";
import { BsApple, BsDash } from "react-icons/bs";
import { FaLink } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";

// Webpage styling (Includes Responsive Design)

const useStyles = makeStyles(theme => ({

  image: {
    background: 'white',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,

    [theme.breakpoints.down('sm')]: {
      borderBottomLeftRadius: 0,
      borderTopRightRadius: 20,
   },
  },

  form: {
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    background: 'radial-gradient(circle at right bottom, white 80%, #D9F3F2)',
    background: 'radial-gradient(circle at left bottom, white 80%, #F7E3EE)',

    [theme.breakpoints.down('sm')]: {
      borderBottomLeftRadius: 20,
      borderTopRightRadius: 0,
   },
  },

  mainHeading: {
    fontWeight: 'bold', 
    fontSize: 32, 
    color:'#3f3967'
  },

  button1: {
    background: 'linear-gradient(to right, #fb5162 50%, #ff8676)',
    color: 'white',
    textTransform: 'capitalize',
    fontWeight: 'bold', 
    height: '5vh',
    fontSize: 12,
    borderRadius: 12,
    boxShadow: 'none'
  },

  links: {
    color: '#ff8676',
    fontWeight: 'bold',
    fontSize: 12,
    textTransform:"capitalize"
  },

  smallheading: {
    color: '#9b9fb4',
    fontWeight: 'bold',
    fontSize: 12
  },

  input: {
    background:'#e9edfc',
    color: '#6e6e8d',
    fontWeight: 'bold',
    fontSize: 12,
    borderRadius: 12,
    height: '5vh',
    paddingLeft: '2vh',
    border:'red',
    marginBottom: '3vh',
    
    '&::placeholder': {
      color: '#3a3a51',
      fontWeight: 'bold',
      fontSize: 14,
    }
  },

  googleBtn: {
    background: '#fee3e1',
    boxShadow: 'none',
    height: '5vh',
    textTransform: 'none',
    fontSize: 18,
    width: '80%',
    marginRight: 12,
    borderRadius: 8,
    paddingBottom: 5,
  },

  btnText: {
    paddingLeft: 12,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#3f3967'
  },

  facebookBtn: {
    background: '#fee3e1',
    boxShadow: 'none',
    height: '5vh',
    textTransform: 'none',
    fontSize: 20,
    marginRight: 12,
    borderRadius: 8,
    color: '#3b5998',
    minWidth: 45,
  },

  appleBtn: {
    background: '#fee3e1',
    boxShadow: 'none',
    height: '5vh',
    textTransform: 'none',
    fontSize: 18,
    borderRadius: 8,
    minWidth: 45,
  },

  linkBtn: {
    marginLeft: 8,
    padding: 3, 
    background: '#ff8676',
    color: 'white',
    borderRadius: 100,
    fontSize: 6
  },

  hideicon: {
    color:'#6e6e8d',
    marginLeft: '90%',
  },

  dash: {
    marginRight: 5,
    marginLeft: 4,
    marginBottom: -2
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
        
        <Grid item xs={12} md={7}>
          <img className={classes.image} src={picture} style={{width:'100%', height:'100%'}}/>
        </Grid>
        
        <Grid item xs={12} md={5} className={classes.form}>
          
          <Box pl={7} pr={7} pt={5} pb={5} >
            <Box>
              <Button className={classes.links}>
                Travelguru
                <FaLink className={classes.linkBtn}/>
              </Button>
              <span style={{display: 'flex', justifyContent: 'flex-end', marginTop: -30}}>
                <Switch />
              </span>
                
            </Box>

            <Box pb={3} pt={3}> <Divider /></Box>    
            
            <Box>
              <Typography className={classes.mainHeading}>
                Sign in to Travelguru</Typography>
              <Typography style={{fontWeight: 'bold', fontSize: 12, color:'#a1a6bc'}}>Don't have an account? 
                <Button variant="text" className={classes.links} style={{marginLeft: 6}}>Sign Up</Button>
              </Typography>
            </Box>   

            <Box pb={4} pt={3}> <Divider /></Box>    

            <Box>
              <InputBase className={classes.input} fullWidth placeholder="Full Name" type="text"/>
              <InputBase className={classes.input} fullWidth placeholder="Email" type="email"/>
              <InputBase className={classes.input} fullWidth placeholder="Password" type="password"/>
            
            </Box>    

            <Box pt={2}>
              <Button className={classes.button1} fullWidth variant="contained">Continue</Button>
            </Box>

            <Box pt={4}> <Divider /></Box>    

            <Box pt={3} pb={3} display="flex" justifyContent="center">
              <Typography style={{fontSize: 12, color:'#a1a6bc', fontWeight:'bold'}}><BsDash className={classes.dash} />OR<BsDash className={classes.dash}/></Typography>
            </Box>
            
            <Box pb={5} display="flex">
              <Button className={classes.googleBtn} variant="contained"> <FcGoogle />
                <span className={classes.btnText}>
                  Sign in with Google
                </span>
              </Button>
              <Button className={classes.facebookBtn}>
                <AiFillFacebook />
              </Button>
              <Button className={classes.appleBtn}>
                <BsApple />
              </Button>
            </Box>
          </Box>

        </Grid>
      </Grid>
    </Paper>
    </Grid>
  );
} export default App;
