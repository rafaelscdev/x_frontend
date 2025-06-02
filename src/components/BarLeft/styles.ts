import styled from 'styled-components'
import { breakpoints, colors, ProfileName } from '../../styles'

export const Header = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 275px;
  height: 100vh;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid ${colors.gray};
  background-color: ${colors.white};

  @media (max-width: ${breakpoints.tablet}) {
    width: 88px;
    padding: 0 8px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    height: auto;
    position: fixed;
    bottom: 0;
    top: auto;
    border-top: 1px solid ${colors.gray};
    border-right: none;
    padding: 8px;
    z-index: 100;
  }

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

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;

  h1 {
    padding: 12px;
    margin-bottom: 8px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: row;
    justify-content: space-around;
    margin-top: 0;
    gap: 0;

    h1 {
      display: none;
    }
  }
`

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 24px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${colors.lightGray};
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
    padding: 12px 8px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 8px;
  }

  img {
    width: 26px;
    margin-right: 16px;

    @media (max-width: ${breakpoints.tablet}) {
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
  padding: 0 8px 24px 8px;
  justify-content: space-between;

  .profile-desktop {
    display: flex;
    align-items: center;
    @media (max-width: ${breakpoints.mobile}) {
      display: none;
    }
  }

  ${ProfileName} {
    color: ${colors.black};
  }

  @media (max-width: ${breakpoints.desktop}) {
    display: inline-block;
    position: fixed;
    padding: 0 0 24px 0;
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

export const MobileAvatar = styled.div`
  display: none;
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    position: fixed;
    left: 16px;
    bottom: 16px;
    z-index: 200;
    background: ${colors.white};
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    padding: 4px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
  }
`

export const MobileLogout = styled.div`
  display: none;
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    position: fixed;
    right: 16px;
    bottom: 16px;
    z-index: 200;
    background: ${colors.white};
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    padding: 8px;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    img {
      width: 28px;
      height: 28px;
    }
  }
`

export const MobileMenu = styled.div`
  display: none;
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${colors.white};
    z-index: 300;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    box-shadow: 0 -2px 16px rgba(0, 0, 0, 0.12);
    padding: 24px 16px 16px 16px;
    .close {
      align-self: flex-end;
      background: none;
      border: none;
      font-size: 28px;
      margin-bottom: 16px;
      cursor: pointer;
    }
    .menu-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 0;
      font-size: 18px;
      color: ${colors.black};
      cursor: pointer;
      border-bottom: 1px solid ${colors.gray};
      &:last-child {
        border-bottom: none;
      }
      img {
        width: 28px;
        height: 28px;
      }
    }
  }
`

export const MobileNavBar = styled.div`
  display: none;
  @media (max-width: ${breakpoints.mobile}) {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 64px;
    background: ${colors.white};
    z-index: 300;
    box-shadow: 0 -2px 16px rgba(0, 0, 0, 0.12);
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
  }
`

export const MobileNavButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  font-size: 28px;
  color: ${colors.black};
`
