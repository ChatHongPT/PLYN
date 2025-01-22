import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        {/* 로고 */}
        <div className="font-bold text-xl">
          <a href="/">KREAM</a>
        </div>

        {/* 메뉴 */}
        <nav className="flex items-center space-x-6 text-sm">
          <a href="/" className="hover:text-gray-500">
            HOME
          </a>
          <a href="/style" className="hover:text-gray-500">
            STYLE
          </a>
          <a href="/shop" className="hover:text-gray-500">
            SHOP
          </a>

          {/* 검색 아이콘 */}
          <button className="text-gray-600 hover:text-gray-800">
            <i className="fas fa-search"></i>
          </button>

          {/* 장바구니 아이콘 */}
          <button className="text-gray-600 hover:text-gray-800">
            <i className="fas fa-shopping-cart"></i>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
