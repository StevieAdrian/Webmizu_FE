import Box from '@mui/material/Box';
import LoginForm from './_components/LoginForm';

export default function LoginPage() {
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
      <LoginForm />
    </Box>
  );
}
