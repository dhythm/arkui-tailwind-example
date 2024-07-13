import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { Checkbox as ArkCheckbox } from "@ark-ui/react";
import { action } from "@storybook/addon-actions";

const component = () => {
  const options = Array.from(Array(10), (_, index) => ({
    value: index.toString(),
    label: `Choice #${index + 1}`,
  }));
  return (
    <ArkCheckbox.Group
      defaultValue={["1"]}
      onValueChange={action("onValueChange")}
    >
      {options.map((option) => (
        <Checkbox
          key={option.value}
          label={option.label}
          value={option.value}
        />
      ))}
    </ArkCheckbox.Group>
  );
};

const meta = {
  title: "Components/Checkbox",
  component,
  parameters: {},
} satisfies Meta<typeof component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
