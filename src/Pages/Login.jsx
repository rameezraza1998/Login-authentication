import React, { useRef } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { auth } from '../config/firebase/configfirebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { useNavigate } from "react-router-dom";


function Login() {
  const email = useRef();
  const pass = useRef();
  const navigate = useNavigate()

  function loginUser(event) {
    event.preventDefault();
    const emailValue = email.current.value;
    const passwordValue = pass.current.value;

    signInWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Logged in", user);
        navigate('/Product');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <>
      <Box className="bg-danger-subtle" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Box className="d-flex flex-column container justify-content-center gap-5" sx={{ width: '100%', maxWidth: '400px' }}>
          <Typography variant="h3" color="initial" className='text-center'>Login User</Typography>
          <form onSubmit={loginUser}>
            <TextField
              id="outlined-basic1"
              label="Email"
              type="email"
              variant="outlined"
              inputRef={email}
              fullWidth
              sx={{ mb: 2 }} // Add margin-bottom to space out fields
            />
            <TextField
              id="outlined-basic2"
              label="Password"
              type="password"
              variant="outlined"
              inputRef={pass}
              fullWidth
              sx={{ mb: 2 }} // Add margin-bottom to space out fields
            />
            <Button
              type="submit"
              variant="contained"
              color="primary" // Adjust color as needed
              fullWidth
            >
              Login
            </Button>
          </form>
          <Box className="text-center">
            <Typography variant="subtitle1" color="initial">
              Doesn't have an account? <span className="text-decoration-underline text-primary">Sign Up</span>
            </Typography>
            <Typography variant="subtitle1" color="initial">
              Forgot <span className="text-decoration-underline text-primary">Username / Password</span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;
