import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import { createUserWithEmailAndPassword, auth } from './Firebase';

const RegistrationForm = () => {
    const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegistration = async () => {
    try {
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, email, password,fname,lname);

      // Registration successful
      console.log(`Registration successful for Email: ${email}`);
    } catch (error) {
      setError(error.message);
      console.error('Registration Error:', error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: '10%' }}>
      <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Register</Typography>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="First Name"
          name="fname"
          autoComplete="fname"
          autoFocus
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
        
        <TextField
          margin="normal"
          required
          fullWidth
          id="lname"
          label="Last Name"
          name="lname"
          autoComplete="lname"
          autoFocus
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
        
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleRegistration}
          sx={{ mt: 3 }}
        >
          Register
        </Button>
      </Paper>
    </Container>
  );
};

export default RegistrationForm;
