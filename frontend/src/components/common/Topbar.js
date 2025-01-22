import React from "react";
import { Link } from "react-router-dom"; // React Router의 Link 사용

const TopBar = () => {
  return (
    <div className="bg-gray-100 text-gray-600 text-sm py-2 px-4 flex justify-end items-center space-x-4">
      <Link to="/support" className="hover:text-gray-800">
        고객센터
      </Link>
      <Link to="/mypage" className="hover:text-gray-800">
        마이페이지
      </Link>
      <Link to="/favorites" className="hover:text-gray-800">
        관심
      </Link>
      <Link to="/notifications" className="hover:text-gray-800">
        알림
      </Link>
      <Link to="/login" className="hover:text-gray-800">
        로그인
      </Link>
    </div>
  );
};

export default TopBar;
