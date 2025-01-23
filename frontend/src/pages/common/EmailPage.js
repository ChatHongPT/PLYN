import React from "react";
import { useNavigate } from "react-router-dom";

const FindEmail = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">
      {/* 뒤로 가기 버튼 */}
      <div className="absolute top-4 left-4">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-600 hover:text-gray-800 flex items-center"
        >
          <i className="fas fa-arrow-left mr-2"></i> 뒤로 가기
        </button>
      </div>

      {/* 이메일 찾기 */}
      <div className="w-full max-w-lg mt-12 bg-white p-8 rounded-lg shadow">
        <h1 className="text-xl font-bold mb-4">이메일 찾기</h1>
        <p className="text-sm text-gray-600 mb-6">
          본인 인증 완료 후, 이메일 주소를 알려드립니다.
        </p>

        <button
          type="button"
          className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
        >
          본인 인증하고 이메일 찾기
        </button>
      </div>
    </div>
  );
};

export default FindEmail;
