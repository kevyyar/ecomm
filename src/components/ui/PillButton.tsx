import React from 'react';

export interface PillButtonProps {
  text: string;
  variant?: 'discount' | 'category' | 'new' | 'sale' | 'bestseller';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const PillButton: React.FC<PillButtonProps> = ({
  text,
  variant = 'discount',
  size = 'md',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-colors duration-200';
  
  const variantStyles = {
    discount: 'bg-red-500 text-white',
    category: 'bg-blue-500 text-white',
    new: 'bg-green-500 text-white',
    sale: 'bg-orange-500 text-white',
    bestseller: 'bg-purple-500 text-white',
  };

  const sizeStyles = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {text}
    </span>
  );
};

export default PillButton;