// QuizAPI.ts
import axios, { AxiosResponse } from "axios";
import WEBSITE from "../config";
import { Message } from "../modelView";

const BASE_URL = WEBSITE.LocalBackend; // Thay đổi đường dẫn này với địa chỉ của máy chủ Node.js của bạn

const QuizAPI = {
  getAllQuizs: async () => {
    try {
      const response = await axios.get<Message>(`${BASE_URL}/api/Quizs`, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },

  getQuizById: async (id: string) => {
    try {
      const response = await axios.get<Message>(`${BASE_URL}/api/Quizs/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },

  addQuiz: async (newQuestionData: any) => {
    try {
      const response = await axios.post<Message>(
        `${BASE_URL}/api/Quizs`,
        newQuestionData
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },

  updateQuiz: async (id: string, updatedQuizData: any) => {
    try {
      const response = await axios.put<Message>(
        `${BASE_URL}/api/Quizs/${id}`,
        updatedQuizData
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },

  deleteQuiz: async (id: string) => {
    try {
      const response = await axios.delete<Message>(
        `${BASE_URL}/api/Quizs/${id}`
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },
};

export default QuizAPI;
