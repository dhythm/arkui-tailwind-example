import { Menu as ArkMenu } from "@ark-ui/react";
import { Portal } from "@ark-ui/react";

export const Menu = () => (
  <ArkMenu.Root>
    <ArkMenu.Trigger>Open menu</ArkMenu.Trigger>
    <ArkMenu.Positioner>
      <ArkMenu.Content>
        <ArkMenu.Root>
          <ArkMenu.TriggerItem>JS Frameworks</ArkMenu.TriggerItem>
          <Portal>
            <ArkMenu.Positioner>
              <ArkMenu.Content>
                <ArkMenu.Item value="react">React</ArkMenu.Item>
                <ArkMenu.Item value="solid">Solid</ArkMenu.Item>
                <ArkMenu.Item value="vue">Vue</ArkMenu.Item>
              </ArkMenu.Content>
            </ArkMenu.Positioner>
          </Portal>
        </ArkMenu.Root>
        <ArkMenu.Root>
          <ArkMenu.TriggerItem>CSS Frameworks</ArkMenu.TriggerItem>
          <Portal>
            <ArkMenu.Positioner>
              <ArkMenu.Content>
                <ArkMenu.Item value="panda">Panda</ArkMenu.Item>
                <ArkMenu.Item value="tailwind">Tailwind</ArkMenu.Item>
              </ArkMenu.Content>
            </ArkMenu.Positioner>
          </Portal>
        </ArkMenu.Root>
      </ArkMenu.Content>
    </ArkMenu.Positioner>
  </ArkMenu.Root>
);
