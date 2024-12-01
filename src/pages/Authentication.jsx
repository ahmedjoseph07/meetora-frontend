import React, { useContext, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';



const defaultTheme = createTheme();

export default function Authentication() {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [error, setError] = useState();
  const [message, setMessage] = useState();

  const [formState, setFormState] = useState(0);

  const [open, setOpen] = useState(false);

  const { handleRegister, handleLogin } = useContext(AuthContext);

  let handleAuth = async () => {
    try {
      if (!username || !password || (formState === 1 && !name)) {
        setError("All fields are required.");
        return;
      }

      if (password.length < 4) {
        setError("Password must be at least 4 characters long.");
        return;
      }

      if (formState === 1 && name.length < 3) {
        setError("Name must be at least 3 characters long.");
        return;
      }

      if (formState == 0) {
        let result = await handleLogin(username, password);
        setMessage(result);
        setOpen(false);
        setUsername("");
        setError("");
        setPassword("");
      }
      if (formState == 1) {
        let result = await handleRegister(name, username, password);
        setMessage(result);
        setOpen(true);
        setUsername("");
        setError("");
        setFormState(0);
        setPassword("");
      }
    } catch (err) {
      let message = (err.response.data.message);
      setError(message)

    }
  }

  return (

    <div>
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://picsum.photos/200)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: t =>
                t.palette.mode === 'light'
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>

              <div >
                <Button variant={formState == 0 ? "contained" : ""} onClick={() => { setFormState(0), setError("")}}>
                  SIGN IN
                </Button>
                <Button variant={formState == 1 ? "contained" : ""} onClick={() => { setFormState(1), setError("")}}>
                  SIGN UP
                </Button>
              </div>

              <Box component="form" noValidate sx={{ mt: 1 }}>
                {formState === 1 ? <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="Full Name"
                  label="Full Name"
                  value={name}
                  name="Full Name"
                  onChange={(e) => setName(e.target.value)}
                /> : <></>}
                <TextField
                  value={username}
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                  value={password}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p style={{ "color": "red" }}> {error}</p>
                <Button
                  onClick={handleAuth}
                  type="button"
                  halfWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  {formState == 0 ? "Login" : "Register"}
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Snackbar open={open} autoHideDuration={2000} message={message} />
      </ThemeProvider>
    </div>
  );
}
