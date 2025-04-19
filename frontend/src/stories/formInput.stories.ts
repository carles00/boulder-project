import { Meta, StoryObj } from "@storybook/react";
import FormComponent from "../components/Form";

const meta = {
  title: "Form/FormInput",
  component: FormComponent.FormInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FormComponent.FormInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextInput: Story = {
  args: {
    type: "text",
    label: "text",
    name: "testInput",
  },
};

export const EmailInput: Story = {
  args: {
    type: "email",
    label: "email",
    name: "emailInput",
  },
};

export const PasswordInput: Story = {
  args: {
    type: "password",
    label: "password",
    name: "passwordInput",
  },
};

export const ErrorInput: Story = {
  args: {
    type: "password",
    label: "password",
    name: "passwordInput",
    errorMessage: "Password too short\n",
  },
};
