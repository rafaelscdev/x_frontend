import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { colors, InputGlobal } from '../../styles'
import Button from '../Button'
import * as S from './styles'
import { useUpdateUserMutation, useGetCurrentUserQuery } from '../../services/auth.api'
import home from '../../assets/home.svg'
import { useNavigate } from 'react-router-dom'
import closeIcon from '../../assets/close.svg'

const AccountSettings = ({ onClose }: { onClose?: () => void }) => {
  const { data: currentUser } = useGetCurrentUserQuery()
  const [updateUser, { isSuccess, isError }] = useUpdateUserMutation()
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const navigate = useNavigate()

  // Preview da imagem selecionada
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      setSelectedFile(e.currentTarget.files[0])
      setPreview(URL.createObjectURL(e.currentTarget.files[0]))
    }
  }

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
      const formData = new FormData()
      if (values.username !== currentUser?.username) {
        formData.append('username', values.username)
      }
      if (values.password) {
        formData.append('password', values.password)
      }
      if (selectedFile) {
        formData.append('profile_image', selectedFile)
      }

      if (Array.from(formData.keys()).length > 0) {
        await updateUser(formData)
      }
    }
  })

  const getError = (field: keyof typeof form.values) =>
    form.touched[field] && form.errors[field] ? form.errors[field] : ''

  return (
    <S.Content>
      <S.Title>Editar Perfil</S.Title>
      <div className="profile-top">
        {/* Foto de perfil atual ou preview */}
        <S.Avatar
          src={preview || currentUser?.profile_image || '/default-avatar.png'}
          alt="Foto de perfil"
        />
        {/* Input para trocar foto */}
        <label htmlFor="profile_image" className="edit-photo-btn">
          Trocar foto de perfil
        </label>
        <input
          type="file"
          name="profile_image"
          id="profile_image"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>
      <div className="display">
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
          <Button type="submit" textColor={colors.white} bgColor={colors.black} title="Salvar">
            Salvar
          </Button>
        </form>
        {isSuccess && <small>Alterações salvas com sucesso! Atualize a página.</small>}
        {isError && <small>Erro ao salvar alterações.</small>}
        {/* Botão de fechar apenas no mobile */}
        {onClose && (
          <S.CloseButtonMobile onClick={onClose}>
            <img src={closeIcon} alt="Fechar" />
          </S.CloseButtonMobile>
        )}
      </div>
    </S.Content>
  )
}

export default AccountSettings
