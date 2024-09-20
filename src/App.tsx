// Librerías externas
import { Box, Container, CssBaseline } from '@mui/material';
import React, { useState } from 'react';
import { I18nextProvider } from 'react-i18next';
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';

// Componentes globales
import Login from '@/features/auth/components/organisms/Login';
import AuthenticatedApp from '@/features/auth/components/pages/AuthenticatedApp';
import Signup from './features/auth/components/organisms/Signup';

// Configuración de estilos
import './styles/App.css';
import { ThemeProvider } from './styles/contexts/ThemeProvider';
import i18n from './utils/i18n';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
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
                  <Container>
                    <Box>
                      <Login onLogin={handleLogin} />
                    </Box>
                  </Container>
                )
              }
            />
            <Route
              path="/app/*"
              element={
                isAuthenticated ? <AuthenticatedApp /> : <Navigate to="/" />
              }
            />
            <Route path="/register" element={<Signup />} />
          </Routes>
        </Router>
      </ThemeProvider>
      </Provider>
    </I18nextProvider>
  );
};

export default App;
