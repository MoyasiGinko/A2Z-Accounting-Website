import React from "react";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "medium",
  color = "#0f3d3a",
}) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-12 h-12",
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizeClasses[size]} border-2 border-gray-300 border-t-transparent rounded-full animate-spin`}
        style={{
          borderTopColor: "transparent",
          borderColor: `${color} transparent transparent transparent`,
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
