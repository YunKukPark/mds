import type { Meta, StoryObj } from '@storybook/react';

import Box from './Box';

const meta = {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    width: '5',
    height: '5',
    children: 'hello',
  },
};
