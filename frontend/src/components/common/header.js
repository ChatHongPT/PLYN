import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white shadow-lg">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* 로고 */}
                <h1 className="text-2xl font-bold">
                    <Link to="/" className="hover:text-gray-400 transition">
                        FashionHub
                    </Link>
                </h1>

                {/* 내비게이션 메뉴 */}
                <nav>
                    <ul className="flex space-x-8 text-lg">
                        <li>
                            <Link
                                to="/men"
                                className="hover:text-gray-400 transition"
                            >
                                Men
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/women"
                                className="hover:text-gray-400 transition"
                            >
                                Women
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/sale"
                                className="hover:text-gray-400 transition"
                            >
                                Sale
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/upload"
                                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
                            >
                                Upload Product
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
