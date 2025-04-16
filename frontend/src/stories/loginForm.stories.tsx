import { Meta, StoryObj } from "@storybook/react";
import LoginForm from "../pages/Auth/LoginPage";
import UserProvider from "../context/userContext/userProvider";
import { BrowserRouter, Route, Routes } from "react-router";

const meta = {
  title: "Form/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Routes>
          <Route
            path="*"
            element={
              <UserProvider>
                <Story />
              </UserProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    ),
  ],
};
