import { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@venturions-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: <Text>Testando o elemento box</Text>,
  },
  argTypes: {
    children: {
      control: null,
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
