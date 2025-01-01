import { Button, Card, Spinner } from '@nextui-org/react';

import { useFetchBreedsQuery } from '@/features/dogs/dogs-api-slice';

const Bogs = () => {
  const { data, isLoading, refetch } = useFetchBreedsQuery(10);

  if (isLoading) {
    return <Spinner size="sm" />;
  }

  return (
    <div className="flex flex-col gap-4">
      <Button onPress={() => refetch()}>Refetch</Button>
      {data?.map((bog) => {
        return (
          <Card className="p-2" key={bog.id}>
            <p>{bog.name}</p>
          </Card>
        );
      })}
    </div>
  );
};

export default Bogs;
