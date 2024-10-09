import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { apiUrl } from '../../constants';

const baseQuery = fetchBaseQuery({
  baseUrl: apiUrl,
  error: {
    transform: (error, { getState, dispatch, getCacheEntry }) => {
      console.error(error);
      return error;
    },
  },
  retry: (failureCount, error) => {
    if (error.status === 404 || failureCount > 3) {
      return false;
    }
    return true;
  },
  refetchOnReconnect: true,
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ['users', 'profile', 'profile-details', 'votes', 'candidates'],
  endpoints: (builder) => ({}),
});
