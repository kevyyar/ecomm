import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: React.ReactNode;
}

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "font-semibold font-poppins transition-all duration-300 ease-in-out flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary:
      "text-white bg-gradient-to-r from-primary-pink-500 to-primary-rose-500 hover:from-primary-pink-500 border-none hover:shadow-lg hover:-translate-y-px",
    secondary:
      "bg-transparent text-primary-pink-500 border-2 border-border-pink-300 hover:bg-pastel-pink hover:border-primary-pink-500",
    outline:
      "bg-transparent text-text-gray-700 border border-border-gray-300 hover:bg-bg-gray-50 hover:border-text-gray-400",
    ghost: "bg-transparent text-text-gray-700 border-none hover:bg-bg-gray-100",
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm h-8 rounded", // Usamos los tokens de spacing y font-size de TW
    md: "px-4 py-2.5 text-base h-10 rounded-md", // py-2.5 no es un token exacto, pero se acerca
    lg: "px-6 py-3 text-lg h-12 rounded-lg",
    xl: "px-8 py-4 text-xl h-14 rounded-xl",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${
    sizeClasses[size]
  } ${className || ""}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};
