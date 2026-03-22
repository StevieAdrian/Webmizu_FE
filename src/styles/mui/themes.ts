'use client';

import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteColor {
    100?: string;
    400?: string;
  }
  interface SimplePaletteColorOptions {
    100?: string;
    400?: string;
  }
  interface TypographyVariants {
    error: React.CSSProperties;
    label: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    error?: React.CSSProperties;
    label?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    error: true;
    label: true;
  }
}

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: `'Open Sans', sans-serif`,
    error: {
      color: '#D12119',
      fontSize: 12,
    },
    label: {
      color: '#333333',
      fontSize: 12,
      marginBottom: 8,
    },
  },
  palette: {
    background: {
      default: '#EAEAEA',
    },
    primary: {
      main: '#F18700',
      100: '#F39F33',
      contrastText: '#fff',
    },
    secondary: {
      main: '#999999',
      400: '#9A9A9A',
      100: '#B3B3B3',
      contrastText: '#fff',
    },
    error: {
      main: '#9F041B',
      100: '#F5515F',
      contrastText: '#fff',
    },
    warning: {
      main: '#028ED5',
      100: '#026CA2',
      contrastText: '#fff',
    },
    info: {
      main: '#fff',
      100: '#BBBBBB',
      contrastText: '#000',
    },
  },
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          '&.Mui-disabled': {
            color: '#B3B3B3',
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 42,
          height: 26,
          padding: 0,
        },
        switchBase: {
          padding: 0,
          margin: 2,
          '&.Mui-checked': {
            transform: 'translateX(16px)',
            '& + .MuiSwitch-track': {
              opacity: 1,
            },
            '& .MuiSwitch-thumb': {
              color: '#fff',
            },
          },
        },
        thumb: {
          color: '#fff',
          boxSizing: 'border-box',
          width: 22,
          height: 22,
        },
        track: {
          borderRadius: 50,
          backgroundColor: '#9A9A9A',
          opacity: 1,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          '&::before': {
            borderBottom: 'none !important',
          },
          '&::after': {
            borderBottom: 'none !important',
          },
          '&.Mui-error': {
            borderColor: '#D12119',
            backgroundColor: '#FFDBD9',
          },
          '&.Mui-disabled': {
            backgroundColor: '#D6D6D6',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
        notchedOutline: {
          borderColor: 'transparent',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#000',
          cursor: 'pointer',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          boxShadow: 'none',
          textTransform: 'none' as const,
          '&:hover': {
            boxShadow: 'none',
          },
          '&.Mui-disabled': {
            backgroundColor: '#B3B3B3',
            color: '#fff',
          },
        },
        sizeLarge: {
          height: 44,
        },
        sizeMedium: {
          height: 40,
        },
        sizeSmall: {
          height: 24,
        },
        containedPrimary: {
          background: 'linear-gradient(180deg, #F39F33 0%, #F18700 100%)',
          '&:hover': {
            background: 'linear-gradient(180deg, #F18700 0%, #F39F33 100%)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(180deg, #B3B3B3 0%, #999999 100%)',
          '&:hover': {
            background: 'linear-gradient(180deg, #999999 0%, #B3B3B3 100%)',
          },
        },
        containedError: {
          background: 'linear-gradient(180deg, #F5515F 0%, #9F041B 100%)',
          '&:hover': {
            background: 'linear-gradient(180deg, #9F041B 0%, #F5515F 100%)',
          },
        },
        containedWarning: {
          background: 'linear-gradient(180deg, #026CA2 0%, #028ED5 100%)',
          '&:hover': {
            background: 'linear-gradient(180deg, #028ED5 0%, #026CA2 100%)',
          },
        },
        containedInfo: {
          background: 'linear-gradient(180deg, #BBBBBB 0%, #fff 100%)',
          '&:hover': {
            background: 'linear-gradient(180deg, #fff 0%, #BBBBBB 100%)',
          },
        },
      },
    },
  },
});

export default theme;
