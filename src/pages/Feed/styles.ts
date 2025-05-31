import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background-color: ${colors.black};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  border-right: 1px solid ${colors.darkGray};
  padding-right: 32px;
  min-height: 100vh;
  background-color: ${colors.black};
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid ${colors.darkGray};
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.white};
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`

export const Sidebar = styled.aside`
  position: sticky;
  top: 32px;
  height: fit-content;
  padding-left: 32px;
`
