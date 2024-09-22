"use client";
import { useState } from "react";

const Tooltip = ({ text, position = "right", children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => {
    setIsVisible(true);
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  const tooltipPositionClasses = () => {
    switch (position) {
      case "right":
        return "left-full top-1/2 transform -translate-y-1/2 ml-2";
      case "left":
        return "right-full top-1/2 transform -translate-y-1/2 mr-2";
      case "top":
        return "bottom-full left-1/2 transform -translate-x-1/2 mb-2";
      case "bottom":
        return "top-full left-1/2 transform -translate-x-1/2 mt-2";
      default:
        return "left-full top-1/2 transform -translate-y-1/2 ml-2";
    }
  };

  const arrowPositionClasses = () => {
    switch (position) {
      case "right":
        return "left-0 top-1/2 transform -translate-y-1/2 -ml-3 border-8 border-transparent border-r-bgDrop"; // Arrow pointing left
      case "left":
        return "right-0 top-1/2 transform -translate-y-1/2 -mr-3 border-8 border-transparent border-l-bgDrop"; // Arrow pointing right
      case "top":
        return "bottom-0 left-1/2 transform -translate-x-1/2 -mb-2 border-8 border-transparent border-b-bgDrop"; // Arrow pointing down
      case "bottom":
        return "top-0 left-1/2 transform -translate-x-1/2 -mt-2 border-8 border-transparent border-t-bgDrop"; // Arrow pointing up
      default:
        return "left-0 top-1/2 transform -translate-y-1/2 -ml-2 border-8 border-transparent border-r-bgDrop"; // Default to arrow pointing left
    }
  };

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {isVisible && (
        <div
          className={`absolute ${tooltipPositionClasses()} z-[9999] flex items-center justify-center whitespace-nowrap rounded-md bg-bgDrop px-2 py-1 text-sm opacity-100 shadow-lg transition-opacity duration-300 ease-in-out`}
        >
          {text}
          {/* Tooltip Arrow */}
          <div
            className={`absolute h-0 w-0 border-8 ${arrowPositionClasses()}`}
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
