import React, { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentItems, setRecentItems] = useState([
    { id: 1, name: "New Balance 993", image: "https://via.placeholder.com/50", link: "/product/1" },
    { id: 2, name: "Nike Air Force 1", image: "https://via.placeholder.com/50", link: "/product/2" },
    { id: 3, name: "Adidas Ultraboost", image: "https://via.placeholder.com/50", link: "/product/3" },
  ]);
  const [popularKeywords, setPopularKeywords] = useState([
    "신발 추천",
    "코디 아이템",
    "겨울 패딩",
    "2025 트렌드",
    "럭셔리 가방",
  ]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center px-4 py-8">
      {/* 검색창 */}
      <div className="w-full max-w-2xl">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="브랜드, 상품, 프로필, 태그 등을 검색하세요"
          className="w-full py-3 px-4 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
      </div>

      {/* 추천 검색어 */}
      <div className="w-full max-w-2xl mt-6">
        <h2 className="text-lg font-bold mb-4">추천 검색어</h2>
        <div className="flex flex-wrap gap-2">
          {popularKeywords.map((keyword, index) => (
            <button
              key={index}
              className="py-2 px-4 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300"
            >
              {keyword}
            </button>
          ))}
        </div>
      </div>

      {/* 인기 검색어 */}
      <div className="w-full max-w-2xl mt-8">
        <h2 className="text-lg font-bold mb-4">인기 검색어</h2>
        <ul className="list-disc list-inside space-y-2">
          {popularKeywords.map((keyword, index) => (
            <li key={index} className="text-gray-700">
              {index + 1}. {keyword}
            </li>
          ))}
        </ul>
      </div>

      {/* 최근 검색어 */}
      <div className="w-full max-w-2xl mt-8">
        <h2 className="text-lg font-bold mb-4">최근 검색어</h2>
        <ul className="space-y-2">
          {recentItems.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center border-b pb-2"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded mr-3"
                />
                <span className="text-gray-700">{item.name}</span>
              </div>
              <a
                href={item.link}
                className="text-blue-500 text-sm hover:underline"
              >
                보러 가기
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
