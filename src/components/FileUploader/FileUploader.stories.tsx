import { Meta, StoryObj } from "@storybook/react";
import { FileUploader } from "./FileUploader";

const component = () => {
  return <FileUploader />;
};

const meta = {
  title: "Components/FileUploader",
  component,
  parameters: {},
} satisfies Meta<typeof component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
