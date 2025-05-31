import styled from 'styled-components'
import { colors } from '../../styles'

export const Content = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;

  .display {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  small {
    color: ${colors.red};
    font-size: 12px;
    margin-top: 4px;
  }
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
`

export const SubTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
`
