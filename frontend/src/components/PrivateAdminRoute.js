import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerPage from "./pages/customer/CustomerPage";
import LoginPage from "./pages/common/LoginPage";
import SignUpPage from "./pages/common/SignUpPage";
import EmailPage from "./pages/common/EmailPage";
import PwdPage from "./pages/common/PwdPage";
import StylePage from "./pages/customer/StylePage";
import SearchPage from "./pages/customer/SearchPage";
import ShopPage from "./pages/customer/ShopPage";
import AdminPage from "./pages/admin/AdminPage";
import PrivateAdminRoute from "./components/PrivateAdminRoute"; // PrivateAdminRoute 추가

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            {/* 일반 사용자 경로 */}
            <Route path="/*" element={<CustomerPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/find-email" element={<EmailPage />} />
            <Route path="/reset-password" element={<PwdPage />} />
            <Route path="/style" element={<StylePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/shop" element={<ShopPage />} />

            {/* 관리자 경로 - PrivateAdminRoute로 보호 */}
            <Route
              path="/admin/*"
              element={
                <PrivateAdminRoute>
                  <AdminPage />
                </PrivateAdminRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
