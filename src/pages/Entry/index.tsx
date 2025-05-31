import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { colors } from '../../styles'
import AccountAction from '../../components/AccountAction'
import Signup from '../../components/Signup'
import * as S from './styles'

const Entry = () => {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)

  return (
    <S.Container>
      <S.Content>
        <S.Title>Bem-vindo(a) ao X</S.Title>
        <S.SubTitle>
          {isLogin
            ? 'Entre para ver o que está acontecendo no mundo agora.'
            : 'Crie sua conta para começar a usar o X.'}
        </S.SubTitle>

        {isLogin ? <AccountAction /> : <Signup />}
      </S.Content>
    </S.Container>
  )
}

export default Entry
