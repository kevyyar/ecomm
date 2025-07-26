import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heart, Shield, Rocket } from "lucide-react";
import IconInfo from "./IconInfo";

const meta: Meta<typeof IconInfo> = {
  title: "UI/IconInfo",
  component: IconInfo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: { disable: true },
      description: "React node for the icon to display",
    },
    title: {
      control: "text",
      description: "Title text for the component",
    },
    description: {
      control: "text",
      description: "Description text for the component",
    },
    iconBgColor: {
      control: "text",
      description: "Background color class for the icon container",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Heart className="w-6 h-6" />,
    title: "Característica Principal",
    description: "Descripción breve de la característica o beneficio principal que ofrece este servicio.",
  },
};

export const Security: Story = {
  args: {
    icon: <Shield className="w-6 h-6" />,
    title: "Seguridad Garantizada",
    description: "Tus datos están protegidos con los más altos estándares de seguridad del mercado.",
    iconBgColor: "bg-blue-100",
  },
};

export const Performance: Story = {
  args: {
    icon: <Rocket className="w-6 h-6" />,
    title: "Alto Rendimiento",
    description: "Optimizado para brindar la mejor experiencia de usuario con tiempos de respuesta mínimos.",
    iconBgColor: "bg-green-100",
  },
};