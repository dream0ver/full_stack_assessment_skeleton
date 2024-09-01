import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const baseUrl = `${import.meta.env.VITE_API_BASE_URL}/`

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => `user/find-all`,
            transformResponse: (response) => response.users
        }),
        getHomesByUserId: builder.query({
            query: (user_id) => {
                return `home/find-by-user?user_id=${user_id}`
            },
            providesTags: ['getHomesByUserId'],
        }),
        getUsersByHomeId: builder.query({
            query: (home_id) => {
                return `/user/find-by-home?home_id=${home_id}`
            },
            transformResponse: (response) => {
                return response.users.map(user => user.user_id)
            },
        }),
        editUsers: builder.mutation({
            query: (payload) => ({
                url: `/home/update-users`,
                method: 'PATCH',
                body: {
                    interestedBy: payload.latest,
                    interestedByInitial: payload.initial,
                    home_id: payload.home_id
                },
            }),
            invalidatesTags: ['getHomesByUserId'],
        })
    }),
})

export const { useGetAllUsersQuery, useGetHomesByUserIdQuery, useGetUsersByHomeIdQuery, useEditUsersMutation } = api