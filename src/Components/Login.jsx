import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Paper } from '@mui/material';
import { signInWithEmailAndPassword, auth } from './Firebase';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      // Sign in with email and password
      await signInWithEmailAndPassword(auth, email, password);

      // Login successful
      console.log(`Login successful for Email: ${email}`);
    } catch (error) {
      setError(error.message);
      console.error('Login Error:', error.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: '10%' }}>
      <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Login</Typography>
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
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <Typography color="error">{error}</Typography>}
        <Button
          type="button"
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{ mt: 3 }}
        >
          Login
        </Button>
      </Paper>
    </Container>
  );
};

export default LoginForm;
