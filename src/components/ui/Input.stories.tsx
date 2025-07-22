import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";
import { Search, Eye, Mail, Lock, User, Phone } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url"],
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    iconLeft: {
      control: false,
    },
    iconRight: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter your text...",
  },
};

export const WithLeftIcon: Story = {
  args: {
    placeholder: "Search...",
    iconLeft: <Search size={20} />,
  },
};

export const WithRightIcon: Story = {
  args: {
    placeholder: "Enter password",
    iconRight: <Eye size={20} />,
  },
};

export const WithBothIcons: Story = {
  args: {
    placeholder: "Enter your email",
    iconLeft: <Mail size={20} />,
    iconRight: <span className="text-xs text-text-gray-500">@gmail.com</span>,
  },
};

export const EmailInput: Story = {
  args: {
    type: "email",
    placeholder: "Enter your email",
    iconLeft: <Mail size={20} />,
  },
};

export const PasswordWithToggle: Story = {
  args: {
    type: "password",
    placeholder: "Enter your password",
    iconLeft: <Lock size={20} />,
    passwordToggle: true,
  },
};

export const UsernameInput: Story = {
  args: {
    placeholder: "Enter username",
    iconLeft: <User size={20} />,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "This input is disabled",
    disabled: true,
  },
};

export const DisabledWithIcon: Story = {
  args: {
    placeholder: "Disabled with icon",
    iconLeft: <Search size={20} />,
    disabled: true,
  },
};

export const PhoneInput: Story = {
  args: {
    type: "tel",
    placeholder: "Enter phone number",
    iconLeft: <Phone size={20} />,
  },
};
