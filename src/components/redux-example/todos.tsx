import { useRef } from 'react';
import { Button, Card, Input } from '@nextui-org/react';
import { Plus, Trash } from 'lucide-react';

import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { addTodo, removeTodo } from '@/features/todo/todo-slice';

const Todos = () => {
  const todos = useAppSelector((state) => state.todos.items);

  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  function hanldeAddTodo() {
    const value = inputRef.current?.value;
    if (!value) return;
    dispatch(addTodo(value));
  }

  return (
    <div className="w-screen flex justify-center">
      <div className="w-[350px]">
        <h1 className="text-lg font-bold">TODO</h1>
        <div className="flex items-center gap-2 mt-3">
          <Input
            type="text"
            name="todo"
            ref={inputRef}
            variant="bordered"
            className="font-semibold text-xl"
          />
          <Button onPress={hanldeAddTodo} variant="bordered">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {todos?.map((todo) => {
            return (
              <Card
                className="p-3 flex flex-row rounded-lg justify-between items-center gap-2"
                key={todo.id}
              >
                <p className="text-sm">{todo.value}</p>
                <Trash
                  className="h-4 w-4 text-red-900 cursor-pointer"
                  onClick={() => dispatch(removeTodo(todo.id))}
                />
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todos;
