import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  width: 100%;
  text-align: center;

  h3 {
    font-family: 'Open Sans';
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 32px;
  }

  .hr-line {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 8px 0;
    color: ${colors.gray};
  }

  .hr-line::before,
  .hr-line::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${colors.gray};
  }

  span {
    color: ${colors.black};
    font-size: 14px;
    padding: 8px;
  }

  .border-button {
    border: 1px solid ${colors.gray};
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 16px;
    width: 100%;

    input {
      padding: 12px;
      border: 1px solid ${colors.gray};
      border-radius: 4px;
      font-size: 14px;
      width: 100%;

      &::placeholder {
        color: ${colors.darkGray};
      }
    }
  }
`
