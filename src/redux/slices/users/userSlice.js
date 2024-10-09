import { baseUrl } from "../../../constants";
import { apiSlice } from "../../api/apiSlice";

export const userSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}/auth/register`,
        method: 'POST',
        body: data,
      }),
    }),

    login: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}/auth/login`,
        method: 'POST',
        body: data,
      }),
    }),

    adminLogin: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}/auth/login/admin`,
        method: `POST`,
        body: data
      }),
    }),

    adminRegister: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}/auth/register/admin`,
        method: `POST`,
        body: data
      }),
    }),

    logout: builder.mutation({
      query: () => ({
        url: `${baseUrl}/auth/logout`,
        method: 'POST',
      }),
    }),

  }),
});

export const { useLoginMutation, useRegistrationMutation, useLogoutMutation, useAdminLoginMutation, useAdminRegisterMutation } = userSlice;