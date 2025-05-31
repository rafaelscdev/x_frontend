import { useGetCurrentUserQuery } from '../../services/auth.api'
import { ProfileAvatar } from '../../styles'
import { getFirstLetterAndColor } from '../../utils'

const UserAvatar = () => {
  const { data: user } = useGetCurrentUserQuery()
  if (!user) {
    return <p>Loading...</p>
  }
  const userAvatar = getFirstLetterAndColor(user.username, user.id)

  return (
    <div>
      <ProfileAvatar style={{ backgroundColor: userAvatar.avatarColor }}>
        {userAvatar.firstLetter}
      </ProfileAvatar>
    </div>
  )
}

export default UserAvatar
