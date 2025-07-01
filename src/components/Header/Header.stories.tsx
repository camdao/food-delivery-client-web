import { type StoryObj } from "@storybook/nextjs-vite";

import Header from "./header";


  
const meta = {
    title: 'Component/Header',
    component: Header,
};
 
export default meta;

type Story = StoryObj<typeof meta>;
 
export const Default: Story = {
};