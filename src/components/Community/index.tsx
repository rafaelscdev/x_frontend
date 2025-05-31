import {
  useFollowUserMutation,
  useGetAllUsersQuery,
  useUnfollowUserMutation,
  type User
} from '../../services/users'
import { useGetCurrentUserQuery } from '../../services/auth.api'

import { ProfileAvatar, ProfileName, colors } from '../../styles'
import Button from '../Button'
import * as S from './styles'

import { getFirstLetterAndColor } from '../../utils'

const Community = () => {
  const { data: usersData } = useGetAllUsersQuery()
  const { data: currentUser } = useGetCurrentUserQuery()
  const [followUser] = useFollowUserMutation()
  const [unfollowUser] = useUnfollowUserMutation()

  const handleFollow = (user: User) => {
    if (user.is_following && user.follow_id) {
      unfollowUser(user.follow_id)
    } else {
      followUser(user.id)
    }
  }

  const suggestedUsers =
    usersData?.results?.filter((user: User) => user.id !== currentUser?.id) || []

  return (
    <S.Container>
      <S.TitleSection>Comunidade</S.TitleSection>
      <S.ProfileList>
        {suggestedUsers.map((user: User) => {
          const { avatarColor, firstLetter } = getFirstLetterAndColor(user.username, user.id)

          return (
            <S.Profile key={`user-${user.id}`}>
              <div>
                <ProfileAvatar style={{ backgroundColor: avatarColor }}>
                  {firstLetter}
                </ProfileAvatar>
                <ProfileName>{user.username}</ProfileName>
              </div>
              <Button
                title={user.is_following ? 'Seguindo' : 'Seguir'}
                bgColor={colors.black}
                textColor={colors.white}
                onClick={() => handleFollow(user)}>
                {user.is_following ? 'Seguindo' : 'Seguir'}
              </Button>
            </S.Profile>
          )
        })}
      </S.ProfileList>
    </S.Container>
  )
}

export default Community
