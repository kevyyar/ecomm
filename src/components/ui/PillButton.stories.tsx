import type { Meta, StoryObj } from "@storybook/react-vite";
import { Flame, Sparkles, TrendingUp, Tag, Star } from "lucide-react";
import PillButton from "./PillButton";

const meta: Meta<typeof PillButton> = {
  title: "Components/PillButton",
  component: PillButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "Text to display in the pill",
    },
    icon: {
      control: false,
      description: "Optional icon to display alongside text",
    },
    variant: {
      control: "select",
      options: ["discount", "category", "new", "sale", "bestseller"],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the pill",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default discount pill
export const Discount: Story = {
  args: {
    text: "Save 20%",
    variant: "discount",
    size: "md",
  },
};

// Category pill
export const Category: Story = {
  args: {
    text: "Electronics",
    variant: "category",
    size: "md",
  },
};

// New product pill
export const New: Story = {
  args: {
    text: "New",
    variant: "new",
    size: "sm",
  },
};

// Sale pill
export const Sale: Story = {
  args: {
    text: "Sale",
    variant: "sale",
    size: "md",
  },
};

// Bestseller pill
export const Bestseller: Story = {
  args: {
    text: "Best Seller",
    variant: "bestseller",
    size: "lg",
  },
};

// Small size
export const Small: Story = {
  args: {
    text: "Hot",
    variant: "sale",
    size: "sm",
  },
};

// With fire icon (hot product)
export const WithFireIcon: Story = {
  args: {
    text: "Hot",
    icon: <Flame className="w-3 h-3" />,
    variant: "sale",
    size: "sm",
  },
};

// With sparkles icon
export const WithSparklesIcon: Story = {
  args: {
    text: "New",
    icon: <Sparkles className="w-3 h-3" />,
    variant: "new",
    size: "sm",
  },
};

// With trending icon
export const WithTrendingIcon: Story = {
  args: {
    text: "Trending",
    icon: <TrendingUp className="w-3 h-3" />,
    variant: "bestseller",
    size: "md",
  },
};

// With emoji fire
export const WithEmojiFire: Story = {
  args: {
    text: "Hot",
    icon: <span>🔥</span>,
    variant: "sale",
    size: "sm",
  },
};

// Large size
export const Large: Story = {
  args: {
    text: "Limited Time",
    variant: "discount",
    size: "lg",
  },
};

// Multiple pills showcase
export const MultiplePills: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <PillButton text="Save 15%" variant="discount" />
      <PillButton text="New Arrival" variant="new" />
      <PillButton text="Electronics" variant="category" />
      <PillButton text="Best Seller" variant="bestseller" />
      <PillButton text="Flash Sale" variant="sale" />
    </div>
  ),
};

// Multiple pills with icons
export const MultiplePillsWithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <PillButton
        text="Save 20%"
        icon={<Tag className="w-3 h-3" />}
        variant="discount"
      />
      <PillButton
        text="Hot"
        icon={<Flame className="w-3 h-3" />}
        variant="sale"
      />
      <PillButton
        text="New"
        icon={<Sparkles className="w-3 h-3" />}
        variant="new"
      />
      <PillButton
        text="Best"
        icon={<Star className="w-3 h-3" />}
        variant="bestseller"
      />
    </div>
  ),
};
