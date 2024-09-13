import { createTheme } from '@mui/material/styles';
import { textTheme } from './textTheme';


export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6750A4',
      light: '#D0BCFF',
      dark: '#21005D',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#625B71',
      light: '#CCC2DC',
      dark: '#1D192B',
      contrastText: '#FFFFFF',
    },
    tertiary: {
      main: '#7D5260',
      light: '#EFB8C8',
      dark: '#31111D',
      contrastText: '#FFFFFF',
    },
    error: {
      main: '#B3261E',
      light: '#F2B8B5',
      dark: '#601410',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFBFE',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',
      secondary: '#49454F',
    },
  },
  typography: {
    ...textTheme,
  },
});
