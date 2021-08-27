import { Meta } from '@storybook/react/types-6-0'
import Text, { TextProps } from '.'

export default {
  title: 'Átomos/Text',
  component: Text
} as Meta

export const Template = (args: TextProps) => <Text {...args} />

Template.args = {
  children:
    'Sem tempo ou com dificuldade na criação do seu cardápio? <strong>A gente faz para você</strong> <br />Clique aqui e <strong>obtenha ajuda gratuita</strong> dos nossos especialistas',
  color: 'white'
} as TextProps

Template.story = { name: 'Text' }
