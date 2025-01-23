import React from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../../components/common/Topbar";
import Header from "../../components/common/header";
import Footer from "../../components/common/Footer";
import NavigationBar from "../../components/common/NavigationBar";

const ResetPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar and Header */}
      <TopBar />
      <Header />

      {/* Main Content */}
      <div className="flex flex-col items-center flex-grow bg-gray-50">
        {/* Back Button */}
        <div className="absolute top-4 left-4">
          <button
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-gray-800 flex items-center"
          >
            <i className="fas fa-arrow-left mr-2"></i> 뒤로 가기
          </button>
        </div>

        {/* Reset Password Form */}
        <div className="w-full max-w-lg mt-12 bg-white p-8 rounded-lg shadow">
          <h1 className="text-xl font-bold mb-4">비밀번호 찾기</h1>
          <p className="text-sm text-gray-600 mb-6">
            본인 인증 완료 후, 휴대폰으로 임시 비밀번호를 발송해 드립니다. <br />
            비밀번호를 확인할 이메일 주소를 입력해주세요.
          </p>

          <form className="space-y-4">
            {/* Email Input */}
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
                placeholder="kream@kream.co.kr"
                className="w-full mt-1 border-b border-gray-300 focus:border-black focus:outline-none py-2 placeholder-gray-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-gray-200 text-gray-500 font-semibold rounded-lg hover:bg-gray-300 transition"
            >
              임시 비밀번호 발송하기
            </button>
          </form>
        </div>
      </div>

      {/* Footer and Navigation */}
      <Footer />
      <NavigationBar className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg" />
    </div>
  );
};

export default ResetPassword;
