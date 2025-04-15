import { Meta, StoryObj } from "@storybook/react";
import FormComponent from "../components/Form";

const meta = {
  title: "Form/FormInput",
  component: FormComponent.FormInput,
  parameters: {
    layout: "centered"
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormComponent.FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args:{
    type: 'text',
    label: 'test',
    name: 'testInput'
  }
}
