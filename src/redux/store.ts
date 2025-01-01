import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '@/features/counter/counter-slice';
import authReducer from '@/features/authentication/auth-slice';
import { dogsSlice } from '@/features/dogs/dogs-api-slice';
import { postsSlice } from '@/features/posts/posts-api-slice';
import todosReducer from '@/features/todo/todo-slice';
import { authApiSlice } from '@/features/authentication/auth-api-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    todos: todosReducer,
    [dogsSlice.reducerPath]: dogsSlice.reducer,
    [postsSlice.reducerPath]: postsSlice.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      dogsSlice.middleware,
      postsSlice.middleware,
      authApiSlice.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
