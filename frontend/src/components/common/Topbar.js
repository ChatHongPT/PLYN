import React from "react";

const TopBar = () => {
  return (
    <div className="bg-gray-100 text-gray-600 text-sm py-2 px-4 flex justify-end items-center space-x-4">
      <a href="/support" className="hover:text-gray-800">
        고객센터
      </a>
      <a href="/mypage" className="hover:text-gray-800">
        마이페이지
      </a>
      <a href="/favorites" className="hover:text-gray-800">
        관심
      </a>
      <a href="/notifications" className="hover:text-gray-800">
        알림
      </a>
      <a href="/login" className="hover:text-gray-800">
        로그인
      </a>
    </div>
  );
};

export default TopBar;
