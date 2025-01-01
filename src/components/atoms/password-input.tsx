import { Input } from '@nextui-org/react';
import { Eye, EyeOff } from 'lucide-react';

export default function PasswordInput({
  isVisible,
  isPending,
  toggleVisibility,
}: {
  isVisible: boolean;
  isPending: boolean;
  toggleVisibility: () => void;
}) {
  return (
    <Input
      type={isVisible ? 'text' : 'password'}
      name="password"
      disabled={isPending}
      variant="bordered"
      placeholder="password"
      endContent={
        <button
          aria-label="toggle password visibility"
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <Eye className="h-5 w-5 text-default-400 pointer-events-none" />
          ) : (
            <EyeOff className="h-5 w-5 text-default-400 pointer-events-none" />
          )}
        </button>
      }
    />
  );
}
