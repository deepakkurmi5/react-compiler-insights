import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import EnvConfig from '@/config/env-config';
import apiConfig from '@/config/api-config';

interface Breed {
  id: number;
  name: string;
}

export const dogsSlice = createApi({
  reducerPath: 'dogApi',
  baseQuery: fetchBaseQuery({
    baseUrl: EnvConfig.Endpoint,
    prepareHeaders(headers) {
      headers.set('x-api-key', EnvConfig.DogsApiKey);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    fetchBreeds: builder.query<Breed[], number | void>({
      query: (limit = 10) => `${apiConfig.getBreeds}?limit=${limit}`,
    }),
  }),
});

export const { useFetchBreedsQuery } = dogsSlice;
