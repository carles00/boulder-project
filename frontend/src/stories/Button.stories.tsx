import { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StandardButton: Story = {
  args:{
    children: <span>Standard</span>,
    buttonType: 'primary',
  }
}

export const DangerButton: Story = {
  args:{
    children: <span>Danger</span>,
    buttonType: 'danger',
  }
}

export const WhiteButton: Story = {
  args:{
    children: <span>White</span>,
    buttonType: 'white',
  }
}