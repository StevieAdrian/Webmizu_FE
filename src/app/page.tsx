import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function HomePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <Typography variant="h3" sx={{ fontWeight: 700 }}>
        Mizu Firuta
      </Typography>
      <Typography sx={{ color: '#666', mt: 1 }}>
        Welcome to Mizu Firuta
      </Typography>
    </Box>
  );
}
