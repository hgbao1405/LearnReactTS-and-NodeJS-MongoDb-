import React from "react";
import "./Header.css";
import WEBSITE from "../../config";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div>
      <header className="main-header">
        <h1>{WEBSITE.Name}</h1>
        <nav>
          <ul>
            <li>
              <a href="/home">Trang chủ</a>
            </li>
            <li>
              <a href="#">Bài học</a>
            </li>
            <li>
              <a href="/quiz">Trò chơi</a>
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
