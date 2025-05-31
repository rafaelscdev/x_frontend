import { ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonProps = {
  title: string
  bgColor: string
  textColor: string
  children: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({ title, bgColor, textColor, children, ...props }: ButtonProps) => {
  return (
    <S.Button style={{ backgroundColor: bgColor, color: textColor }} title={title} {...props}>
      {children}
    </S.Button>
  )
}

export default Button
