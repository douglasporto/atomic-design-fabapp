import { Meta } from '@storybook/react'
import styled from 'styled-components'

import Button, { ButtonProps } from '.'

export default {
  title: 'Átomos/Button',
  component: Button
} as Meta

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  width: 100%;
  padding-top: 10%;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    button {
    }
    > :not(style) ~ :not(style) {
      margin-bottom: 10px;
    }
  }
`

export const Template = (args: ButtonProps) => (
  <Container>
    <Button {...args}>{args.children}</Button>
  </Container>
)

Template.args = {
  children: 'entrar'
}
Template.story = { name: 'Playground' }

export const All = () => (
  <Container>
    <div>
      <h3>Colors</h3>
      <Button variant="contained" color="inherit">
        inherit
      </Button>
      <Button variant="contained" color="primary">
        primary
      </Button>
      <Button variant="contained" color="secondary">
        secondary
      </Button>
    </div>
    <div>
      <h3>Variant</h3>
      <Button variant="text" color="primary">
        Text - primary
      </Button>
      <Button variant="contained" color="primary">
        contained - primary
      </Button>
      <Button variant="outlined" color="primary">
        outlined - primary
      </Button>
    </div>
    <div>
      <h3>Size</h3>
      <Button variant="contained" size="small" color="primary">
        small
      </Button>
      <Button variant="contained" size="medium" color="primary">
        medium
      </Button>
      <Button variant="contained" size="large" color="primary">
        large
      </Button>
    </div>
  </Container>
)

All.story = { name: 'All' }
