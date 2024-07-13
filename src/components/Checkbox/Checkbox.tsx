import type { ComponentProps } from "react";
import { forwardRef } from "react";

import { Checkbox as ArkCheckbox } from "@ark-ui/react";
import { CheckIcon } from "lucide-react";

type Props = ComponentProps<typeof ArkCheckbox.Root> & {
  label: string;
};

export const Checkbox = forwardRef<HTMLLabelElement, Props>(function Root(
  { label, ...rest },
  ref
) {
  return (
    <ArkCheckbox.Root className="flex" {...rest} ref={ref}>
      <ArkCheckbox.Control className="h-8 w-8">
        <ArkCheckbox.Indicator className="border">
          <CheckIcon />
        </ArkCheckbox.Indicator>
      </ArkCheckbox.Control>
      <ArkCheckbox.Label>{label}</ArkCheckbox.Label>
      <ArkCheckbox.HiddenInput />
    </ArkCheckbox.Root>
  );
});
