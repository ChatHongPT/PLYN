// src/pages/SuccessPage.jsx
import React from "react";
import { useSearchParams } from "react-router-dom";

const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  return (
    <div>
      <h1>결제 성공</h1>
      <p>주문 ID: {searchParams.get("orderId")}</p>
      <p>결제 금액: {Number(searchParams.get("amount")).toLocaleString()}원</p>
    </div>
  );
};

export default SuccessPage;
