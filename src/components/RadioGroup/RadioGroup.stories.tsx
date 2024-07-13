import { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";

const component = () => {
  return <RadioGroup />;
};

const meta = {
  title: "Components/RadioGroup",
  component,
  parameters: {},
} satisfies Meta<typeof component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
