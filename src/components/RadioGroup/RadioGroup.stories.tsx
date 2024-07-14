import { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./RadioGroup";
import { useState } from "react";

const component = () => {
  const [selectedValue, setSelectedValue] = useState<string>("0");
  const options = Array.from(Array(10), (_, index) => ({
    value: index.toString(),
    label: `Choice #${index + 1}`,
  }));
  console.log(selectedValue);
  return (
    <RadioGroup
      options={options}
      selectedValue={selectedValue}
      onChange={setSelectedValue}
    />
  );
};

const meta = {
  title: "Components/RadioGroup",
  component,
  parameters: {},
} satisfies Meta<typeof component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
