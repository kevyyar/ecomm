import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag, Zap, Gift } from "lucide-react";
import ModernCard from "./ModernCard";

const meta: Meta<typeof ModernCard> = {
  title: "Components/ModernCard",
  component: ModernCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    image: {
      control: "text",
      description: "URL de la imagen del producto",
    },
    title: {
      control: "text",
      description: "Título del producto",
    },
    description: {
      control: "text",
      description: "Descripción del producto",
    },
    price: {
      control: "number",
      description: "Precio del producto",
    },
    rating: {
      control: { type: "range", min: 0, max: 5, step: 0.1 },
      description: "Calificación del producto (0-5)",
    },
    icon: {
      control: false,
      description: "Icono opcional para mostrar en la esquina superior izquierda",
    },
    onClick: {
      action: 'clicked',
      description: 'Función ejecutada al hacer click en la card para redirigir a detalles',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Story Basic
export const Default: Story = {
  args: {
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
    title: "Smart Watch Pro",
    description:
      "Reloj inteligente con monitoreo de salud avanzado y batería de 7 días. Perfecto para tu estilo de vida activo.",
    price: 299.99,
    rating: 4.5,
    onClick: () => console.log('Navigate to product details'),
  },
};

// No Price
export const WithoutPrice: Story = {
  args: {
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop",
    title: "Zapatillas Deportivas Premium",
    description:
      "Diseño ergonómico y materiales de alta calidad para máximo confort durante tus entrenamientos.",
    rating: 4.8,
  },
};

// Product Grid
export const ProductGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
      <ModernCard
        image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
        title="Audífonos Inalámbricos"
        description="Sonido de alta fidelidad con cancelación de ruido activa. Batería de 30 horas."
        price={199.99}
        rating={4.7}
        icon={<Zap className="w-4 h-4 text-blue-500" />}
        onClick={() => console.log('Navigate to headphones details')}
      />
      <ModernCard
        image="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=300&fit=crop"
        title="Cámara Vintage"
        description="Cámara analógica con diseño retro. Perfecta para fotógrafos entusiastas."
        price={449.99}
        rating={4.9}
        icon={<Gift className="w-4 h-4 text-green-500" />}
        onClick={() => console.log('Navigate to camera details')}
      />
      <ModernCard
        image="https://images.unsplash.com/photo-1560343090-f0409e92791a?w=400&h=300&fit=crop"
        title="Sneakers Urban"
        description="Estilo urbano moderno con máxima comodidad. Edición limitada disponible."
        price={129.99}
        rating={4.4}
        icon={<Tag className="w-4 h-4 text-red-500" />}
        onClick={() => console.log('Navigate to sneakers details')}
      />
    </div>
  ),
};

// Producto no rating
export const NoRating: Story = {
  args: {
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=400&h=300&fit=crop",
    title: "Bolso de Cuero",
    description:
      "Bolso de cuero genuino con diseño minimalista. Perfecto para el día a día.",
    price: 79.99,
  },
};

// Card minimalista
export const Minimal: Story = {
  args: {
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
    title: "Taza Cerámica",
    description: "Taza de cerámica artesanal. Diseño único y moderno.",
  },
};

// Clickable Card
export const ClickableCard: Story = {
  args: {
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=300&fit=crop",
    title: "Smartphone Pro Max",
    description:
      "El último modelo con cámara profesional y rendimiento excepcional.",
    price: 999.99,
    rating: 4.8,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Card clickable con icono arrow right que redirige a los detalles del producto. El botón favorito funciona independientemente.",
      },
    },
  },
};
