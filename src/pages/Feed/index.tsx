import { useNavigate } from 'react-router-dom'
import { colors } from '../../styles'
import Button from '../../components/Button'
import Community from '../../components/Community'
import Posts from '../../components/Posts'
import * as S from './styles'

const Feed = () => {
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.Title>Página Inicial</S.Title>
        </S.Header>

        <S.Main>
          <Posts />
        </S.Main>
      </S.Content>

      <S.Sidebar>
        <Community />
      </S.Sidebar>
    </S.Container>
  )
}

export default Feed
