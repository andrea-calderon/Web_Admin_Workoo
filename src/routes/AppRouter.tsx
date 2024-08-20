import AuthenticatedApp from '@/features/auth/components/pages/AuthenticatedApp';
import LoginPage from '@/features/auth/components/pages/LoginPage';
import RegisterPage from '@/features/auth/components/pages/RegisterPage';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/app/*" element={<AuthenticatedApp />} />
    </Routes>
  </Router>
);

export default AppRouter;
