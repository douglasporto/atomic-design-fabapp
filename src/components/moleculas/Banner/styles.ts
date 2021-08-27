import styled from 'styled-components'
import { BannerProps } from '.'

export const Wrapper = styled.div<Pick<BannerProps, 'image'>>`
  height: 230px;
  display: flex;
  justify-content: space-between;
  box-shadow: 10px;
  width: 100%;

  padding: 24px 16px;
  background-color: #fff;

  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position-x: right;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const Image = styled.img`
  max-height: 300px;
`
export const Footer = styled.p`
  font-style: italic;
`
