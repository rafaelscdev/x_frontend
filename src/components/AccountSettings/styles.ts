import styled from 'styled-components'
import { colors } from '../../styles'

export const Content = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 48px auto 48px auto;
  padding: 32px 24px 80px 24px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;

  .profile-top {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 24px;
  }

  .edit-photo-btn {
    margin-top: 12px;
    margin-bottom: 8px;
    background: ${colors.black};
    color: ${colors.white};
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: background 0.2s;
    border: none;
    outline: none;
    display: inline-block;
  }

  .edit-photo-btn:hover {
    background: ${colors.gray};
    color: ${colors.black};
  }

  .display {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 28px;
    align-items: center;
  }

  small {
    color: ${colors.red};
    font-size: 12px;
    margin-top: 4px;
  }

  @media (max-width: 600px) {
    max-width: 98vw;
    padding: 16px 4vw 80px 4vw;
  }
`

export const Avatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${colors.black};
  background: ${colors.gray};
  margin-bottom: 8px;
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
`

export const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 24px;
  text-align: left;
`

export const HomeButtonMobile = styled.button`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    margin: 32px auto 0 auto;
    background: ${colors.black};
    border: none;
    border-radius: 50%;
    padding: 16px;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: background 0.2s;
  }
  img {
    width: 32px;
    height: 32px;
    filter: invert(1);
  }
`

export const CloseButtonMobile = styled.button`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    margin: 32px auto 0 auto;
    background: ${colors.black};
    border: none;
    border-radius: 50%;
    padding: 16px;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: background 0.2s;
  }
  img {
    width: 28px;
    height: 28px;
    filter: invert(1);
  }
`
