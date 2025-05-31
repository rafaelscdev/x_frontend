import styled from 'styled-components'
import { colors } from '../../styles'
import { transparentize } from 'polished'

export const SelectPostsWrapper = styled.div`
  top: 0;
  background: ${transparentize(0.05, colors.white)};
  border-bottom: 1px solid ${colors.gray};
  display: flex;
  justify-content: center;
`

export const SelectPosts = styled.div`
  width: 100%;
  display: flex;

  button {
    flex: 1;
    border: none;
    font-size: 16px;
    padding: 16px;
    background-color: transparent;
    color: ${colors.darkGray};
    font-weight: 400;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: ${colors.gray};
    }
  }

  .select-button {
    border-bottom: 4px solid ${colors.blue};
    color: ${colors.black};
    font-weight: 700;
  }
`

export const Sections = styled.div`
  padding-top: 8px;
  width: 100%;

  .wrapper {
    display: flex;
    justify-content: flex-end;
  }

  button {
    max-width: 80px;
    border: none;
    padding: 8px 16px;
  }

  &.width-profile {
    width: 40px;
  }
  .text-width {
    width: 100%;
    margin-right: 0;
  }
`

export const Container = styled.div`
  width: 100%;
  padding: 8px 16px;
  display: flex;
  border-bottom: 1px solid ${colors.gray};
`

export const InputWrapper = styled.div`
  width: 100%;
  padding: 8px 8px 40px;
  border-bottom: 1px solid ${colors.gray};
  margin-bottom: 8px;

  textarea {
    width: 100%;
    font-size: 20px;
    resize: none;
    height: 28px;
    overflow: hidden;
    border: none;
    outline: none;
    color: ${colors.black};

    &::placeholder {
      color: ${colors.darkGray};
    }
  }
`

export const Meta = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`

export const Actions = styled.div`
  display: flex;
  padding: 0 8px;
  margin-top: 24px;
  width: 100%;
  justify-content: space-between;
`

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: ${colors.darkGray};
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${colors.gray};
  }

  span {
    margin-left: 4px;
    font-size: 14px;
  }
`

export const ActionIcon = styled.span`
  font-size: 18px;
`

export const Content = styled.p`
  margin: 8px 0 8px 8px;
  font-size: 15px;
  width: 100%;
  word-wrap: break-word;
  word-break: break-word;
  color: ${colors.white};
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0 8px 8px;
`

export const Date = styled.span`
  color: ${colors.darkGray};
  font-size: 14px;
  margin-left: 8px;
`
