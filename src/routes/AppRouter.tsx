import InitialPage from '@/features/auth/components/pages/InitialPage';

import { Navigate, Route, Routes } from 'react-router-dom';
import AuthenticatedApp from './AuthenticatedApp';

const PrivateRoute = ({
  isAuthenticated,
  children,
}: {
  isAuthenticated: boolean;
  children: JSX.Element;
}) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};

const AppRouter: React.FC<{
  isAuthenticated: boolean;
  onLogin: () => void;
}> = ({ isAuthenticated, onLogin }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={isAuthenticated ? '/app/home' : '/login'} />}
      />
      <Route path="/login" element={<InitialPage onLogin={onLogin} />} />
      <Route
        path="/app/*"
        element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <AuthenticatedApp />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
