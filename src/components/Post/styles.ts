import styled from 'styled-components'
import { colors } from '../../styles'

export const MainContent = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  border-left: 1px solid ${colors.gray};
  border-right: 1px solid ${colors.gray};
  background: ${colors.black};
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-bottom: 1px solid ${colors.gray};
  background: ${colors.black};
  color: ${colors.white};

  img {
    cursor: pointer;
    width: 28px;
    height: 28px;
  }

  p {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0;
  background: ${colors.black};
  color: ${colors.white};
`

export const Section = styled.div`
  padding: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;

  &.display {
    display: flex;
  }
  &.align {
    align-items: center;
  }
  &.padding {
    padding: 16px 0;
  }
  &.padding-tp-bt {
    padding: 8px 0;
  }
`

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: ${colors.white};

  p {
    margin: 0;
    color: ${colors.white};
  }
  .date {
    color: ${colors.gray};
    font-size: 14px;
  }
`

export const Actions = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;
  color: ${colors.white};

  li {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  img {
    width: 20px;
    height: 20px;
  }
`

export const InputComment = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;

  textarea {
    flex: 1;
    margin-right: 8px;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid ${colors.gray};
    background: ${colors.white};
    color: ${colors.black};
    font-size: 15px;
    resize: none;
    min-height: 32px;
    max-height: 120px;
  }

  button {
    min-width: 100px;
    font-weight: 700;
  }
`

export const CommentContent = styled.div`
  flex: 1;

  .display {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .date {
    color: ${colors.gray};
    font-size: 14px;
  }

  .padding-left {
    padding-left: 0;
  }

  .margin-tp {
    margin-top: 4px;
  }
`
