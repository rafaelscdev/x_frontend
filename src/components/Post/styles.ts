import styled from 'styled-components'
import { colors, breakpoints } from '../../styles'

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
  padding: 16px;
  border-bottom: 1px solid ${colors.gray};

  @media (max-width: ${breakpoints.mobile}) {
    padding: 12px 8px;
  }

  &.display {
    @media (max-width: ${breakpoints.mobile}) {
      gap: 8px;
    }
  }
`

export const Section = styled.section`
  margin-bottom: 12px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-bottom: 8px;
  }

  &.padding-tp-bt {
    padding: 8px 0;

    @media (max-width: ${breakpoints.mobile}) {
      padding: 4px 0;
    }
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
    font-size: 16px;
    line-height: 1.4;
    word-wrap: break-word;
    overflow-wrap: break-word;

    @media (max-width: ${breakpoints.mobile}) {
      font-size: 14px;
    }
  }
  .date {
    color: ${colors.gray};
    font-size: 14px;
  }
`

export const Actions = styled.ul`
  display: flex;
  gap: 24px;
  margin-top: 12px;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${colors.darkGray};
    font-size: 14px;

    img {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    gap: 16px;

    li {
      font-size: 12px;

      img {
        width: 16px;
        height: 16px;
      }
    }
  }
`

export const InputComment = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
  margin-left: 12px;

  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 8px;
  }

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

    @media (max-width: ${breakpoints.mobile}) {
      padding: 8px;
      font-size: 14px;
    }
  }

  button {
    min-width: 100px;
    font-weight: 700;

    @media (max-width: ${breakpoints.mobile}) {
      min-width: 80px;
      padding: 8px 12px;
      font-size: 14px;
    }
  }
`

export const CommentContent = styled.p`
  flex: 1;
  margin-left: 12px;
  color: ${colors.white};
  margin-top: 8px;
  display: block;

  @media (max-width: ${breakpoints.mobile}) {
    margin-left: 8px;
  }

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
    color: ${colors.white};
  }

  .margin-tp {
    margin-top: 4px;
  }
`
