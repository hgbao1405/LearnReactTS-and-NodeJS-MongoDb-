import React from "react";
import "./Header.css";
import WEBSITE from "../../config";

import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div>
      <header className="admin-header">
        <h1>{WEBSITE.Admin}</h1>
        <nav>
          <ul>
            <li>
              <a href="/default">Trang chủ</a>
            </li>
            <li>
              <a href="#">Bài học</a>
            </li>
            <li>
              <a href="quizs">Trò chơi</a>
            </li>
            <li>
              <a href="#">Liên hệ</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="main-footer">
        <p>&copy; 2024 {WEBSITE.Name}. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
