import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth/authSlice';
import adminAuthSlie from './slices/auth/adminAuthSlice'
import { apiSlice } from './api/apiSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    adminAuth: adminAuthSlie,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      apiSlice.middleware
    ),
  devTools: true,
});
