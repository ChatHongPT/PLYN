import React from "react";
import ReactSlickSlider from "react-slick"; // Rename react-slick to avoid conflict
import TopBar from "../components/common/Topbar";
import Header from "../components/common/header";
import Footer from "../components/common/Footer";
import CustomSlider from "../components/common/Slider"; // Rename to avoid conflict
import NavigationBar from "../components/common/NavigationBar";

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
        name: "Suade",
        description: "Suade Thermal Camo Hood Zip Up Tree Camo",
        price: "98,100원",
        image: "https://via.placeholder.com/300x300",
      },

      {
        id: 4,
        name: "Nike",
        description: "Nike Air Zoom Alphafly Next% 3 Black Olive Aura",
        price: "399,000원",
        image: "https://via.placeholder.com/300x300",
      },
    // More products...
  ];

  const mostpopular = [
    {
      id: 1,
      name: "Matin Kim",
      description: "Matin Kim Color Line Point Logo Knit Pullover Black",
      price: "140,000원",
      image: "https://via.placeholder.com/300x300",
    },
    // More products...
  ];

  const newIn = [
    {
      id: 1,
      name: "IAB Studio",
      description: "IAB Studio Gingham Check Shirt Black White",
      price: "157,000원",
      image: "https://via.placeholder.com/300x300",
    },
    // More products...
  ];

  const backpackPopular = [
    {
      id: 1,
      name: "백팩 1",
      description: "인기 백팩 상품",
      price: "89,000원",
      image: "https://via.placeholder.com/300x300",
    },
    // More products...
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const renderSliderSection = (title, products) => (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">{title}</h2>
        <ReactSlickSlider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="p-4">
              <div className="border rounded-lg overflow-hidden hover:shadow-lg transition">
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
            </div>
          ))}
        </ReactSlickSlider>
      </div>
    </section>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />
      <CustomSlider/>


      {/* Categories Section */}
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
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

      {/* Recommended Products Slider */}
      {renderSliderSection("회원님을 위한 추천 상품", recommendedProducts)}

      {/* Most Popular Slider */}
      {renderSliderSection("Most Popular", mostpopular)}

      {/* New In Slider */}
      {renderSliderSection("New In", newIn)}

      {/* 인기 백팩 Slider */}
      {renderSliderSection("인기 백팩", backpackPopular)}

      <Footer className="mb-16" />
      <NavigationBar className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg" />
    </div>
  );
};

export default MainPage;
