import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { colors, MainContent, ProfileAvatar, ProfileName } from '../../styles'
import { formatRelativeDate, getFirstLetterAndColor } from '../../utils'
import Button from '../Button'

import * as S from './styles'
import { Loader2 } from '../Loaders'
import UserAvatar from '../UserAvatar'
import {
  useCreatePostMutation,
  useGetPostsQuery,
  useGetFollowingPostsQuery,
  useLikePostMutation,
  type Post
} from '../../services/posts'

const backendUrl = 'http://127.0.0.1:8000'

const Posts = () => {
  const navigate = useNavigate()
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const [activeTab, setActiveTab] = useState<'forYou' | 'following'>('forYou')
  const [createPost] = useCreatePostMutation()
  const [likePost] = useLikePostMutation()
  const { data: postsData, isLoading: isLoadingForYou } = useGetPostsQuery()
  const { data: followingPostsData, isLoading: isLoadingFollowing } = useGetFollowingPostsQuery()

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setText(value)

    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = '28px'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }

  const handlePost = async () => {
    if (!text.trim()) return

    try {
      await createPost(text).unwrap()
      setText('')
      if (textareaRef.current) {
        textareaRef.current.style.height = '28px'
      }
    } catch (error) {
      console.error('Erro ao criar post:', error)
    }
  }

  const handleLike = (postId: number) => {
    likePost(postId)
  }

  const handlePostClick = (postId: number) => {
    navigate(`/post/${postId}`)
  }

  const isLoading = activeTab === 'forYou' ? isLoadingForYou : isLoadingFollowing
  const posts = activeTab === 'forYou' ? postsData?.results : followingPostsData?.results

  return (
    <MainContent>
      <S.SelectPostsWrapper>
        <S.SelectPosts>
          <button
            className={activeTab === 'forYou' ? 'select-button' : ''}
            type="button"
            onClick={() => setActiveTab('forYou')}>
            Para você
          </button>
          <button
            className={activeTab === 'following' ? 'select-button' : ''}
            type="button"
            onClick={() => setActiveTab('following')}>
            Seguindo
          </button>
        </S.SelectPosts>
      </S.SelectPostsWrapper>

      <S.Container>
        <S.Sections className="width-profile">
          <UserAvatar />
        </S.Sections>
        <S.Sections className="text-width">
          <S.InputWrapper>
            <textarea
              ref={textareaRef}
              value={text}
              onInput={handleChange}
              placeholder="O que está acontecendo?"
              maxLength={220}
            />
          </S.InputWrapper>
          <div className="wrapper">
            <Button
              onClick={handlePost}
              type="button"
              bgColor={colors.black}
              title="Postar"
              textColor={colors.white}
              disabled={text.length < 1}>
              Postar
            </Button>
          </div>
        </S.Sections>
      </S.Container>

      {isLoading ? (
        <Loader2 />
      ) : (
        posts?.map((post: Post) => (
          <S.Container key={post.id} onClick={() => handlePostClick(post.id)}>
            <S.Sections className="width-profile">
              {post.profile_image ? (
                <img
                  src={
                    post.profile_image
                      ? (post.profile_image.startsWith('http')
                          ? post.profile_image
                          : post.profile_image)
                      : '/default-avatar.png'
                  }
                  alt="Avatar"
                  style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }}
                />
              ) : (
                <ProfileAvatar
                  style={{
                    backgroundColor: getFirstLetterAndColor(post.username, post.user).avatarColor
                  }}>
                  {getFirstLetterAndColor(post.username, post.user).firstLetter}
                </ProfileAvatar>
              )}
            </S.Sections>
            <S.Sections className="text-width">
              <S.Header>
                <ProfileName>{post.username}</ProfileName>
                <S.Date>{formatRelativeDate(post.created_at)}</S.Date>
              </S.Header>
              <S.Content>{post.content}</S.Content>
              <S.Actions>
                <S.ActionButton onClick={(e) => e.stopPropagation()}>
                  <S.ActionIcon>💬</S.ActionIcon>
                  <span>{post.comments_count}</span>
                </S.ActionButton>
                <S.ActionButton
                  onClick={(e) => {
                    e.stopPropagation()
                    handleLike(post.id)
                  }}>
                  <S.ActionIcon>{post.is_liked ? '❤️' : '🤍'}</S.ActionIcon>
                  <span>{post.likes_count}</span>
                </S.ActionButton>
              </S.Actions>
            </S.Sections>
          </S.Container>
        ))
      )}
    </MainContent>
  )
}

export default Posts
