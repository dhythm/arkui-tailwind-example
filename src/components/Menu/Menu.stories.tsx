import { Meta, StoryObj } from "@storybook/react";
import { Menu } from "./Menu";

const component = () => {
  return <Menu />;
};

const meta = {
  title: "Components/Menu",
  component,
  parameters: {},
} satisfies Meta<typeof component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
