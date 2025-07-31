import { type StoryObj } from "@storybook/nextjs-vite";

import CardProduct from "./CardProduct";

const meta = {
    title: 'Components/CardProduct',
    component: CardProduct,
};
 
export default meta;

type Story = StoryObj<typeof meta>;
 
export const Default: Story = {
  args: {
    name:'Pizza',
    price: 70
  },
  render: (args) => {
    return (
      <CardProduct
        {...args}
      />
    );
  },
};