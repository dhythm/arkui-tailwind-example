import type { ComponentProps } from "react";
import { forwardRef } from "react";

import { Checkbox as ArkCheckbox } from "@ark-ui/react";
import { CheckIcon } from "lucide-react";

export const Checkbox = forwardRef<
  HTMLLabelElement,
  ComponentProps<typeof ArkCheckbox.Root>
>(function Root(props, ref) {
  return (
    <ArkCheckbox.Root
      className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
      {...props}
      ref={ref}
    >
      <ArkCheckbox.Label>ArkCheckbox</ArkCheckbox.Label>
      <ArkCheckbox.Control>
        <ArkCheckbox.Indicator>
          <CheckIcon />
        </ArkCheckbox.Indicator>
      </ArkCheckbox.Control>
      <ArkCheckbox.HiddenInput />
    </ArkCheckbox.Root>
  );
});
