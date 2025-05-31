import styled from 'styled-components'

export const colors = {
  black: '#000000',
  white: '#FFFFFF',
  blue: '#1DA1F2',
  gray: '#657786',
  lightGray: '#E1E8ED',
  background: '#F5F8FA'
}

export const MainContent = styled.main`
  max-width: 600px;
  width: 100%;
  border-right: 1px solid ${colors.lightGray};
  border-left: 1px solid ${colors.lightGray};
  min-height: 100vh;
`

export const ProfileAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-weight: bold;
  font-size: 1.25rem;
`

export const ProfileName = styled.span`
  font-weight: bold;
  color: ${colors.black};
  margin-left: 0.75rem;
`
