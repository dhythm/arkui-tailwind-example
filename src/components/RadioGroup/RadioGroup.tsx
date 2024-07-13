import { RadioGroup as ArkRadioGroup } from "@ark-ui/react";
import { FC } from "react";

type Option = {
  value: string;
  label: string;
};

type Props = {
  options: Option[];
  selectedValue?: string;
  onChange?: (value: string) => void;
};
export const RadioGroup: FC<Props> = ({ options, selectedValue, onChange }) => {
  return (
    <ArkRadioGroup.Root
      value={selectedValue}
      onValueChange={(details) => onChange?.(details.value)}
    >
      <ArkRadioGroup.Indicator />
      {options.map((option) => (
        <ArkRadioGroup.Item
          key={option.value}
          value={option.value}
          className="flex"
        >
          <ArkRadioGroup.ItemControl className="h-8 w-8 border round" />
          <ArkRadioGroup.ItemText>{option.label}</ArkRadioGroup.ItemText>
          <ArkRadioGroup.ItemHiddenInput />
        </ArkRadioGroup.Item>
      ))}
    </ArkRadioGroup.Root>
  );
};
