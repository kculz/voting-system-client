import { baseUrl } from "../../../constants";
import { userToken } from "../../../utils/getToken";
import { apiSlice } from "../../api/apiSlice";

const { token } = userToken();

export const studentSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addStudent: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}/users/`,
        method: `POST`,
        body: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    allStudents: builder.query({
      query: () => ({
        url: `${baseUrl}/users/`,
        method: `GET`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const { useAddStudentMutation, useAllStudentsQuery } = studentSlice;