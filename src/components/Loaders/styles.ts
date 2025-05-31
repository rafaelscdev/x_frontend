import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const Loader1 = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #1da1f2;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`

export const Loader2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

export const Loader3 = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #1da1f2;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`
