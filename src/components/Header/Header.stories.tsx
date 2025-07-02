import { StoryObj } from "@storybook/nextjs-vite";
import Header from "./Header";



  
const meta = {
    title: 'Components/Header',
    component: Header,
};
 
export default meta;

type Story = StoryObj<typeof meta>;
 
export const Default: Story = {
    args:{
        title: 'Home',
        iconNameLeft:'menu',
        iconNameRight:'card'
    }
};