import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'sonner';

interface Todo {
  id: number;
  value: string;
}

interface TodoState {
  items: Todo[];
}

let id = 0;

const initialState: TodoState = {
  items: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.items.push({ id: id++, value: action.payload });
      toast.success('Successfully added');
    },
    removeTodo(state, action: PayloadAction<number>) {
      const newTodoList = state.items.filter(
        (item) => item.id !== action.payload
      );
      state.items = [...newTodoList];
      toast.success('Successfully removed');
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
