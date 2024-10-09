import { baseUrl } from "../../../constants";
import { userToken } from "../../../utils/getToken";
import { apiSlice } from "../../api/apiSlice";

const { token } = userToken();

export const candidateSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addCandidate: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}/candidates/`,
        method: `POST`,
        body: data,
      }),
    }),

    allCandidates: builder.query({
      query: () => {
        return {
          url: `${baseUrl}/candidates/`,
          method: `GET`,
        };
      },
    }),

    getEnCandidates: builder.query({
      query: () => ({
        url: `${baseUrl}/candidates/en`,
        method: `GET`,
      }),
    }),

    getFMCandidates: builder.query({
      query: () => ({
        url: `${baseUrl}/candidates/fm`,
        method: `GET`,
      }),
    }),

    getPresCandidates: builder.query({
      query: () => ({
        url: `${baseUrl}/candidates/pres`,
        method: `GET`,
      }),
    }),

    getVpCandidates: builder.query({
      query: () => ({
        url: `${baseUrl}/candidates/vp`,
        method: `GET`,
      }),
    }),


  }),
});

export const { useAddCandidateMutation, useAllCandidatesQuery, useGetEnCandidatesQuery, useGetFMCandidatesQuery, useGetPresCandidatesQuery, useGetVpCandidatesQuery } = candidateSlice;