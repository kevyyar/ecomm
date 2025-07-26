import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Shirt,
  Smartphone,
  Home as HomeIcon,
  Book,
  Gamepad2,
  Car,
  Heart,
  Coffee,
  Music,
  Camera,
  Dumbbell,
  Palette,
} from "lucide-react";
import CategoryCard from "./CategoryCard";

const meta: Meta<typeof CategoryCard> = {
  title: "Components/CategoryCard",
  component: CategoryCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: false,
      description: "React node representing the category icon",
    },
    name: {
      control: "text",
      description: "Name of the category",
    },
    backgroundColor: {
      control: { type: "select" },
      options: ["pink", "blue", "yellow", "green", "purple", "orange"],
      description: "Background color variant for the card",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    icon: <Shirt className="w-8 h-8" />,
    name: "Fashion",
    backgroundColor: "pink",
  },
};

// Different background colors
export const Electronics: Story = {
  args: {
    icon: <Smartphone className="w-8 h-8" />,
    name: "Electronics",
    backgroundColor: "blue",
  },
};

export const HomeGarden: Story = {
  args: {
    icon: <HomeIcon className="w-8 h-8" />,
    name: "Home & Garden",
    backgroundColor: "green",
  },
};

export const Books: Story = {
  args: {
    icon: <Book className="w-8 h-8" />,
    name: "Books",
    backgroundColor: "yellow",
  },
};

export const Gaming: Story = {
  args: {
    icon: <Gamepad2 className="w-8 h-8" />,
    name: "Gaming",
    backgroundColor: "purple",
  },
};

export const Automotive: Story = {
  args: {
    icon: <Car className="w-8 h-8" />,
    name: "Automotive",
    backgroundColor: "orange",
  },
};

// Category grid showcase
export const CategoryGrid: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl">
      <CategoryCard
        icon={<Shirt className="w-8 h-8" />}
        name="Fashion"
        backgroundColor="pink"
      />
      <CategoryCard
        icon={<Smartphone className="w-8 h-8" />}
        name="Electronics"
        backgroundColor="blue"
      />
      <CategoryCard
        icon={<HomeIcon className="w-8 h-8" />}
        name="Home"
        backgroundColor="green"
      />
      <CategoryCard
        icon={<Book className="w-8 h-8" />}
        name="Books"
        backgroundColor="yellow"
      />
      <CategoryCard
        icon={<Gamepad2 className="w-8 h-8" />}
        name="Gaming"
        backgroundColor="purple"
      />
      <CategoryCard
        icon={<Car className="w-8 h-8" />}
        name="Automotive"
        backgroundColor="orange"
      />
      <CategoryCard
        icon={<Heart className="w-8 h-8" />}
        name="Health"
        backgroundColor="pink"
      />
      <CategoryCard
        icon={<Coffee className="w-8 h-8" />}
        name="Food"
        backgroundColor="yellow"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A grid layout showcasing multiple category cards with different colors and icons.",
      },
    },
  },
};

// Long category name
export const LongCategoryName: Story = {
  args: {
    icon: <Music className="w-8 h-8" />,
    name: "Music & Instruments",
    backgroundColor: "purple",
  },
};

// With emoji icons
export const WithEmoji: Story = {
  args: {
    icon: <span className="text-4xl">🎵</span>,
    name: "Music",
    backgroundColor: "purple",
  },
};

// Photography category
export const Photography: Story = {
  args: {
    icon: <Camera className="w-8 h-8" />,
    name: "Photography",
    backgroundColor: "blue",
  },
};

// Sports category
export const Sports: Story = {
  args: {
    icon: <Dumbbell className="w-8 h-8" />,
    name: "Sports",
    backgroundColor: "green",
  },
};

// Art category
export const Art: Story = {
  args: {
    icon: <Palette className="w-8 h-8" />,
    name: "Art & Crafts",
    backgroundColor: "orange",
  },
};

// Compact grid for mobile
export const CompactGrid: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-3 max-w-sm">
      <CategoryCard
        icon={<Shirt className="w-6 h-6" />}
        name="Fashion"
        backgroundColor="pink"
        className="p-4"
      />
      <CategoryCard
        icon={<Smartphone className="w-6 h-6" />}
        name="Tech"
        backgroundColor="blue"
        className="p-4"
      />
      <CategoryCard
        icon={<HomeIcon className="w-6 h-6" />}
        name="Home"
        backgroundColor="green"
        className="p-4"
      />
      <CategoryCard
        icon={<Book className="w-6 h-6" />}
        name="Books"
        backgroundColor="yellow"
        className="p-4"
      />
      <CategoryCard
        icon={<Gamepad2 className="w-6 h-6" />}
        name="Games"
        backgroundColor="purple"
        className="p-4"
      />
      <CategoryCard
        icon={<Car className="w-6 h-6" />}
        name="Auto"
        backgroundColor="orange"
        className="p-4"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A compact grid layout suitable for mobile devices with smaller icons and padding.",
      },
    },
  },
};

// All background colors showcase
export const AllBackgroundColors: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
      <CategoryCard
        icon={<Heart className="w-8 h-8" />}
        name="Pink"
        backgroundColor="pink"
      />
      <CategoryCard
        icon={<Smartphone className="w-8 h-8" />}
        name="Blue"
        backgroundColor="blue"
      />
      <CategoryCard
        icon={<Coffee className="w-8 h-8" />}
        name="Yellow"
        backgroundColor="yellow"
      />
      <CategoryCard
        icon={<HomeIcon className="w-8 h-8" />}
        name="Green"
        backgroundColor="green"
      />
      <CategoryCard
        icon={<Gamepad2 className="w-8 h-8" />}
        name="Purple"
        backgroundColor="purple"
      />
      <CategoryCard
        icon={<Car className="w-8 h-8" />}
        name="Orange"
        backgroundColor="orange"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Showcase of all available background color variants.",
      },
    },
  },
};
