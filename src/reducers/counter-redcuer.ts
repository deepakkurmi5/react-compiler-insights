import { CounterActionType } from '@/enums';

interface State {
  count: number;
}

type CounterAction =
  | { type: CounterActionType.INCREMENT }
  | { type: CounterActionType.DECREMENT };

export const initialState: State = { count: 0 };

export function counterReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return { count: state.count + 1 };

    case CounterActionType.DECREMENT:
      return { count: state.count - 1 };

    default:
      throw new Error('Unknown action');
  }
}
