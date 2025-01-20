import React from "react";
import Header from "../components/common/header"; // Header 컴포넌트 경로
import Footer from "../components/common/footer"; // Footer 컴포넌트 경로

const MainPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <div className="bg-cover bg-center h-screen relative" style={{ backgroundImage: "url('/path-to-your-hero-image.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center text-white">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to FashionHub</h1>
                        <p className="text-lg md:text-2xl mb-8">
                            Discover the latest trends in fashion and style!
                        </p>
                        <a
                            href="/shop"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg rounded transition"
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>

            {/* Featured Products */}
            <section className="container mx-auto py-12 px-4">
                <h2 className="text-3xl font-semibold text-center mb-10">Featured Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Example Product Cards */}
                    {[1, 2, 3, 4].map((product) => (
                        <div key={product} className="bg-white shadow-md rounded-lg overflow-hidden">
                            <img
                                src={`/path-to-product-image-${product}.jpg`}
                                alt={`Product ${product}`}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-lg font-bold mb-2">Product {product}</h3>
                                <p className="text-gray-600 mb-4">$29.99</p>
                                <a
                                    href={`/product/${product}`}
                                    className="bg-blue-600 hover:bg-blue-700 text-white text-center block py-2 rounded"
                                >
                                    View Details
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Categories */}
            <section className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-semibold text-center mb-10">Shop by Category</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {/* Example Categories */}
                        {["Men", "Women", "Kids", "Accessories"].map((category) => (
                            <div
                                key={category}
                                className="bg-gray-200 hover:bg-gray-300 transition text-center p-6 rounded-lg"
                            >
                                <h3 className="text-lg font-bold">{category}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainPage;
