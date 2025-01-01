import { useReducer } from 'react';
import { Button } from '@nextui-org/react';

import { CounterActionType } from '@/enums';
import { initialState, counterReducer } from '@/reducers/counter-redcuer';

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const increment = () => dispatch({ type: CounterActionType.INCREMENT });

  const decrement = () => dispatch({ type: CounterActionType.DECREMENT });

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-xl font-bold">Welcome to my counter</h1>

      <div className="flex items-center gap-3">
        <Button onPress={increment} size="sm">
          INCREMENT
        </Button>
        <p> {state.count}</p>
        <Button onPress={decrement} size="sm">
          DECREMENT
        </Button>
      </div>
    </div>
  );
};

export default Counter;
