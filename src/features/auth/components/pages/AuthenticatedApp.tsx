// Librerías externas
import { Box, CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

// Componentes globales
import AuthHeader from '../organisms/AuthHeader';
import AuthSidebar from '../organisms/AuthSidebar';

// Páginas de características específicas
import HomePage from '@/features/auth/components/pages/HomePage';
import DashboardPage from '@/features/dashboard/components/pages/DashboardPage';
import SettingsPage from '@/features/dashboard/components/pages/SettingsPage';

// Páginas internas
import AnalysisPage from './AnalysisPage';
import PaymentsPage from './PaymentsPage';
import QualificationsPage from './QualificationsPage';
import ServicesPage from './ServicesPage';
import SuppliersPage from './SuppliersPage';
import SupportPage from './SupportPage';
import UsersPage from './UsersPage';

import { useThemeContext } from '@/styles/contexts/ThemeProvider';

const AuthenticatedApp: React.FC = () => {
  const { toggleTheme, themeMode } = useThemeContext();
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <AuthHeader toggleTheme={toggleTheme} themeMode={themeMode} />
      <AuthSidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: '240px',
          marginTop: '64px',
          position: 'relative',
        }}
      >
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="suppliers" element={<SuppliersPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="qualifications" element={<QualificationsPage />} />
          <Route path="payments" element={<PaymentsPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="analysis" element={<AnalysisPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default AuthenticatedApp;
