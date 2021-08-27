import * as S from './styles'

import Title from 'components/atomos/Title'
import Text from 'components/atomos/Text'

export type BannerProps = {
  title: string
  description: string
  image: string
  footer: string
}

export default function Banner({
  title,
  description,
  image,
  footer
}: BannerProps) {
  return (
    <S.Wrapper image={image}>
      <S.Info>
        <Title color="black">{title}</Title>
        <Text color="black">{description}</Text>
        <S.Footer>{footer}</S.Footer>
      </S.Info>
    </S.Wrapper>
  )
}
