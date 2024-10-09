import { baseUrl } from '../../../constants';
import { userToken } from '../../../utils/getToken';
import { apiSlice } from '../../api/apiSlice';

const { token } = userToken();

export const voteSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        vote: builder.mutation({
            query: (candidate_id) => ({
                url: `${baseUrl}/vote/${candidate_id}`,
                method: `POST`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }),

    })
});

export const { useVoteMutation } = voteSlice;