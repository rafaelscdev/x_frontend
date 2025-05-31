import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import { colors, InputGlobal } from '../../styles'
import Button from '../Button'
import * as S from './styles'

import { useRegisterMutation, type RegisterResponse } from '../../services/auth.api'

const Signup = () => {
  const navigate = useNavigate()
  const [register] = useRegisterMutation()

  const form = useFormik({
    initialValues: {
      username: '',
      email: '',
      first_name: '',
      last_name: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(5, 'Precisa ter pelo menos 5 caracteres')
        .max(15, 'Precisa ter no máximo 15 caracteres')
        .required('Campo obrigatório'),
      email: Yup.string().email('Email inválido').required('Campo obrigatório'),
      first_name: Yup.string().required('Campo obrigatório'),
      last_name: Yup.string().required('Campo obrigatório'),
      password: Yup.string()
        .min(5, 'Precisa ter pelo menos 5 caracteres')
        .max(15, 'Precisa ter no máximo 15 caracteres')
        .required('Campo obrigatório'),
      confirmPassword: Yup.string()
        .required('Campo obrigatório')
        .oneOf([Yup.ref('password')], 'As senhas estão diferentes')
    }),
    onSubmit: async (values) => {
      try {
        await register({
          username: values.username,
          email: values.email,
          first_name: values.first_name,
          last_name: values.last_name,
          password: values.password
        }).unwrap()
        navigate('/')
      } catch (error) {
        console.error('Erro ao registrar:', error)
      }
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isChanged = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isChanged && isInvalid) return message
    return ''
  }

  return (
    <S.Content>
      <S.Title>Criar sua conta</S.Title>
      <form onSubmit={form.handleSubmit}>
        <InputGlobal>
          <input
            type="text"
            name="username"
            id="username"
            placeholder=""
            value={form.values.username}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <label htmlFor="username">Usuário</label>
          <small>{getErrorMessage('username', form.errors.username)}</small>
        </InputGlobal>

        <InputGlobal>
          <input
            type="email"
            name="email"
            id="email"
            placeholder=""
            value={form.values.email}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <label htmlFor="email">Email</label>
          <small>{getErrorMessage('email', form.errors.email)}</small>
        </InputGlobal>

        <InputGlobal>
          <input
            type="text"
            name="first_name"
            id="first_name"
            placeholder=""
            value={form.values.first_name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <label htmlFor="first_name">Nome</label>
          <small>{getErrorMessage('first_name', form.errors.first_name)}</small>
        </InputGlobal>

        <InputGlobal>
          <input
            type="text"
            name="last_name"
            id="last_name"
            placeholder=""
            value={form.values.last_name}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <label htmlFor="last_name">Sobrenome</label>
          <small>{getErrorMessage('last_name', form.errors.last_name)}</small>
        </InputGlobal>

        <InputGlobal>
          <input
            type="password"
            name="password"
            id="password"
            placeholder=""
            value={form.values.password}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <label htmlFor="password">Senha</label>
          <small>{getErrorMessage('password', form.errors.password)}</small>
        </InputGlobal>

        <InputGlobal>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder=""
            value={form.values.confirmPassword}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <label htmlFor="confirmPassword">Confirmar senha</label>
          <small>{getErrorMessage('confirmPassword', form.errors.confirmPassword)}</small>
        </InputGlobal>

        <Button
          type="submit"
          bgColor={colors.black}
          title="Avançar para criar conta"
          textColor={colors.white}>
          Avançar
        </Button>
      </form>
    </S.Content>
  )
}

export default Signup
