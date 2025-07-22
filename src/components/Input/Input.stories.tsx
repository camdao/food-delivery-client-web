import { useState } from "react";
import { type StoryObj } from "@storybook/nextjs-vite";

import Input from "./Input";

const meta = {
    title: 'Components/Input',
    component: Input,
};
 
export default meta;

type Story = StoryObj<typeof meta>;
 
export const Default: Story = {
  args: {
    value: 'test',
    name: 'EMAIL',
    iconName:'close',
    headerType:'icon',
    bgColor: "#F0F5FA"
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);

    return (
      <Input
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
};
  
