import { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";
import { useState } from "react";

const component = () => {
  const [value, setValue] = useState([30]);
  return <Slider value={value} onChange={setValue} />;
};

const meta = {
  title: "Components/Slider",
  component,
  parameters: {},
} satisfies Meta<typeof component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
