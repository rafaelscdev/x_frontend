import api from './api'

export interface Post {
  id: number
  username: string
  user: number
  content: string
  created_at: string
  comments_count: number
  likes_count: number
  is_liked: boolean
  is_following?: boolean
  follow_id?: number
  profile_image?: string
}

export interface PostResponse {
  count: number
  next: string | null
  previous: string | null
  results: Post[]
}

export interface PostComment {
  profile_image: string | undefined
  id: number
  username: string
  user: number
  content: string
  created_at: string
}

export interface PostCommentResponse {
  count: number
  next: string | null
  previous: string | null
  results: PostComment[]
}

export const postsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<PostResponse, void>({
      query: () => 'posts/',
      providesTags: ['Posts']
    }),
    getPost: builder.query<Post, number>({
      query: (id: number) => `posts/${id}/`,
      providesTags: ['Posts']
    }),
    getFollowingPosts: builder.query<PostResponse, void>({
      query: () => 'posts/following/',
      providesTags: ['Posts']
    }),
    getMyPosts: builder.query<PostResponse, void>({
      query: () => 'posts/my_posts/',
      providesTags: ['Posts']
    }),
    getLikedPosts: builder.query<PostResponse, void>({
      query: () => 'posts/liked/',
      providesTags: ['Posts']
    }),
    createPost: builder.mutation<Post, string>({
      query: (content: string) => ({
        url: 'posts/',
        method: 'POST',
        body: { content }
      }),
      invalidatesTags: ['Posts']
    }),
    updatePost: builder.mutation<Post, { id: number; content: string }>({
      query: ({ id, content }) => ({
        url: `posts/${id}/`,
        method: 'PUT',
        body: { content }
      }),
      invalidatesTags: ['Posts']
    }),
    deletePost: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `posts/${id}/`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Posts']
    }),
    likePost: builder.mutation<void, number>({
      query: (id: number) => ({
        url: `posts/${id}/like/`,
        method: 'POST'
      }),
      invalidatesTags: ['Posts']
    }),
    getPostComments: builder.query<PostCommentResponse, number>({
      query: (postId: number) => `posts/${postId}/comments/`,
      providesTags: (result, error, postId) => [{ type: 'Posts', id: postId }]
    }),
    getPostComment: builder.query<PostComment, { postId: number; commentId: number }>({
      query: ({ postId, commentId }) => `posts/${postId}/comments/${commentId}/`,
      providesTags: ['Posts']
    }),
    createPostComment: builder.mutation<PostComment, { postId: number; content: string }>({
      query: ({ postId, content }) => ({
        url: `posts/${postId}/comments/`,
        method: 'POST',
        body: { content }
      }),
      invalidatesTags: (result, error, { postId }) => [{ type: 'Posts', id: postId }]
    }),
    updatePostComment: builder.mutation<
      PostComment,
      { postId: number; commentId: number; content: string }
    >({
      query: ({ postId, commentId, content }) => ({
        url: `posts/${postId}/comments/${commentId}/`,
        method: 'PUT',
        body: { content }
      }),
      invalidatesTags: ['Posts']
    }),
    deletePostComment: builder.mutation<void, { postId: number; commentId: number }>({
      query: ({ postId, commentId }) => ({
        url: `posts/${postId}/comments/${commentId}/`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Posts']
    }),
    followUser: builder.mutation<void, number>({
      query: (userId: number) => ({
        url: `follows/`,
        method: 'POST',
        body: { following: userId }
      }),
      invalidatesTags: ['Posts', 'Users']
    }),
    unfollowUser: builder.mutation<void, number>({
      query: (followId: number) => ({
        url: `follows/${followId}/`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Posts', 'Users']
    })
  })
})

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useGetFollowingPostsQuery,
  useGetMyPostsQuery,
  useGetLikedPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
  useLikePostMutation,
  useGetPostCommentsQuery,
  useGetPostCommentQuery,
  useCreatePostCommentMutation,
  useUpdatePostCommentMutation,
  useDeletePostCommentMutation,
  useFollowUserMutation,
  useUnfollowUserMutation
} = postsApi
