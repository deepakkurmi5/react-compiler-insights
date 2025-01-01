import { Outlet, Navigate, useLocation } from 'react-router';

import { RoutesConfig } from '../routes.config';
import useAuth from '@/hooks/use-auth';

const PrivateOutlet = () => {
  const token = useAuth();
  const location = useLocation();

  if (token) {
    return <Outlet />;
  }

  return <Navigate to={RoutesConfig.login} state={{ from: location }} />;
};

export default PrivateOutlet;
