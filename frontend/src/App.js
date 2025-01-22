import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import EmailPage from "./pages/EmailPage";
import PwdPage from "./pages/PwdPage";
import StylePage from "./pages/StylePage"

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/find-email" element={<EmailPage />} />
            <Route path="/reset-password" element={<PwdPage />} />
            <Route path="/style" element={<StylePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
