import { ReactNode } from 'react'

import * as S from './styles'
import MuiButton from '@mui/material/Button'

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset'
  variant?: 'text' | 'outlined' | 'contained' | undefined
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
  size?: 'small' | 'medium' | 'large'
  children: ReactNode
  onClick?: (event?: unknown) => void
  isLoading?: boolean
  className?: string
}
export default function Button({
  type = 'submit',
  variant = 'contained',
  color = 'inherit',
  size = 'medium',
  children,
  onClick,
  className
}: ButtonProps) {
  return (
    <S.Container className={className}>
      <MuiButton
        type={type}
        variant={variant}
        color={color}
        size={size}
        onClick={onClick}
      >
        {children}
      </MuiButton>
    </S.Container>
  )
}
