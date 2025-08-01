import React from "react";
import { Heart, Star, ArrowRight } from "lucide-react";
import PillButton, { type PillButtonProps } from "./PillButton";

export interface ModernCardProps {
  image: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  price?: number;
  rating?: number;
  totalRatings?: number;
  pill?: {
    text: string;
    variant?: PillButtonProps["variant"];
    size?: PillButtonProps["size"];
    icon?: React.ReactNode;
  };
  onClick?: () => void;
  onFavorite?: () => void;
  className?: string;
}

const ModernCard: React.FC<ModernCardProps> = ({
  image,
  title,
  description,
  icon,
  price,
  rating = 0,
  totalRatings = 0,
  pill,
  onClick,
  onFavorite,
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      className={`group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer ${className}`}
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
          onClick={(e) => {
            e.stopPropagation();
            onFavorite?.();
          }}
          className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 z-10"
          aria-label="Add to favorites"
        >
          <Heart className="w-4 h-4 text-gray-700 hover:text-red-500 transition-colors" />
        </button>

        {/* Optional icon badge */}
        {icon && (
          <div className="absolute top-3 left-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
            {icon}
          </div>
        )}

        {/* Pill button */}
        {pill && (
          <div className="absolute top-3 left-3 z-10">
            <PillButton
              text={pill.text}
              variant={pill.variant}
              size={pill.size || "sm"}
              icon={pill.icon}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center justify-between">
          {/* Left content */}
          <div className="flex-1 min-w-0">
            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 leading-tight truncate">
              {title}
            </h3>

            {/* Rating */}
            {rating > 0 && (
              <div className="flex items-center gap-2 mt-1">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300 fill-current'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 font-medium">{rating.toFixed(1)}</span>
                {totalRatings > 0 && (
                  <span className="text-xs text-gray-500">({totalRatings})</span>
                )}
              </div>
            )}

            {/* Description */}
            <p className="text-sm text-gray-600 line-clamp-2 mt-2 leading-relaxed">
              {description}
            </p>

            {/* Price */}
            {price && (
              <div className="mt-3">
                <span className="text-2xl font-bold text-gray-900">
                  ${price.toFixed(2)}
                </span>
              </div>
            )}
          </div>

          {/* Right arrow icon */}
          <div className="flex-shrink-0 ml-4">
            <div className="p-3 bg-gray-50 rounded-full">
              <ArrowRight className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernCard;
