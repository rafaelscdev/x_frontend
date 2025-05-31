import styled from 'styled-components'
import { colors } from '../../styles'

export const Content = styled.div`
  margin: 0 72px;

  button {
    margin-top: 38px;
    border-radius: 24px;
    padding: 16px;
  }
`

export const Title = styled.h4`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 40px;
`

export const MessageSuccess = styled.p`
  font-size: 24px;
  color: ${colors.blue};
  padding-top: 200px;
`
