import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLoginMutation, useRegisterMutation } from '../../services/auth.api'
import { colors } from '../../styles'
import Button from '../Button'
import * as S from './styles'
import { toast } from 'react-toastify'
import logoIcon from '../../assets/icon.svg'

const AccountAction = () => {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const [login] = useLoginMutation()
  const [register] = useRegisterMutation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const username = formData.get('username') as string
    const password = formData.get('password') as string
    const email = formData.get('email') as string

    try {
      if (isLogin) {
        const response = await login({ username, password }).unwrap()
        if (response?.access) {
          localStorage.setItem('access_token', response.access)
          toast.success('Login realizado com sucesso!')
          navigate('/feed')
        }
      } else {
        const response = await register({ username, password, email }).unwrap()
        if (response) {
          toast.success('Conta criada com sucesso!')
          setIsLogin(true)
        }
      }
    } catch (error: any) {
      console.error('Erro na autenticação:', error)
      toast.error(error.data?.message || 'Erro ao realizar operação')
    }
  }

  return (
    <S.Container>
      <h3>{isLogin ? 'Entrar' : 'Criar conta'}</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Nome de usuário" required />
        {!isLogin && <input type="email" name="email" placeholder="E-mail" required />}
        <input type="password" name="password" placeholder="Senha" required />
        <Button
          title={isLogin ? 'Entrar' : 'Criar conta'}
          bgColor={colors.blue}
          textColor={colors.white}>
          {isLogin ? 'Entrar' : 'Criar conta'}
        </Button>
      </form>
      <div className="hr-line">
        <span>ou</span>
      </div>
      <Button
        title={isLogin ? 'Criar conta' : 'Entrar'}
        bgColor={colors.white}
        textColor={colors.black}
        className="border-button"
        onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Criar conta' : 'Entrar'}
      </Button>
    </S.Container>
  )
}

export default AccountAction
