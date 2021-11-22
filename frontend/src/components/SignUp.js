import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

<text>Start your MileagePlus adventure by creating an account. Our MileagePlus loyalty program is free to join and rewards you with miles when you fly and when you enjoy everyday activities and experiences.

</text>


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [value, setValue] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };


  return (
    
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        
        <CssBaseline />
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            <b>Sign up</b>
          </Typography>
          <br></br>
          <Typography component="h1" variant="h5">
            <b>About Me</b>
          </Typography>

          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <FormLabel component="legend">First Name*</FormLabel><br></br>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
              <FormLabel component="legend">Last Name*</FormLabel><br></br>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
                <br></br>
              </Grid>
              
              <Grid item xs={12}>
                <FormLabel component="legend">Gender*</FormLabel>
                <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Unspecified" />
                </RadioGroup>
              </Grid>

              <Grid item xs={12}>
              <FormLabel component="legend">Date Of Birth*</FormLabel>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="MM/DD/YYYY"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
              </LocalizationProvider>
              </Grid>

            </Grid>
            <Grid>
            <Button
              type="submit"
              halfWidth
              variant="contained"
              
              sx={{ mt: 3, mb: 2 }}
            >
              Next
            </Button>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}