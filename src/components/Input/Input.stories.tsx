import { useState } from "react";
import { type StoryObj } from "@storybook/nextjs-vite";

import Input from "./Input";

const meta = {
    title: 'Components/Input',
    component: Input,
};
 
export default meta;

type Story = StoryObj<typeof meta>;
 
export const Icon: Story = {
  args: {
    value: 'test',
    name: 'EMAIL',
    headerType:'icon',
    bgColor: "#F0F5FA",
    placeholder:'example@gmail.com',
    placeholderColor:'#A0A5BA',
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
  
export const Password: Story = {
  args: {
    value: 'test',
    name: 'PASSWORD',
    headerType:'password',
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
  
export const Search: Story = {
  args: {
    value: 'test',
    headerType:'search',
    placeholder:'Search dishes, restaurants',
    placeholderColor:'#676767',
    bgColor: '#F6F6F6'
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
  
