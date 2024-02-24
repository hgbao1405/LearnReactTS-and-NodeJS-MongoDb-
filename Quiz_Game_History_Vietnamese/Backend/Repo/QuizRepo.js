import { Quiz } from "../model/AllModels.js";

class QuizRepo {
  async getAllQuizs() {
    return await Quiz.find();
  }

  async getQuizById(id) {
    return await Quiz.findById(id);
  }

  async addQuiz(QuizData) {
    const newQuiz = new Quiz(QuizData);
    return await newQuiz.save();
  }

  async updateQuiz(id, updatedData) {
    return await Quiz.findByIdAndUpdate(id, updatedData, { new: true });
  }

  async deleteQuiz(id) {
    return await Quiz.findByIdAndRemove(id);
  }
}

export default new QuizRepo();
