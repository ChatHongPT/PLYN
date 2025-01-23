import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* 뒤로 가기 버튼 */}
      <div className="absolute top-4 left-4">
        <button
          onClick={() => navigate(-1)} // 이전 페이지로 이동
          className="text-gray-600 hover:text-gray-800 flex items-center"
        >
          <i className="fas fa-arrow-left mr-2"></i> 뒤로 가기
        </button>
      </div>

      {/* 로그인 폼 */}
      <div className="w-full max-w-md mt-4 bg-white p-8 rounded-lg shadow">
        {/* 로고 및 문구 */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">PLYN</h1>
          <p className="text-sm text-gray-500">PLYN RULE EVERYTHING AROUND ME</p>
        </div>

        <form className="space-y-6">
          {/* 이메일 입력 */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              이메일 주소
            </label>
            <input
              type="email"
              id="email"
              placeholder="plyn@plyn.co.kr"
              className="w-full mt-1 border-b border-gray-300 focus:border-black focus:outline-none py-2 placeholder-gray-400"
            />
          </div>

          {/* 비밀번호 입력 */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력하세요"
              className="w-full mt-1 border-b border-gray-300 focus:border-black focus:outline-none py-2 placeholder-gray-400"
            />
          </div>

          {/* 로그인 버튼 */}
          <button
            type="submit"
            className="w-full py-3 bg-gray-200 text-gray-500 font-semibold rounded-lg hover:bg-gray-300 transition"
          >
            로그인
          </button>
        </form>

        {/* 추가 링크 */}
        <div className="flex justify-between text-sm text-gray-500 mt-4">
          <a href="/signup" className="hover:text-gray-700">
            이메일 가입
          </a>
          <a href="/find-email" className="hover:text-gray-700">
            이메일 찾기
          </a>
          <a href="/reset-password" className="hover:text-gray-700">
            비밀번호 찾기
          </a>
        </div>

        {/* 소셜 로그인 */}
        <div className="mt-8 space-y-4">
          <button
            type="button"
            className="w-full flex items-center justify-center py-3 border rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            <img
              src="/images/naver_logo.png"
              alt="Naver"
              className="h-5 mr-2"
            />
            네이버로 로그인
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center py-3 border rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            <img
              src="/images/apple_logo.png"
              alt="Apple"
              className="h-5 mr-2"
            />
            Apple로 로그인
          </button>
        </div>
      </div>
      <div>
    </div>
    </div>
  );
};

export default Login;
