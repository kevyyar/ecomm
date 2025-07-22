import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { formatPhoneNumber } from "../../utils/formatPhoneNumber";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  containerClassName?: string;
  passwordToggle?: boolean;
}

export const Input: React.FC<InputProps> = ({
  iconLeft,
  iconRight,
  className,
  containerClassName,
  passwordToggle = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const {
    type = "text",
    value: controlledValue,
    onChange: controlledOnChange,
    ...inputProps
  } = props;
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : inputValue;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    if (type === "tel") {
      newValue = formatPhoneNumber(newValue);
    }
    if (!isControlled) {
      setInputValue(newValue);
    }
    if (controlledOnChange) {
      controlledOnChange(e);
    }
  };
  const inputType =
    passwordToggle && type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;
  const baseInputClasses =
    "w-full h-full text-base bg-transparent focus:outline-none text-text-gray-700 placeholder:text-text-gray-500";
  const containerClasses = `
    relative flex items-center h-12
    bg-bg-white border-2 border-border-gray-300 rounded-lg
    transition-all duration-200 ease-in-out
    focus-within:border-border-pink-300
    focus-within:ring-2 focus-within:ring-border-pink-200/50
  `;
  const paddingClasses = `
    ${iconLeft ? "pl-10" : "pl-4"}
    ${(passwordToggle && type === "password") || iconRight ? "pr-10" : "pr-4"}
    py-3
  `;
  const rightElement =
    passwordToggle && type === "password" ? (
      <button
        type="button"
        className="absolute right-3 top-1/2 -translate-y-1/2 text-text-gray-400 bg-transparent border-none cursor-pointer focus:outline-none"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
      </button>
    ) : iconRight ? (
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-gray-400">
        {iconRight}
      </span>
    ) : null;
  return (
    <div className={`${containerClasses} ${containerClassName || ""}`}>
      {iconLeft && (
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-gray-400">
          {iconLeft}
        </span>
      )}
      <input
        type={inputType}
        className={`${baseInputClasses} ${paddingClasses} ${className || ""}`}
        value={value}
        onChange={handleChange}
        {...inputProps}
      />
      {rightElement}
    </div>
  );
};
