import React from "react";
import Header from "../components/common/Header"; // Header 컴포넌트
import Footer from "../components/common/NavigationBar"; // Footer 컴포넌트
import Slider from "../components/common/Slider"; // Slider 컴포넌트

const MainPage = () => {
  const categories = [
    { name: "PLYN DRAW", icon: "🎁" },
    { name: "남성 추천", icon: "👔" },
    { name: "여성 추천", icon: "👗" },
    { name: "패딩", icon: "🧥" },
    { name: "신발", icon: "👟" },
    { name: "가방", icon: "👜" },
    { name: "모자", icon: "🧢" },
    { name: "액세서리", icon: "💍" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Slider Section */}
      <Slider />

      {/* Categories Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-8">추천 카테고리</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="flex flex-col items-center justify-center p-4 border rounded-md hover:bg-gray-100"
              >
                <span className="text-2xl">{category.icon}</span>
                <span className="text-sm mt-2">{category.name}</span>
              </button>
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
