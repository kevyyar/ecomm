import React from "react";

export interface PillButtonProps {
  text: string;
  icon?: React.ReactNode;
  variant?: "discount" | "category" | "new" | "sale" | "bestseller";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const PillButton: React.FC<PillButtonProps> = ({
  text,
  icon,
  variant = "discount",
  size = "md",
  className = "",
}) => {
  const baseStyles =
    "flex items-center justify-center font-medium rounded-full transition-colors duration-200";

  const variantStyles = {
    discount: "bg-red-500 text-white",
    category: "bg-blue-500 text-white",
    new: "bg-green-500 text-white",
    sale: "bg-orange-500 text-white",
    bestseller: "bg-purple-500 text-white",
  };

  const sizeStyles = {
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  };

  const iconSpacing = icon ? "gap-1" : "";

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${iconSpacing} ${className}`}
    >
      {icon}
      {text}
    </span>
  );
};

export default PillButton;
