import { Meta } from '@storybook/react/types-6-0'
import Banner, { BannerProps } from '.'

export default {
  title: 'Moléculas/Banner',
  component: Banner
} as Meta

export const Template = (args: BannerProps) => <Banner {...args} />

Template.args = {
  title: 'Oportunidade',
  description:
    'Sem tempo ou com dificuldade na criação do seu cardápio? <strong>A gente faz para você</strong> <br />Clique aqui e <strong>obtenha ajuda gratuita</strong> dos nossos especialistas',
  footer: 'Ação válida até 18/09/2021',
  image:
    'https://cdn.discordapp.com/attachments/857335670686482462/880801600287952907/Mask_Group2.png'
} as BannerProps

Template.story = { name: 'Playground' }
