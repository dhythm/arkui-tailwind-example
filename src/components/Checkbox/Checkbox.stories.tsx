import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const component = () => {
  return <Checkbox />;
};

const meta = {
  title: "Components/Checkbox",
  component,
  parameters: {},
} satisfies Meta<typeof component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
