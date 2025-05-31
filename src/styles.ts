import { createGlobalStyle, styled } from 'styled-components'

export const colors = {
  black: '#000000',
  white: '#FFFFFF',
  blue: '#1D9BF0',
  darkGray: '#536471',
  gray: '#CFD9DE',
  lightGray: '#EFF3F4',
  red: '#F4212E'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px',
  mobile: '480px'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style:none;
  }

  body {
    background-color: ${colors.white}
    color:${colors.black};
    overflow-y: scroll;
  }

  .date {
    margin-left:4px;
    padding-top: 2px;
    font-size: 14px;
    color: ${colors.darkGray};
  }
  .align {
    align-items: center;
  }
  .display {
    display: flex;
  }
  .padding {
    padding: 16px 0;
  }
  .padding-left {
    padding-left: 8px;
  }
  .padding-tp-bt {
    padding: 8px 0;
  }

  @media (min-width: ${breakpoints.desktop}) {
    .hover-action{
        &:hover {
            cursor: pointer;
            box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.2);
            background-color: rgba(0, 0, 0, 0.2);
            border-radius: 24px;
          }
      }
  }
`

export const InputGlobal = styled.div`
  position: relative;
  margin-bottom: 24px;

  input {
    width: 100%;
    padding: 16px;
    border: 1px solid ${colors.gray};
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: ${colors.blue};
    }

    &:focus + label,
    &:not(:placeholder-shown) + label {
      transform: translateY(-24px) scale(0.8);
      color: ${colors.blue};
    }
  }

  label {
    position: absolute;
    left: 16px;
    top: 16px;
    font-size: 16px;
    color: ${colors.darkGray};
    pointer-events: none;
    transition: all 0.3s ease;
  }

  small {
    display: block;
    color: ${colors.red};
    font-size: 12px;
    margin-top: 4px;
  }
`

export const ProfileAvatar = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: ${colors.white};
  border-radius: 50%;
`

export const ProfileName = styled.span`
  margin-left: 8px;
  font-weight: 700;
`

export const MainContent = styled.div`
  max-width: 600px;
  width: 100%;
  min-height: 100vh;
  border-left: 1px solid ${colors.gray};
  border-right: 1px solid ${colors.gray};
  flex-direction: column;
`

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`

export const ModalContent = styled.div`
  position: relative;
  background-color: ${colors.white};
  padding: 32px;
  border-radius: 16px;
  max-width: 600px;
  width: 100%;
  z-index: 1001;
`
