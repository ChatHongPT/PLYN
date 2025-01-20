import React, { useState } from "react";

const Slider = () => {
  const slides = [
    {
      id: 1,
      image: "https://via.placeholder.com/1500x500?text=Slide+1",
      title: "MILLO ARCHIVE",
      subtitle: "파이널 시즌오프",
      description: "-50% 할인 | 15% 쿠폰",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/1500x500?text=Slide+2",
      title: "NEW ARRIVALS",
      subtitle: "최신 패션 컬렉션",
      description: "2025년 최신 트렌드",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/1500x500?text=Slide+3",
      title: "EXCLUSIVE SALE",
      subtitle: "럭셔리 브랜드 할인",
      description: "최대 70% 할인",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative bg-gray-100 h-96 overflow-hidden">
      {/* 슬라이드 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">{slides[currentSlide].title}</h1>
          <p className="text-lg mt-2">{slides[currentSlide].subtitle}</p>
          <p className="text-sm mt-1">{slides[currentSlide].description}</p>
        </div>
      </div>

      {/* 이전 버튼 */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 transition"
      >
        &lt;
      </button>

      {/* 다음 버튼 */}
      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow hover:bg-gray-200 transition"
      >
        &gt;
      </button>

      {/* 슬라이드 인디케이터 */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide
                ? "bg-white"
                : "bg-gray-400"
            } transition`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
