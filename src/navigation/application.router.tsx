import { Suspense } from 'react';
import { Routes, Route } from 'react-router';
import { Spinner } from '@nextui-org/react';

import { RoutesConfig } from '@/navigation/routes.config';
import PrivateOutlet from '@/navigation/outlet/private-outlet';
import PublicOutlet from '@/navigation/outlet/public-outlet';

import Login from '@/pages/login';
import Dashboard from '@/components/organisms/dashboard';

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
