import AuthenticatedApp from '@/features/auth/components/pages/AuthenticatedApp';
import { Box, Button, Container, CssBaseline, Typography } from '@mui/material';
import React, { useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './styles/App.css';
import { ThemeProvider } from './styles/contexts/ThemeProvider';
import i18n from './utils/i18n';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider themeMode={themeMode} toggleTheme={toggleTheme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Navigate to="/app/home" />
                ) : (
                  <Container maxWidth="sm">
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                      minHeight="100vh"
                    >
                      <Typography variant="h2" component="h1" gutterBottom>
                        WORKOO
                      </Typography>

                      <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={handleLogin}
                        sx={{ mt: 2 }}
                      >
                        Login
                      </Button>
                    </Box>
                  </Container>
                )
              }
            />
            <Route
              path="/app/*"
              element={
                isAuthenticated ? (
                  <AuthenticatedApp/>
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default App;

