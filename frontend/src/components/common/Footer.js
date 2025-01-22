import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold">이용안내</h3>
            <ul className="mt-4 space-y-2">
              <li>검수기준</li>
              <li>이용정책</li>
              <li>페널티 정책</li>
              <li>커뮤니티 가이드라인</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">고객지원</h3>
            <ul className="mt-4 space-y-2">
              <li>공지사항</li>
              <li>서비스 소개</li>
              <li>스토어 안내</li>
              <li>판매자 방문접수</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          &copy; 2025 PLYN Corp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
