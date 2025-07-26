import React from "react";

export interface IconInfoProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor?: string;
  className?: string;
}

const IconInfo: React.FC<IconInfoProps> = ({
  icon,
  title,
  description,
  iconBgColor = "bg-primary-pink-100",
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Icon container */}
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBgColor} text-primary-pink-600`}>
        {icon}
      </div>
      
      {/* Text content */}
        <h3 className="font-bold text-lg text-text-gray-800 mb-1">
          {title}
        </h3>
        <p className="text-text-gray-600">
          {description}
        </p>
    </div>
  );
};

export default IconInfo;