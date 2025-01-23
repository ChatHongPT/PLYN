import React from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
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

      {/* 회원가입 폼 */}
      <div className="w-full max-w-lg mt-12 bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6">회원가입</h1>

        <form className="space-y-6">
          {/* 이메일 주소 */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              이메일 주소<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="예) plyn@plyn.co.kr"
              className="w-full mt-1 border-b border-gray-300 focus:border-black focus:outline-none py-2 placeholder-gray-400"
            />
          </div>

          {/* 비밀번호 */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              비밀번호<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder="영문, 숫자, 특수문자 조합 8-16자"
              className="w-full mt-1 border-b border-gray-300 focus:border-black focus:outline-none py-2 placeholder-gray-400"
            />
          </div>

          {/* 추천인 코드 */}
          <div>
            <label
              htmlFor="referral"
              className="block text-sm font-medium text-gray-700"
            >
              추천인 코드
            </label>
            <input
              type="text"
              id="referral"
              placeholder="추천인 코드를 입력하세요"
              className="w-full mt-1 border-b border-gray-300 focus:border-black focus:outline-none py-2 placeholder-gray-400"
            />
          </div>

          {/* 신발 사이즈 */}
          <div>
            <label
              htmlFor="shoe-size"
              className="block text-sm font-medium text-gray-700"
            >
              신발 사이즈
            </label>
            <select
              id="shoe-size"
              className="w-full mt-1 border-b border-gray-300 focus:border-black focus:outline-none py-2"
            >
              <option value="" disabled selected>
                선택하세요
              </option>
              <option value="240">240</option>
              <option value="250">250</option>
              <option value="260">260</option>
              <option value="270">270</option>
              <option value="280">280</option>
            </select>
          </div>

          {/* 약관 동의 */}
          <div className="space-y-2">
            {/* 모두 동의 */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="agree-all"
                className="w-4 h-4 text-black border-gray-300 rounded focus:ring-0"
              />
              <label
                htmlFor="agree-all"
                className="ml-2 text-sm font-medium text-gray-700"
              >
                모두 동의합니다
              </label>
            </div>

            {/* 개별 약관 */}
            <ul className="pl-6 text-sm text-gray-500 space-y-3">
              <li className="flex items-center">
                <input
                  type="checkbox"
                  id="agree-1"
                  className="w-4 h-4 text-black border-gray-300 rounded focus:ring-0"
                />
                <label htmlFor="agree-1" className="ml-2">
                  [필수] 만 14세 이상입니다.
                </label>
              </li>

              <li className="flex items-center">
                <input
                  type="checkbox"
                  id="agree-2"
                  className="w-4 h-4 text-black border-gray-300 rounded focus:ring-0"
                />
                <label htmlFor="agree-2" className="ml-2">
                  [필수] 이용약관 동의
                </label>
              </li>

              <li className="flex items-center">
                <input
                  type="checkbox"
                  id="agree-3"
                  className="w-4 h-4 text-black border-gray-300 rounded focus:ring-0"
                />
                <label htmlFor="agree-3" className="ml-2">
                  [필수] 개인정보 수집 및 이용 동의
                </label>
              </li>

              <li className="flex items-center">
                <input
                  type="checkbox"
                  id="agree-4"
                  className="w-4 h-4 text-black border-gray-300 rounded focus:ring-0"
                />
                <label htmlFor="agree-4" className="ml-2">
                  [선택] 광고성 정보 수신 동의
                </label>
              </li>
            </ul>
          </div>

          {/* 회원가입 버튼 */}
          <button
            type="submit"
            className="w-full py-3 bg-gray-200 text-gray-500 font-semibold rounded-lg hover:bg-gray-300 transition"
          >
            본인 인증하고 가입하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
