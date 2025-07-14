import type { Meta, StoryObj } from '@storybook/react';
import PillButton from './PillButton';

const meta: Meta<typeof PillButton> = {
  title: 'Components/PillButton',
  component: PillButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Text to display in the pill',
    },
    variant: {
      control: 'select',
      options: ['discount', 'category', 'new', 'sale', 'bestseller'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the pill',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default discount pill
export const Discount: Story = {
  args: {
    text: 'Save 20%',
    variant: 'discount',
    size: 'md',
  },
};

// Category pill
export const Category: Story = {
  args: {
    text: 'Electronics',
    variant: 'category',
    size: 'md',
  },
};

// New product pill
export const New: Story = {
  args: {
    text: 'New',
    variant: 'new',
    size: 'sm',
  },
};

// Sale pill
export const Sale: Story = {
  args: {
    text: 'Sale',
    variant: 'sale',
    size: 'md',
  },
};

// Bestseller pill
export const Bestseller: Story = {
  args: {
    text: 'Best Seller',
    variant: 'bestseller',
    size: 'lg',
  },
};

// Small size
export const Small: Story = {
  args: {
    text: 'Hot',
    variant: 'sale',
    size: 'sm',
  },
};

// Large size
export const Large: Story = {
  args: {
    text: 'Limited Time',
    variant: 'discount',
    size: 'lg',
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