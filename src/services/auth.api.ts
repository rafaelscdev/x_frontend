import api from './api'

type UserPayload = {
  username: string
  password: string
  email?: string
  first_name?: string
  last_name?: string
}

type TokenResponse = {
  access: string
}

export type RegisterResponse = {
  id: number
  username: string
  email: string
  first_name: string
  last_name: string
  profile_image?: string
}

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<RegisterResponse, UserPayload>({
      query: (body) => ({
        url: 'users/',
        method: 'POST',
        body
      })
    }),
    login: builder.mutation<TokenResponse, UserPayload>({
      query: (body) => ({
        url: 'token/',
        method: 'POST',
        body
      })
    }),
    getCurrentUser: builder.query<RegisterResponse, void>({
      query: () => 'users/me/'
    }),
    // Aqui está a correção:
    updateUser: builder.mutation<RegisterResponse, FormData>({
      query: (formData) => ({
        url: 'users/me/',
        method: 'PATCH',
        body: formData
      }),
      invalidatesTags: ['Users']
    })
  }),
  overrideExisting: false
})

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetCurrentUserQuery,
  useLazyGetCurrentUserQuery,
  useUpdateUserMutation
} = authApi
