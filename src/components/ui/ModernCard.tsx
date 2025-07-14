import React from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";

export interface ModernCardProps {
  image: string;
  title: string;
  description: string;
  price?: number;
  rating?: number;
  onAddToCart?: () => void;
  onFavorite?: () => void;
  className?: string;
}

const ModernCard: React.FC<ModernCardProps> = ({
  image,
  title,
  description,
  price,
  rating = 0,
  onAddToCart,
  onFavorite,
  className = "",
}) => {
  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden ${className}`}
    >
      {/* Image container with overlay */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Favorite button */}
        <button
          onClick={onFavorite}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
          aria-label="Add to favorites"
        >
          <Heart className="w-4 h-4 text-gray-700 hover:text-red-500 transition-colors" />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">
            {title}
          </h3>
        </div>

        {/* Rating */}
        {rating > 0 && (
          <div className="flex items-center gap-1 mb-3">
            <Star className="w-4 h-4 text-yellow-400 fill-current flex-shrink-0" />
            <span className="text-sm text-gray-600">{rating}</span>
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Price and action */}
        <div className="flex items-center justify-between">
          {price && (
            <div>
              <span className="text-2xl font-bold text-gray-900">
                ${price.toFixed(2)}
              </span>
            </div>
          )}

          {onAddToCart && (
            <button
              onClick={onAddToCart}
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 active:scale-95"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm font-medium">Add</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernCard;
