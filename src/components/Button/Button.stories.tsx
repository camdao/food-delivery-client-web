import { type StoryObj } from "@storybook/nextjs-vite";

import Button from "./Button";

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'], 
  parameters: {
    controls: {
      include: ['size', 'children', 'color'],
    },
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'large']
    },
    color: {
      control: 'select',
      options: ['orange', 'white'],
    },
  },
};
 
export default meta;

type Story = StoryObj<typeof meta>;
 
export const Default: Story = {
    args: {
      color: 'orange',
      size:'small',
      children: 'Button',
    }
};