import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router';
import { Spinner } from '@nextui-org/react';

import { RoutesConfig } from '@/navigation/routes.config';
import PrivateOutlet from '@/navigation/outlet/private-outlet';
import PublicOutlet from '@/navigation/outlet/public-outlet';

const Login = lazy(() => import('@/pages/login'));
const Dashboard = lazy(() => import('@/components/organisms/dashboard'));

export default function ApplicationRouter() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route element={<PublicOutlet />}>
          <Route path={RoutesConfig.login} element={<Login />} />
        </Route>
        <Route element={<PrivateOutlet />}>
          <Route path={RoutesConfig.dashboard} element={<Dashboard />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
