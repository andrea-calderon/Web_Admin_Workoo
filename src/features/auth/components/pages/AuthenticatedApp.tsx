import DashboardPage from '@/features/dashboard/components/pages/DashboardPage';
import SettingsPage from '@/features/dashboard/components/pages/SettingsPage';
import { Route, Routes } from 'react-router-dom';
import AuthHeader from '../organisms/AuthHeader';
import AuthSidebar from '../organisms/AuthSidebar';

const AuthenticatedApp = () => {
  return (
    <div>
      <AuthHeader />
      <div style={{ display: 'flex' }}>
        <AuthSidebar />
        <main>
          <Routes>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="settings" element={<SettingsPage />} />
            {/* Agrega más rutas aquí según sea necesario */}
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AuthenticatedApp;
