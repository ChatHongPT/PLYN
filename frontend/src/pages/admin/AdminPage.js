// src/pages/admin/AdminPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    <div>
      <h1>관리자 대시보드</h1>
      <ul>
        <li><Link to="/admin/products">상품 관리</Link></li>
        <li><Link to="/admin/orders">주문 관리</Link></li>
        <li><Link to="/admin/users">고객 관리</Link></li>
      </ul>
    </div>
  );
};

export default AdminPage;
