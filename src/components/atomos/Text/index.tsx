import * as S from './styles'

export type TextProps = {
  children: string
  color: 'white' | 'black'
}
export default function Text({ children, color }: TextProps) {
  return (
    <S.Wrapper color={color} dangerouslySetInnerHTML={{ __html: children }} />
  )
}
