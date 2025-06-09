import { useGetCurrentUserQuery } from '../../services/auth.api'
import { ProfileAvatar } from '../../styles'
import { getFirstLetterAndColor } from '../../utils'

const UserAvatar = () => {
  const { data: user } = useGetCurrentUserQuery()
  if (!user) {
    return <p>Loading...</p>
  }

  if (user.profile_image) {
    return (
      <img
        src={user.profile_image}
        alt="Avatar"
        style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }}
      />
    )
  }

  const userAvatar = getFirstLetterAndColor(user.username, user.id)
  return (
    <ProfileAvatar style={{ backgroundColor: userAvatar.avatarColor }}>
      {userAvatar.firstLetter}
    </ProfileAvatar>
  )
}

export default UserAvatar
