import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 shadow-md bg-white">
      <div className="text-xl font-bold">PLYN</div>
      <div className="flex items-center space-x-4">
        <button className="p-2">🔔</button>
        <button className="p-2">👤</button>
      </div>
    </header>
  );
};

export default Header;
