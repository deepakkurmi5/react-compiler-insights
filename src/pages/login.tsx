import { useActionState, useState } from 'react';
import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';

import { RoutesConfig } from '@/navigation/routes.config';
import UsernameInput from '@/components/atoms/username-input';
import PasswordInput from '@/components/atoms/password-input';
import { useLoginMutation } from '@/features/authentication/auth-api-slice';

export default function Login() {
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  const [_state, formAction, isPending] = useActionState(handleForm, undefined);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  async function handleForm(_preState: unknown, formdData: FormData) {
    const user = await login(formdData);
    if (user?.data) {
      localStorage.setItem('auth', JSON.stringify(user?.data));
      toast.success('Successfully Logged In');
      navigate(`${RoutesConfig.dashboard}`);
    }
  }

  return (
    <section>
      <h1 className="text-2xl font-semibold">Login</h1>
      <div className="mt-4">
        <form action={formAction}>
          <div className="flex flex-col gap-2">
            <UsernameInput isPending={isPending} />
            <PasswordInput
              isPending={isPending}
              isVisible={isVisible}
              toggleVisibility={toggleVisibility}
            />
            <Button
              type="submit"
              color="primary"
              isLoading={isPending}
              disabled={isPending}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
