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
  const [showMobileMenu, setShowMobileMenu] = useState(false)
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

  const mobileMenuItems = [
    { icon: magnifier, label: 'Explorar' },
    { icon: bell, label: 'Notificações' },
    { icon: letter, label: 'Mensagens' },
    { icon: grok, label: 'Grok' },
    { icon: tape, label: 'Itens salvos' },
    { icon: communit, label: 'Comunidade' },
    { icon: cloud, label: 'Premium' },
    { icon: ray, label: 'Organizações Ve...' },
    { icon: profile, label: 'Perfil' },
    { icon: more, label: 'Mais' }
  ]

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
            <div className="profile-desktop">
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
      {user && (
        <S.MobileNavBar>
          <S.MobileNavButton onClick={() => setShowMobileMenu((v) => !v)}>
            <UserAvatar />
          </S.MobileNavButton>
          <S.MobileNavButton onClick={() => navigate('/feed')} aria-label="Página Inicial">
            <img src={home} alt="Página Inicial" style={{ width: 28, height: 28 }} />
          </S.MobileNavButton>
          <S.MobileNavButton onClick={handleLogout} aria-label="Logout">
            <img src={closeUser} alt="logout" style={{ width: 28, height: 28 }} />
          </S.MobileNavButton>
        </S.MobileNavBar>
      )}
      {showMobileMenu && (
        <S.MobileMenu>
          <button className="close" onClick={() => setShowMobileMenu(false)}>
            <span style={{ fontSize: 28 }}>☰</span>
          </button>
          {mobileMenuItems.map((item) => (
            <div
              className="menu-item"
              key={item.label}
              onClick={() => {
                if (item.label === 'Perfil') {
                  openModal('account')
                  setShowMobileMenu(false)
                }
              }}>
              <img src={item.icon} alt={item.label} />
              <span>{item.label}</span>
            </div>
          ))}
        </S.MobileMenu>
      )}
      {isOpenModal && (
        <ModalWrapper>
          <ModalContent>
            {modalContent === 'account' && <AccountSettings onClose={closeModal} />}
            {modalContent === 'community' && <Community />}
          </ModalContent>
          <div className="overlay" onClick={closeModal}></div>
        </ModalWrapper>
      )}
    </>
  )
}

export default BarLeft
