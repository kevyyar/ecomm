import React from "react";
import { type Product } from "../../api/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow">
      <div className="w-full h-48 bg-gray-200 rounded-md mb-4">
        {/* Image placeholder */}
        <img
          src="https://picsum.photos/400/300"
          alt="Product placeholder"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-600 mt-1">{product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-500 mt-2 truncate">
        {product.description}
      </p>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-500 transition-colors">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
