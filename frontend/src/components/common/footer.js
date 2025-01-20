import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Info Section */}
            <div className="container mx-auto py-10 px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Bank Account Info */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">무통장입금계좌</h2>
                    <p>BANK ACCOUNT</p>
                    <p className="text-gray-300">301-1234-5678-01</p>
                    <p>예금주 - 김혜라</p>
                </div>

                {/* Customer Service */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">고객센터</h2>
                    <p className="text-gray-300 mb-2">
                        영업시간 이외에는 문의 게시판을 이용해주시면 당담자 확인 후 빠른 답변 도와드리겠습니다.
                    </p>
                    <p>02-1263-1245</p>
                </div>

                {/* Notices */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">공지사항</h2>
                    <ul className="space-y-2">
                        <li>조명가이드 2022-06-20</li>
                        <li>신상품 입고 안내 2022-06-10</li>
                        <li>몰 오픈을 축하드립니다. 2022-02-20</li>
                    </ul>
                </div>
            </div>

            {/* Footer Menu */}
            <div className="bg-gray-800 py-4">
                <div className="container mx-auto px-4 text-center">
                    <ul className="flex justify-center space-x-6 text-gray-400">
                        <li className="hover:text-white transition">홈</li>
                        <li className="hover:text-white transition">매장안내</li>
                        <li className="hover:text-white transition">이용약관</li>
                        <li className="hover:text-white transition">개인정보처리방침</li>
                    </ul>
                </div>
            </div>

            {/* Address Section */}
            <div className="bg-gray-700 py-6">
                <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
                    상호: 주소: 울산광역시 남구 어딘가 대표전화: 국번없이 123-456-7891 대표이사: 김OO 개인정보관리자: 이OO 사업자 등록번호: 102-12-12345
                    <br />
                    © 2025 Greck Lamp, LTD. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
