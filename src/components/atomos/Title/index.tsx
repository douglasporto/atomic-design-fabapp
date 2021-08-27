import * as S from './styles'

export type TitleProps = {
  children: string
  color: 'white' | 'black'
}
export default function Title({ children, color }: TitleProps) {
  return <S.Wrapper color={color}>{children}</S.Wrapper>
}
