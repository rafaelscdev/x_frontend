import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;
`

export const TitleSection = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`

export const ProfileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Profile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: 1px solid ${colors.gray};
  border-radius: 8px;

  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`
