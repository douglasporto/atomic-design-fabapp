import styled from 'styled-components'
import { TitleProps } from '.'

export const Wrapper = styled.h3<Pick<TitleProps, 'color'>>`
  font-size: 4rem;
  color: ${({ color }) => color};
`
