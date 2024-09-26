// Librerías externas
import { CssBaseline } from '@mui/material';
import React, { useState } from 'react';
import { I18nextProvider } from 'react-i18next';

// Componentes globales
import AppRouter from './routes/AppRouter';

// Configuración de estilos
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import './styles/App.css';
import { ThemeProvider } from './styles/contexts/ThemeProvider';
import i18n from './utils/i18n';

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
          <AppRouter isAuthenticated={isAuthenticated} onLogin={handleLogin} />
        </ThemeProvider>
      </Provider>
    </I18nextProvider>
  );
};

export default App;
