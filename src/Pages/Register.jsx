import React, { useRef } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { auth } from '../config/firebase/configfirebase.js';
import { createUserWithEmailAndPassword  } from 'firebase/auth'

function Register() {
  const email = useRef();
  const pass = useRef();

  function registerUser(event) {
    event.preventDefault();
    const emailValue = email.current.value;
    const passwordValue = pass.current.value;

    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Registered", user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        // Optionally, you could set some state to display this message in the UI
      });
  }

  return (
    <Box className="bg-danger-subtle" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Box className="d-flex flex-column container justify-content-center gap-5" sx={{ width: '100%', maxWidth: '400px' }}>
        <Typography variant="h3" color="initial" className='text-center'>Register User</Typography>
        <form onSubmit={registerUser}>
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
            Register
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Register;
