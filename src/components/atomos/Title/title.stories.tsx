import { Meta } from '@storybook/react/types-6-0'
import Title, { TitleProps } from '.'

export default {
  title: 'Átomos/Title',
  component: Title
} as Meta

export const Template = (args: TitleProps) => <Title {...args} />

Template.args = {
  children: 'Oportunidade',
  color: 'white'
} as TitleProps

Template.story = { name: 'Title' }
