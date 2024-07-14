import { Slider as ArkSlider } from "@ark-ui/react";
import { FunctionComponent } from "react";

type Props = {
  value: number[];
  min?: number;
  max?: number;
  onChange?: (value: number[]) => void;
};

export const Slider: FunctionComponent<Props> = ({
  value,
  min = 0,
  max = 100,
  onChange,
}) => {
  return (
    <ArkSlider.Root
      className="flex flex-direction-col"
      min={min}
      max={max}
      value={value}
      onValueChange={(e) => onChange?.(e.value)}
    >
      <ArkSlider.Label>Label</ArkSlider.Label>
      <ArkSlider.ValueText />
      <ArkSlider.Control>
        <ArkSlider.Track>
          <ArkSlider.Range />
        </ArkSlider.Track>
        <ArkSlider.Thumb index={0}>
          <ArkSlider.HiddenInput />
        </ArkSlider.Thumb>
      </ArkSlider.Control>
    </ArkSlider.Root>
  );
};
