import { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { colors, MainContent, ProfileAvatar, ProfileName } from '../../styles'
import Button from '../Button'
import UserAvatar from '../UserAvatar'
import { formatRelativeDate, getFirstLetterAndColor } from '../../utils'
import {
  useGetPostQuery,
  useGetPostCommentsQuery,
  useCreatePostCommentMutation,
  useLikePostMutation,
  PostComment,
  useFollowUserMutation,
  useUnfollowUserMutation
} from '../../services/posts'

import shareIcon from '../../assets/share.svg'
import heartIcon from '../../assets/heart.svg'
import heartIconRed from '../../assets/heartRed.svg'
import statisticIcon from '../../assets/statistic.svg'
import commentsIcon from '../../assets/comments.svg'
import arrow from '../../assets/arrow.svg'

import * as S from './styles'
import { Loader2 } from '../Loaders'

const backendUrl = 'http://127.0.0.1:8000'

const Post = () => {
  const [text, setText] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const navigate = useNavigate()
  const { id } = useParams()
  const postId = Number(id)

  const { data: post, refetch: refetchPost } = useGetPostQuery(postId)
  const { data: commentsData, refetch } = useGetPostCommentsQuery(postId)
  const [createComment] = useCreatePostCommentMutation()
  const [likePost] = useLikePostMutation()
  const [followUser] = useFollowUserMutation()
  const [unfollowUser] = useUnfollowUserMutation()
  const [loadingFollow, setLoadingFollow] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setText(value)

    const textarea = textareaRef.current
    if (textarea) {
      textarea.style.height = '28px'
      textarea.style.height = `${textarea.scrollHeight}px`
    }
  }

  const handlePostComment = async () => {
    if (!text.trim() || !post) return

    const result = await createComment({ postId: post.id, content: text })
    if (result && !('error' in result)) {
      setText('')
      if (textareaRef.current) {
        textareaRef.current.style.height = '28px'
      }
      refetch()
    }
  }

  const handleLike = (postId: number) => {
    likePost(postId)
  }

  if (!post) return <Loader2 />

  const postAvatar = getFirstLetterAndColor(post.username, post.user)

  const commentsList = Array.isArray(commentsData) ? commentsData : commentsData?.results || []

  return (
    <MainContent>
      <S.TopBar>
        <img src={arrow} onClick={() => navigate('/feed')} alt="Voltar" />
        <p>Post</p>
      </S.TopBar>

      <S.Content>
        <S.Section className="display align" style={{ justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {post.profile_image ? (
              <img
                src={post.profile_image ? post.profile_image : '/default-avatar.png'}
                alt="Avatar"
                style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }}
              />
            ) : (
              <ProfileAvatar style={{ backgroundColor: postAvatar.avatarColor }}>
                {postAvatar.firstLetter}
              </ProfileAvatar>
            )}
            <ProfileName>{post.username}</ProfileName>
          </div>
          {post.user !== undefined && post.is_following !== undefined && (
            <Button
              title={post.is_following ? 'Deixar de seguir' : 'Seguir'}
              style={{ fontSize: 12, padding: '4px 12px', minWidth: 0 }}
              bgColor={post.is_following ? '#222' : '#1D9BF0'}
              textColor={post.is_following ? '#fff' : '#fff'}
              disabled={loadingFollow}
              onClick={async (e) => {
                e.stopPropagation()
                setLoadingFollow(true)
                if (post.is_following && post.follow_id) {
                  await unfollowUser(post.follow_id)
                } else {
                  await followUser(post.user)
                }
                await refetchPost()
                setLoadingFollow(false)
              }}>
              {post.is_following ? 'Seguindo' : 'Seguir'}
            </Button>
          )}
        </S.Section>

        <S.Section>
          <S.Meta>
            <p>{post.content}</p>
            <p className="date">{formatRelativeDate(post.created_at)}</p>
          </S.Meta>
        </S.Section>

        <S.Section>
          <S.Actions>
            <li>
              <img className="hover-action" src={commentsIcon} alt="Comentários" />
              <span>{post.comments_count}</span>
            </li>
            <li>
              <img src={shareIcon} alt="Compartilhamentos" />
              <span>0</span>
            </li>
            <li>
              <img
                className="hover-action"
                onClick={() => handleLike(post.id)}
                src={post.is_liked ? heartIconRed : heartIcon}
                alt="Curtidas"
              />
              <span>{post.likes_count}</span>
            </li>
            <li>
              <img src={statisticIcon} alt="Visualizações" />
              <span>0</span>
            </li>
          </S.Actions>
        </S.Section>

        <S.Section className="display padding">
          <UserAvatar />
          <S.InputComment>
            <textarea
              ref={textareaRef}
              value={text}
              onInput={handleChange}
              placeholder="Postar sua resposta"
              maxLength={220}></textarea>
            <Button
              onClick={handlePostComment}
              type="button"
              bgColor={colors.black}
              title="Responder"
              textColor={colors.white}
              disabled={text.length < 1}>
              Responder
            </Button>
          </S.InputComment>
        </S.Section>
      </S.Content>

      {commentsList.map((comment: PostComment) => {
        const { avatarColor, firstLetter } = getFirstLetterAndColor(comment.username, comment.user)
        return (
          <S.Content className="display" key={comment.id}>
            <S.Section className="padding-tp-bt">
              <ProfileAvatar style={{ backgroundColor: avatarColor }}>{firstLetter}</ProfileAvatar>
            </S.Section>
            <S.Section className="padding-tp-bt">
              <div className="display">
                <ProfileName>{comment.username}</ProfileName>
                <p className="date">{'· ' + formatRelativeDate(comment.created_at)}</p>
              </div>
              <S.CommentContent className="padding-left margin-tp">
                {comment.content}
              </S.CommentContent>
            </S.Section>
          </S.Content>
        )
      })}
    </MainContent>
  )
}

export default Post
