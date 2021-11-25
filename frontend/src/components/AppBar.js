import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import history from "../helpers/history";
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Contactinfo = React.lazy(() => import('./ContactInfo'));
const Mapslist = React.lazy(() => import('./Mapslist'));

const clientId = "998491717109-7pm66r6nuusunh6rrdd2he2vjht6gbl0.apps.googleusercontent.com";



export default function ButtonAppBar() {

  const [showloginButton, setShowloginButton] = React.useState(true);
  const [showlogoutButton, setShowlogoutButton] = React.useState(false);
  const onLoginSuccess = (res) => {
      console.log('Login Success:', res.profileObj);
      setShowloginButton(false);
      setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
      console.log('Login Failed:', res);
  };

  const onSignoutSuccess = () => {
      alert("You have been logged out successfully");
      console.clear();
      setShowloginButton(true);
      setShowlogoutButton(false);
  };

    const navigateToLogin=()=>{
        console.log("On navigate button click assasasa");
        history.push("/SignIn");
    }

  return (
    <div style={{
      backgroundImage: 'url("https://i.pinimg.com/originals/5d/e9/b2/5de9b258dd5badea3ec63a2e76fb0d26.jpg")',
      height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment:"fixed", backgroundPosition:"center"
    }}>
      
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EcoBuild
          </Typography>
          <div>


                    <li>
                        <a href="/">MainPage</a>
                    </li>
                    <li>
                        <a href="/Contactinfo">Contact info</a>
                    </li>
                    <li>
                        <a href="/mapslist">Maps list</a>
                    </li>
                    <li>
                        <a href="/Signin">Signin</a>
                    </li>
                    <li>
                        <a href="/Signup">Signup</a>
                    </li>

            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
        </Toolbar>
      </AppBar>
    </Box>
   </div> 
  );
}