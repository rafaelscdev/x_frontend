import styled from 'styled-components'
import { breakpoints, colors, ProfileName } from '../../styles'

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 260px;
  background-color: ${colors.black};
  z-index: 100;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    margin-top: 16px;
    max-width: 232px;
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    padding: 16px;
    color: ${colors.white};
    background-color: ${colors.black};
    border: none;
    border-radius: 24px;
    cursor: pointer;

    @media (max-width: ${breakpoints.desktop}) {
      display: none;
    }
  }
`

export const Menu = styled.div`
  width: 100%;
  h1 {
    padding: 8px;
    @media (max-width: ${breakpoints.desktop}) {
      justify-content: center;
      display: flex;
    }
    img {
      width: 28px;
    }
  }
`

export const MenuItem = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  margin-top: 8px;

  img {
    width: 26px;
    margin-right: 16px;

    @media (max-width: ${breakpoints.desktop}) {
      margin-right: 0;
      width: 24px;
    }
  }

  &.community-button {
    @media (min-width: ${breakpoints.tablet}) {
      pointer-events: none;
    }
  }

  &.disable-item-mobile {
    @media (max-width: ${breakpoints.tablet}) {
      display: none;
    }
  }
`

export const MenuLabel = styled.span`
  font-size: 20px;

  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-top: 48px;
  padding: 0 8px;
  justify-content: space-between;

  @media (max-width: ${breakpoints.desktop}) {
    display: inline-block;
    position: fixed;
    padding: 0;
    bottom: 0;

    > div {
      margin-bottom: 32px;

      ${ProfileName} {
        display: none;
      }
    }

    img {
      margin-left: 8px;
      margin-bottom: 8px;
    }
  }

  > div {
    display: flex;
    align-items: center;
  }

  img {
    width: 26px;
    cursor: pointer;
  }
`
