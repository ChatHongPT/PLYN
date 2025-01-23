import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import TopBar from "../../components/common/Topbar";
import Header from "../../components/common/header";
import Footer from "../../components/common/Footer";
import NavigationBar from "../../components/common/NavigationBar";


const ShopPage = () => {
  const [banners, setBanners] = useState([]);
  const [clothingData, setClothingData] = useState([]);
  const [filter, setFilter] = useState("전체");

  useEffect(() => {
    // 배너 데이터 불러오기
    fetch("/data/banners.json") // 반드시 /data/로 시작
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load banners data");
        }
        return response.json();
      })
      .then((data) => setBanners(data))
      .catch((error) => console.error("Error loading banners:", error));
  
    // 의류 데이터 불러오기
    fetch("/data/clothing.json") // 반드시 /data/로 시작
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load clothing data");
        }
        return response.json();
      })
      .then((data) => setClothingData(data))
      .catch((error) => console.error("Error loading clothing data:", error));
  }, []);
  

  // 필터링된 데이터
  const filteredData =
    filter === "전체"
      ? clothingData
      : clothingData.filter((item) => item.category === filter);

  // 슬라이더 설정
  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <Header />

      <section className="bg-white py-4">
        <div className="container mx-auto px-4">
            <Slider {...bannerSettings}>
            {banners.map((banner) => (
                <div key={banner.id} className="text-center">
                <img
                    src={banner.image}
                    alt={banner.name}
                    className="mx-auto h-32"
                />
                <p className="text-sm font-medium mt-2">{banner.name}</p>
                </div>
            ))}
            </Slider>
        </div>
        </section>


      {/* 필터 버튼 */}
      <div className="container mx-auto px-4 my-4">
        <div className="flex space-x-4">
          {["전체", "아우터", "상의", "신발"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg ${
                filter === category
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 의류 목록 */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.price}</p>
                <p className="text-sm text-gray-500">{item.brand}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <NavigationBar />
    </div>
  );
};

export default ShopPage;
