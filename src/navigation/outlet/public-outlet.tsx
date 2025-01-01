import { Outlet, Navigate, useLocation } from 'react-router';

import { RoutesConfig } from '../routes.config';
import useAuth from '@/hooks/use-auth';

const PublicOutlet = () => {
  const token = useAuth();
  const location = useLocation();

  if (!token) {
    return <Outlet />;
  }

  return <Navigate to={RoutesConfig.dashboard} state={{ from: location }} />;
};

export default PublicOutlet;
