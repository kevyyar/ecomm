import React from "react";

export interface CategoryCardProps {
  icon: React.ReactNode;
  name: string;
  backgroundColor?: "pink" | "blue" | "yellow" | "green" | "purple" | "orange";
  className?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  icon,
  name,
  backgroundColor = "pink",
  className = "",
}) => {
  const backgroundColorStyles = {
    pink: "bg-pastel-pink",
    blue: "bg-pastel-blue",
    yellow: "bg-pastel-yellow",
    green: "bg-pastel-green",
    purple: "bg-pastel-purple",
    orange: "bg-pastel-orange",
  };

  return (
    <div
      className={`${backgroundColorStyles[backgroundColor]} rounded-2xl p-8 transition-all duration-300 shadow-lg cursor-pointer ${className}`}
    >
      {/* Icon container */}
      <div className="flex items-center justify-center mb-6">
        <div className="text-4xl text-gray-700">{icon}</div>
      </div>

      {/* Category name */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800 font-poppins">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default CategoryCard;
