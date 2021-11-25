import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import AppBar from './AppBar';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange1 = (prop) => (event) => {
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

  const [value1] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" >
        <AppBar></AppBar>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            <b>Contact Information</b>
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}></Grid>

              <Grid item xs={12}>
                <FormLabel component="legend">Address*</FormLabel>
                <TextField
                  fullWidth
                  sx={{ m: 0 }}
                  id="outlined-multiline-flexible"
                  label="Address"
                  multiline
                  maxRows={4}
                  value={value1}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <FormLabel component="legend">City*</FormLabel>
                <TextField
                  fullWidth
                  sx={{ m: 0 }}
                  id="outlined-multiline-flexible"
                  label="Address"
                  multiline
                  maxRows={4}
                  value={value1}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <FormLabel component="legend">State*</FormLabel>
                <TextField
                  fullWidth
                  sx={{ m: 0 }}
                  id="outlined-multiline-flexible"
                  label="Address"
                  multiline
                  maxRows={4}
                  value={value1}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <FormLabel component="legend">Zip Code*</FormLabel>
                <TextField
                  fullWidth
                  sx={{ m: 0 }}
                  id="outlined-multiline-flexible"
                  label="Address"
                  multiline
                  maxRows={4}
                  value={value1}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <InputLabel htmlFor="standard-adornment-password">
                  Email*
                </InputLabel>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}>
                <InputLabel htmlFor="standard-adornment-password">
                  Password*
                </InputLabel>
                <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange1("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Next
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
