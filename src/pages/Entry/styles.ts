import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${colors.white};
`

export const Content = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  width: 48px;
  margin-bottom: 32px;
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
  width: 100%;
`

export const SubTitle = styled.p`
  font-size: 16px;
  color: ${colors.darkGray};
  margin-bottom: 32px;
  width: 100%;
`

export const Footer = styled.p`
  font-size: 14px;
  color: ${colors.darkGray};
  margin-top: 32px;

  span {
    color: ${colors.blue};
    cursor: pointer;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`
