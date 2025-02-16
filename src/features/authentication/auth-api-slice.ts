import { RootState } from '@/redux/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface User {
  firstName: string;
  lastName: string;
}

export interface UserResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export const authApiSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/',
    prepareHeaders(headers, { getState }) {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<UserResponse, Partial<FormData>>({
      query: (credentials: FormData) => {
        return {
          url: 'login',
          method: 'POST',
          body: credentials,
        };
      },
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => 'protected',
    }),
  }),
});

export const { useLoginMutation, useProtectedMutation } = authApiSlice;
