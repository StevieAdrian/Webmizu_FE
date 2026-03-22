'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Header from './Header';
import { publicLayoutStyles as sx } from '@/styles/layout/public-routes';

interface LayoutPublicRouteProps {
  children: React.ReactNode;
}

export default function LayoutPublicRoute({ children }: LayoutPublicRouteProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Box component="main" sx={sx.main}>
      <Header />
      {children}
      <Backdrop
        open={mobileMenuOpen}
        onClick={() => setMobileMenuOpen(false)}
        sx={sx.backdrop}
      />
    </Box>
  );
}
