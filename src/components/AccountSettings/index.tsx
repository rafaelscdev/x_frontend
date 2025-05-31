import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import { colors, InputGlobal } from '../../styles'
import Button from '../Button'
import * as S from './styles'
import { useUpdateUserMutation, useGetCurrentUserQuery } from '../../services/auth.api'

const AccountSettings = () => {
  const { data: currentUser } = useGetCurrentUserQuery()
  const [updateUser, { isSuccess, isError }] = useUpdateUserMutation()

  const form = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: currentUser?.username || '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().min(5, 'Mínimo 5 caracteres').max(15, 'Máximo 15 caracteres'),
      password: Yup.string().min(5, 'Mínimo 5 caracteres').max(15, 'Máximo 15 caracteres'),
      confirmPassword: Yup.string().when('password', {
        is: (val: string) => val && val.length > 0,
        then: (schema) =>
          schema.required('Campo obrigatório').oneOf([Yup.ref('password')], 'Senhas diferentes'),
        otherwise: (schema) => schema.notRequired()
      })
    }),
    onSubmit: async (values) => {
      const payload: any = {}
      if (values.username !== currentUser?.username) {
        payload.username = values.username
      }
      if (values.password) {
        payload.password = values.password
      }

      if (Object.keys(payload).length > 0) {
        await updateUser(payload)
      }
    }
  })

  const getError = (field: keyof typeof form.values) =>
    form.touched[field] && form.errors[field] ? form.errors[field] : ''

  return (
    <S.Content>
      <div className="display">
        <S.Title>Editar Pefil</S.Title>
        <Button
          textColor={colors.white}
          bgColor={colors.black}
          title="Salvar"
          onClick={() => form.handleSubmit()}>
          Salvar
        </Button>
      </div>
      <form onSubmit={form.handleSubmit}>
        <S.SubTitle>Renomear</S.SubTitle>
        <InputGlobal>
          <input
            type="text"
            id="username"
            name="username"
            value={form.values.username}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <label htmlFor="username">Renomear usuário</label>
          <small>{getError('username')}</small>
        </InputGlobal>
        <S.SubTitle>Trocar senha</S.SubTitle>
        <InputGlobal>
          <input
            type="password"
            name="password"
            id="password"
            value={form.values.password}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <label htmlFor="password">Nova senha</label>
          <small>{getError('password')}</small>
        </InputGlobal>
        <InputGlobal>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={form.values.confirmPassword}
            onChange={form.handleChange}
            onBlur={form.handleBlur}
          />
          <label htmlFor="confirmPassword">Confirmar senha</label>
          <small>{getError('confirmPassword')}</small>
        </InputGlobal>

        {isSuccess && <small>Alterações salvas com sucesso! Atualize a página.</small>}
        {isError && <small>Erro ao salvar alterações.</small>}
      </form>
    </S.Content>
  )
}

export default AccountSettings
