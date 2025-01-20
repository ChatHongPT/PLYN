import React from "react";

const categories = [
  { name: "남성 추천", icon: "👔" },
  { name: "여성 추천", icon: "👗" },
  { name: "신발", icon: "👟" },
  { name: "가방", icon: "👜" },
];

const Categories = () => {
  return (
    <div className="bg-white py-4">
      <div className="grid grid-cols-4 gap-4 px-4">
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
  );
};

export default Categories;
