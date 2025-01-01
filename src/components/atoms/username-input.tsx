import { Input } from '@nextui-org/react';

export default function UsernameInput({ isPending }: { isPending: boolean }) {
  return (
    <Input
      isClearable
      type="text"
      disabled={isPending}
      name="username"
      variant="bordered"
      placeholder="username"
    />
  );
}
