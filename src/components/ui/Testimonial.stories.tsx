import type { Meta, StoryObj } from "@storybook/react-vite";
import Testimonial from "./Testimonial";

const meta: Meta<typeof Testimonial> = {
  title: "Components/Testimonial",
  component: Testimonial,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    quote: {
      control: "text",
      description: "Main testimonial text shown in quotes",
    },
    author: {
      control: "text",
      description: "Name of the person giving the testimonial",
    },
    role: {
      control: "text",
      description: "Role or short description of the person",
    },
    product: {
      control: "text",
      description: "Product or collection referenced",
    },
    avatar: {
      control: "text",
      description: "URL for the author's avatar image",
    },
    rating: {
      control: { type: "range", min: 0, max: 5, step: 0.1 },
      description: "Star rating to display (0-5)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    quote:
      "The organic cotton onesies are incredibly soft and have held up beautifully through countless washes. My baby's sensitive skin has never been happier!",
    author: "Sarah Johnson",
    role: "Mom of 2",
    product: "Organic Cotton Collection",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=160&h=160&fit=crop",
    rating: 5,
  },
};

export const WithoutAvatar: Story = {
  args: {
    quote:
      "These eco-friendly diapers are a game changer! They keep my baby dry all night and I love that they're sustainable.",
    author: "Carlos Rivera",
    role: "First-time Dad",
    product: "Eco Diaper Pack",
    rating: 4.5,
  },
};

export const LowRating: Story = {
  args: {
    quote:
      "The product quality is good but the shipping took longer than expected.",
    author: "Emily Chen",
    role: "Verified Buyer",
    product: "Baby Blanket",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=160&h=160&fit=crop",
    rating: 3,
  },
};