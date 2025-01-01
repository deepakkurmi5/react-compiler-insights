import { useNavigate } from 'react-router';
import { Button } from '@nextui-org/react';

import { useAppDispatch } from '@/redux/hook';
import { logout } from '@/features/authentication/auth-slice';
import { RoutesConfig } from '@/navigation/routes.config';
import { toast } from 'sonner';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  function handleLogout() {
    dispatch(logout());
    navigation(`${RoutesConfig.login}`);
    toast.success('Logout Successfully');
  }

  return (
    <div>
      <Button onPress={handleLogout}>Logout</Button>
    </div>
  );
};

export default Dashboard;
