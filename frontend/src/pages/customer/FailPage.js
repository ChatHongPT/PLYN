// src/pages/FailPage.jsx
import React from "react";
import { useSearchParams } from "react-router-dom";

const FailPage = () => {
  const [searchParams] = useSearchParams();
  return (
    <div>
      <h1>결제 실패</h1>
      <p>실패 사유: {searchParams.get("message")}</p>
    </div>
  );
};

export default FailPage;
