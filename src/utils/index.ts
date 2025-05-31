const colors = [
  '#1DA1F2',
  '#FF6B6B',
  '#4CAF50',
  '#9C27B0',
  '#FF9800',
  '#E91E63',
  '#2196F3',
  '#795548'
]

export const getFirstLetterAndColor = (username: string, id: number) => {
  const firstLetter = username.charAt(0).toUpperCase()
  const colorIndex = id % colors.length
  const avatarColor = colors[colorIndex]

  return {
    firstLetter,
    avatarColor
  }
}

export const formatRelativeDate = (date: string) => {
  const now = new Date()
  const postDate = new Date(date)
  const diffInSeconds = Math.floor((now.getTime() - postDate.getTime()) / 1000)

  if (diffInSeconds < 60) {
    return 'agora mesmo'
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60)
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m`
  }

  const diffInHours = Math.floor(diffInMinutes / 60)
  if (diffInHours < 24) {
    return `${diffInHours}h`
  }

  const diffInDays = Math.floor(diffInHours / 24)
  if (diffInDays < 7) {
    return `${diffInDays}d`
  }

  return postDate.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  })
}
