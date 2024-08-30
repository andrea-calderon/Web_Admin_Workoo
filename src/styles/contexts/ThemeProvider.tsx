import { CssBaseline, ThemeProvider as MUIThemeProvider } from '@mui/material';
import React, { createContext, useContext, useMemo } from 'react';
import { themes } from '../themes/index';


type ThemeContextType = {
  themeMode: 'light' | 'dark';
  toggleTheme: () => void;
};
const ThemeContext = createContext<ThemeContextType>({
  themeMode: 'light',
  toggleTheme: () => {},
});
export const ThemeProvider: React.FC<{ 
  children: React.ReactNode; 
  themeMode: 'light' | 'dark'; 
  toggleTheme: () => void;
}> = ({ children, themeMode, toggleTheme }) => {
  const theme = useMemo(() => themes[themeMode], [themeMode]);
  
  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
export const useTheme = () => useContext(ThemeContext);