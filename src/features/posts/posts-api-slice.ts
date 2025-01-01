import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Posts {
  id: number;
  title: string;
  body: string;
}

export const postsSlice = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    fetchPosts: builder.query<Posts[], void>({
      query: () => `/posts`,
    }),
    gePostById: builder.query<Posts[], number | void>({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { useFetchPostsQuery, useGePostByIdQuery } = postsSlice;
