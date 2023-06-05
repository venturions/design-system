import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@venturions-ignite-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: { src: 'https://github.com/venturions.png', alt: 'Alex da Costa' },
  argTypes: {
    src: {
      children: {
        control: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
