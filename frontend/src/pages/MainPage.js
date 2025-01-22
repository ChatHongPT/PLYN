import React from "react";
import TopBar from "../components/common/Topbar"; // 상단바 컴포넌트
import Header from "../components/common/header"; // Header 컴포넌트
import Footer from "../components/common/Footer"; // Footer 컴포넌트
import Slider from "../components/common/Slider"; // Slider 컴포넌트

const MainPage = () => {
  const categories = [
    { name: "남성 추천", image: "/images/man.png" },
    { name: "여성 추천", image: "/images/woman.png" },
    { name: "색다른 추천", image: "/images/unique.png" },
    { name: "정가 아래", image: "/images/discount.png" },
    { name: "패딩", image: "/images/padding.png" },
    { name: "신발", image: "/images/shoes.png" },
    { name: "후드 & 집업", image: "/images/hoodie.png" },
    { name: "지갑", image: "/images/wallet.png" },
  ];

  const recommendedProducts = [
    {
      id: 1,
      name: "New Balance",
      description: "New Balance x JJJJound 993 Made in USA Military Urban Grey Black",
      price: "-",
      image: "https://via.placeholder.com/300x300",
    },
    {
      id: 2,
      name: "Zara",
      description: "Zara x Ader Error Patchwork Oversize Knit Sweater Multicolor",
      price: "265,000원",
      image: "https://via.placeholder.com/300x300",
    },
    {
      id: 3,
      name: "Matin Kim",
      description: "Matin Kim Color Line Point Logo Knit Pullover Black",
      price: "140,000원",
      image: "https://via.placeholder.com/300x300",
    },
    {
      id: 4,
      name: "IAB Studio",
      description: "IAB Studio Gingham Check Shirt Black White",
      price: "157,000원",
      image: "https://via.placeholder.com/300x300",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* TopBar */}
      <TopBar />

      {/* Header */}
      <Header />

      {/* Slider */}
      <Slider />

      {/* Categories Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-6">카테고리</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div
                key={index}
                className="p-4 bg-white rounded-lg shadow hover:shadow-md transition"
              >
                <div className="flex items-center justify-center h-32">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full object-contain"
                  />
                </div>
                <p className="text-lg font-medium text-center mt-2">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-6">회원님을 위한 추천 상품</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {recommendedProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                  <p className="text-lg font-semibold mt-2">{product.price}</p>
                </div>
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
