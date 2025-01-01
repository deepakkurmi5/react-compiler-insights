import { useAppSelector } from '@/redux/hook';

export default function useAuth() {
  const token = useAppSelector((state) => state.auth.token);
  return token;
}
