import { useEffect } from 'react';

import ApplicationRouter from '@/navigation/application.router';
import { checkAuth } from '@/features/authentication/auth-slice';
import { useAppDispatch } from './redux/hook';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, []);

  return (
    <div className="container mx-auto p-4">
      <ApplicationRouter />
    </div>
  );
}

export default App;
