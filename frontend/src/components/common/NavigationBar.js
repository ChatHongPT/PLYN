import React from "react";

const NavigationBar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md border-t flex justify-around py-2">
      <button className="flex flex-col items-center text-gray-600">
        <span>🏠</span>
        <span className="text-xs">HOME</span>
      </button>
      <button className="flex flex-col items-center text-gray-600">
        <span>🛍️</span>
        <span className="text-xs">SHOP</span>
      </button>
      <button className="flex flex-col items-center text-gray-600">
        <span>💾</span>
        <span className="text-xs">SAVED</span>
      </button>
      <button className="flex flex-col items-center text-gray-600">
        <span>👤</span>
        <span className="text-xs">MY</span>
      </button>
    </nav>
  );
};

export default NavigationBar;
