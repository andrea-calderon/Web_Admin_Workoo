import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D0BCFF',
      light: '#F4EEFF',
      dark: '#381E72',
      contrastText: '#000000',
    },
    secondary: {
      main: '#CCC2DC',
      light: '#E8DEF8',
      dark: '#49454F',
      contrastText: '#000000',
    },
    tertiary: {
      main: '#EFB8C8',
      light: '#FFD8E4',
      dark: '#633B48',
      contrastText: '#000000',
    },
    error: {
      main: '#F2B8B5',
      light: '#FFDAD6',
      dark: '#8C1D18',
      contrastText: '#000000',
    },
    background: {
      default: '#1C1B1F',
      paper: '#121212',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#CAC4D0',
    },
  },
});