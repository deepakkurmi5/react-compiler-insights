import { Button } from '@nextui-org/react';

import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { incremented, decremented } from '@/features/counter/counter-slice';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-bold">Welcome to my counter</h1>

      <div className="flex items-center gap-3">
        <Button onPress={() => dispatch(decremented())} size="sm">
          DECREMENT
        </Button>
        <p className="text-black"> {count}</p>
        <Button onPress={() => dispatch(incremented())} size="sm">
          INCREMENT
        </Button>
      </div>
    </div>
  );
};

export default Counter;
