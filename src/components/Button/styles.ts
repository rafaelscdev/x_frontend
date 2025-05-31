import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  border-radius: 9999px;
  padding: 0.75rem 1.5rem;
  font-weight: 700;
  font-size: 0.9375rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    opacity: 0.9;
  }
`
