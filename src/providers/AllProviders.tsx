'use client';

import { useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import { CacheProvider } from '@emotion/react';
import { SnackbarProvider } from 'notistack';
import createCache from '@emotion/cache';
import getQueryClient from '@/config/react-query';
import theme from '@/styles/mui/themes';
import UseModalProvider from '@/hooks/useModal/Provider';

interface AllProvidersProps {
  children: React.ReactNode;
}

export function AllProviders({ children }: AllProvidersProps) {
  const [queryClient] = useState(() => getQueryClient());
  const [emotionCache] = useState(() => createCache({ key: 'css', prepend: true }));

  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          autoHideDuration={5000}
          style={{ maxWidth: 300 }}
        >
          <ThemeProvider theme={theme}>
            <StyledEngineProvider enableCssLayer>
              <GlobalStyles styles={`@layer theme, base, mui, components, utilities;`} />
              <UseModalProvider>
                {children}
              </UseModalProvider>
            </StyledEngineProvider>
          </ThemeProvider>
        </SnackbarProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}
