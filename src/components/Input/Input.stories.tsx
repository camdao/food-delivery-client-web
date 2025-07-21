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
      name: 'EMAIL'
    },
    render: (args) => {
      const [value, setValue] = useState(args.value);
  
      return (
        <Input
          {...args}
          value={value}
          onChange={setValue}
          bgColor="#F0F5FA"
          
        />
      );
    },
  };
  

  export const Password: Story = {
    args: {
      value: 'test',
      name: 'PASSWORD',
      type: 'password'
    },
    render: (args) => {
      const [value, setValue] = useState(args.value);
  
      return (
        <Input
          {...args}
          value={value}
          onChange={setValue}
          bgColor="#F0F5FA"
          
        />
      );
    },
  };
  