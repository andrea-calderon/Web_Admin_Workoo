import AuthenticatedApp from '@/features/auth/components/pages/AuthenticatedApp';
import InitialPage from '@/features/auth/components/pages/InitialPage';
import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const PrivateRoute = ({
  isAuthenticated,
  children,
}: {
  isAuthenticated: boolean;
  children: JSX.Element;
}) => {
  return isAuthenticated ? children : <Navigate to="/" />;
};

const AppRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Routes>
      <Route path="/login" element={<InitialPage onLogin={handleLogin} />} />
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
