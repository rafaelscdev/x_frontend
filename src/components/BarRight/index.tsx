import { useNavigate } from 'react-router-dom'
import { colors } from '../../styles'
import Button from '../Button'
import * as S from './styles'

const BarRight = () => {
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.Content>
        <S.CenteredButton onClick={() => navigate('/feed')}>Página Inicial</S.CenteredButton>
      </S.Content>
    </S.Container>
  )
}

export default BarRight
