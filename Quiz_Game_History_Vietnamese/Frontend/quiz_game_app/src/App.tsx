// App.js
import React from "react";
import "./App.css";
import { QuizPage, Admin } from "./components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/" element={<Layout.MainLayout />}>
          <Route path="home" element={<h1>Trang chủ</h1>} />
          <Route path="quiz" element={<QuizPage />} />
        </Route>
        <Route path="admin" element={<Layout.AdminLayout />}>
          <Route path="" element={<Admin.Home />} />
          <Route path="quizs" element={<Admin.ManageQuizs.QuizsManage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
