import api from './api'

export interface User {
  id: number
  username: string
  email: string
  first_name: string
  last_name: string
  is_following: boolean
  follow_id?: number
  posts_count: number
  followers_count: number
  following_count: number
}

export interface UserResponse {
  count: number
  next: string | null
  previous: string | null
  results: User[]
}

export const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query<UserResponse, void>({
      query: () => 'users/',
      providesTags: ['Users']
    }),
    getUser: builder.query<User, number>({
      query: (id: number) => `users/${id}/`,
      providesTags: ['Users']
    }),
    followUser: builder.mutation<void, number>({
      query: (userId: number) => ({
        url: `follows/`,
        method: 'POST',
        body: { following: userId }
      }),
      invalidatesTags: ['Users']
    }),
    unfollowUser: builder.mutation<void, number>({
      query: (followId: number) => ({
        url: `follows/${followId}/`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Users']
    })
  })
})

export const {
  useGetAllUsersQuery,
  useGetUserQuery,
  useFollowUserMutation,
  useUnfollowUserMutation
} = usersApi
