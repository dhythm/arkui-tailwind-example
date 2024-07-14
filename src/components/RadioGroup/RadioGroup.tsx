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
      className="flex flex-col gap-4 margin-auto text-align-start w-max"
      value={selectedValue}
      onValueChange={(details) => onChange?.(details.value)}
    >
      <ArkRadioGroup.Indicator />
      {options.map((option) => (
        <ArkRadioGroup.Item
          key={option.value}
          value={option.value}
          className="flex align-center cursor-pointer gap-4"
        >
          <ArkRadioGroup.ItemControl className="group p-1 h-6 w-6 border rounded-full data-[state=checked]:bg-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5 group-data-[state=checked]:opacity-100 group-data-[state=unchecked]:opacity-0"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <circle data-name="ellipse" cx="8" cy="8" r="8" />
            </svg>
          </ArkRadioGroup.ItemControl>
          <ArkRadioGroup.ItemText>{option.label}</ArkRadioGroup.ItemText>
          <ArkRadioGroup.ItemHiddenInput />
        </ArkRadioGroup.Item>
      ))}
    </ArkRadioGroup.Root>
  );
};
