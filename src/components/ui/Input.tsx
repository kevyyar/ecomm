import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  containerClassName?: string;
}

export const Input: React.FC<InputProps> = ({
  iconLeft,
  iconRight,
  className,
  containerClassName,
  ...props
}) => {

  const baseInputClasses = 'w-full h-full text-base bg-transparent focus:outline-none text-text-gray-700 placeholder:text-text-gray-500';

  const containerClasses = `
    relative flex items-center h-12 
    bg-bg-white border-2 border-border-gray-300 rounded-lg 
    transition-all duration-200 ease-in-out
    focus-within:border-border-pink-300 
    focus-within:ring-2 focus-within:ring-border-pink-200/50
  `;
  
  const paddingClasses = `
    ${iconLeft ? 'pl-10' : 'pl-4'}
    ${iconRight ? 'pr-10' : 'pr-4'}
    py-3
  `;

  return (
    <div className={`${containerClasses} ${containerClassName || ''}`}>
      {iconLeft && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-gray-400">
          {iconLeft}
        </span>
      )}
      <input
        className={`${baseInputClasses} ${paddingClasses} ${className || ''}`}
        {...props}
      />
      {iconRight && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-gray-400">
          {iconRight}
        </span>
      )}
    </div>
  );
};