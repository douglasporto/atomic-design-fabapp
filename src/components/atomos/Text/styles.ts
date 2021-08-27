import styled from 'styled-components'
import { TextProps } from '.'

export const Wrapper = styled.p<Pick<TextProps, 'color'>>`
  font-size: 1.2rem;
  color: ${({ color }) => color};
`
