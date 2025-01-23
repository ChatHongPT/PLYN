import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = ({ products }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold">상품을 찾을 수 없습니다.</h2>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{product.price}</p>
          <p className="text-sm text-gray-500 mb-6">{product.description}</p>
          <div>
            <label htmlFor="options" className="block text-sm font-medium mb-2">
              옵션 선택
            </label>
            <select
              id="options"
              className="w-full border border-gray-300 rounded-md p-2"
            >
              {product.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <button className="w-full mt-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            구매하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
