import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetCurrentUserQuery } from '../../services/auth.api'
import * as S from './styles'
import { ModalContent, ModalWrapper, ProfileName } from '../../styles'

import logo from '../../assets/icon.svg'
import grok from '../../assets/grok.svg'
import letter from '../../assets/letter.svg'
import bell from '../../assets/bell.svg'
import more from '../../assets/more.svg'
import profile from '../../assets/profile.svg'
import magnifier from '../../assets/magnifier.svg'
import home from '../../assets/home.svg'
import tape from '../../assets/tape.svg'
import ray from '../../assets/ray.svg'
import cloud from '../../assets/cloud.svg'
import communit from '../../assets/community.svg'
import closeUser from '../../assets/closeUser.svg'
import closeIcon from '../../assets/close.svg'

import UserAvatar from '../UserAvatar'
import AccountSettings from '../AccountSettings'
import Community from '../Community'

const BarLeft = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [modalContent, setModalContent] = useState('')
  const { data: user } = useGetCurrentUserQuery()
  const navigate = useNavigate()

  const openModal = (content: string) => {
    setModalContent(content)
    setIsOpenModal(true)
  }

  const closeModal = () => {
    setIsOpenModal(false)
    setModalContent('')
  }

  const handleLogout = () => {
    localStorage.removeItem('access_token')
    navigate('/entry')
  }

  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <S.Header>
        <S.Menu>
          <h1>
            <img src={logo} alt="logo X" />
          </h1>
          <S.MenuItem className="disable-item-mobile">
            <img src={magnifier} alt="explorar" />
            <S.MenuLabel>Explorar</S.MenuLabel>
          </S.MenuItem>
          <S.MenuItem className="disable-item-mobile">
            <img src={bell} alt="notificação" />
            <S.MenuLabel>Notificações</S.MenuLabel>
          </S.MenuItem>
          <S.MenuItem className="disable-item-mobile">
            <img src={letter} alt="mensagens" />
            <S.MenuLabel>Mensagens</S.MenuLabel>
          </S.MenuItem>
          <S.MenuItem className="disable-item-mobile">
            <img src={grok} alt="grok" />
            <S.MenuLabel>Mensagens</S.MenuLabel>
          </S.MenuItem>
          <S.MenuItem className="disable-item-mobile">
            <img src={tape} alt="itens salvos" />
            <S.MenuLabel>Itens salvos</S.MenuLabel>
          </S.MenuItem>
          <S.MenuItem className="community-button" onClick={() => openModal('community')}>
            <img src={communit} alt="comunidade" />
            <S.MenuLabel>Comunidade</S.MenuLabel>
          </S.MenuItem>
          <S.MenuItem className="disable-item-mobile">
            <img src={cloud} alt="premium" />
            <S.MenuLabel>Premium</S.MenuLabel>
          </S.MenuItem>
          <S.MenuItem className="disable-item-mobile">
            <img src={ray} alt="organizações verificadas" />
            <S.MenuLabel>Organizações Ve...</S.MenuLabel>
          </S.MenuItem>
          <S.MenuItem className="hover-action" onClick={() => openModal('account')}>
            <img src={profile} alt="perfil" />
            <S.MenuLabel>Perfil</S.MenuLabel>
          </S.MenuItem>
          <S.MenuItem className="disable-item-mobile">
            <img src={more} alt="mais opções" />
            <S.MenuLabel>Mais</S.MenuLabel>
          </S.MenuItem>
        </S.Menu>
        {user && (
          <S.Profile>
            <div>
              <UserAvatar />
              <ProfileName>{user.username}</ProfileName>
            </div>
            <img
              className="hover-action"
              onClick={handleLogout}
              src={closeUser}
              alt="sair do perfil"
            />
          </S.Profile>
        )}
      </S.Header>

      {isOpenModal && (
        <ModalWrapper>
          <ModalContent>
            <div>
              <img src={closeIcon} alt="Fechar aba" onClick={closeModal} />
            </div>
            {modalContent === 'account' && <AccountSettings />}
            {modalContent === 'community' && <Community />}
          </ModalContent>
          <div className="overlay" onClick={closeModal}></div>
        </ModalWrapper>
      )}
    </>
  )
}

export default BarLeft
