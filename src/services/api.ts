import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://x-clone-api-94920bbdaaf8.herokuapp.com/api/',
    prepareHeaders: (headers, { endpoint }) => {
      const token = localStorage.getItem('access_token')
      if (token && endpoint !== 'register' && endpoint !== 'login') {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  tagTypes: ['Posts', 'Users'],
  endpoints: () => ({})
})

export default api
