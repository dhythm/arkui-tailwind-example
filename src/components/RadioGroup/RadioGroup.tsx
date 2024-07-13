import { RadioGroup as ArkRadioGroup } from "@ark-ui/react";
import { FC } from "react";

type Props = {};
export const RadioGroup: FC<Props> = () => {
  const options = Array.from(Array(100), (_, index) => ({
    value: index.toString(),
    label: `Choice #${index + 1}`,
  }));
  return (
    <ArkRadioGroup.Root>
      <ArkRadioGroup.Label>Framework</ArkRadioGroup.Label>
      <ArkRadioGroup.Indicator />
      {options.map((option) => (
        <ArkRadioGroup.Item key={option.value} value={option.value}>
          <ArkRadioGroup.ItemText>{option.label}</ArkRadioGroup.ItemText>
          <ArkRadioGroup.ItemControl />
          <ArkRadioGroup.ItemHiddenInput />
        </ArkRadioGroup.Item>
      ))}
    </ArkRadioGroup.Root>
  );
};
