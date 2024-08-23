import DashboardPage from '@/features/dashboard/components/pages/DashboardPage';
import SettingsPage from '@/features/dashboard/components/pages/SettingsPage';
import { Route, Routes } from 'react-router-dom';
import AuthSidebar from '../organisms/AuthSidebar';
import HomePage from './HomePage';

const AuthenticatedApp = () => {
  return (
    <div>
      
      <div style={{ display: 'flex' }}>
        <AuthSidebar />
        <main>
          <Routes>
            <Route path="home" element={<HomePage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="settings" element={<SettingsPage />} />

          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AuthenticatedApp;
