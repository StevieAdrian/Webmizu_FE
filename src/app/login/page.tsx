'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from 'next/link';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'radial-gradient(circle at top, rgba(37, 99, 235, 0.08), transparent 28%), linear-gradient(180deg, #02040a 0%, #050814 100%)',
      }}
    >
      <Paper
        elevation={0}
        component="form"
        onSubmit={handleSubmit}
        sx={{
          maxWidth: 430,
          width: '100%',
          mx: 2,
          p: 4,
          borderRadius: '20px',
          background: 'rgba(14, 17, 27, 0.92)',
          backdropFilter: 'blur(18px)',
          border: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Box sx={{ textAlign: 'center', mb: 1 }}>
          <Typography
            variant="h4"
            sx={{ color: '#fff', fontWeight: 700, mb: 1 }}
          >
            Welcome Back
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>
            Sign in to continue to your account
          </Typography>
        </Box>

        <TextField
          fullWidth
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              color: '#fff',
              '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
              '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
              '&.Mui-focused fieldset': { borderColor: '#5b38f6' },
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'rgba(255,255,255,0.3)',
            },
          }}
        />

        <TextField
          fullWidth
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                    sx={{ color: 'rgba(255,255,255,0.4)' }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              backgroundColor: 'rgba(255,255,255,0.05)',
              borderRadius: '12px',
              color: '#fff',
              '& fieldset': { borderColor: 'rgba(255,255,255,0.1)' },
              '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
              '&.Mui-focused fieldset': { borderColor: '#5b38f6' },
            },
            '& .MuiInputBase-input::placeholder': {
              color: 'rgba(255,255,255,0.3)',
            },
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 1,
            py: 1.5,
            borderRadius: '12px',
            background: 'linear-gradient(90deg, #5b38f6, #6d4aff)',
            fontWeight: 600,
            fontSize: 16,
            textTransform: 'none',
            '&:hover': {
              background: 'linear-gradient(90deg, #4c2bd4, #5b38f6)',
            },
          }}
        >
          Sign In
        </Button>

        <Typography
          sx={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: 14 }}
        >
          Don&apos;t have an account?{' '}
          <Link
            href="/register"
            style={{
              color: '#6d4aff',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Register
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}
