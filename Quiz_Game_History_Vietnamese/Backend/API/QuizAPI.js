import express from "express";
import { QuizRepo } from "../Repo/AllRepo.js"; // Thay đổi đường dẫn nếu cần
import { Jmessage } from "../Util/AllUntil.js"; // Thay đổi đường dẫn nếu cần

const router = express.Router();

// Tuyến đường: Lấy tất cả câu hỏi
router.get("/Quizs", async (req, res) => {
  try {
    const Quizs = await QuizRepo.getAllQuizs();
    res.json(Jmessage.success(Quizs, null, "Lấy tất cả câu hỏi thành công"));
  } catch (error) {
    console.error("Lỗi:", error);
    res.json(Jmessage.fail(null, "Lỗi khi lấy câu hỏi"));
  }
});

// Tuyến đường: Lấy một câu hỏi theo ID
router.get("/Quizs/:id", async (req, res) => {
  try {
    const Quiz = await QuizRepo.getQuizById(req.params.id);
    if (Quiz) {
      res.json(Jmessage.success(Quiz, null, "Lấy câu hỏi thành công"));
    } else {
      res.json(Jmessage.fail(null, "Không tìm thấy câu hỏi"));
    }
  } catch (error) {
    console.error("Lỗi:", error);
    res.json(Jmessage.fail(null, "Lỗi khi lấy câu hỏi"));
  }
});

// Tuyến đường: Thêm câu hỏi mới
router.post("/Quizs", async (req, res) => {
  try {
    const newQuestionData = req.body;

    // Kiểm tra xem dữ liệu có đúng định dạng không
    if (!isValidData(newQuestionData)) {
      console.error("Lỗi:", newQuestionData);
      return res.json(Jmessage.fail(null, "Lỗi khi thêm câu hỏi"));
    }

    const newQuiz = await QuizRepo.addQuiz(req.body);
    res.json(Jmessage.success(newQuiz, newQuiz._id, "Thêm câu hỏi thành công"));
  } catch (error) {
    console.error("Lỗi:", error);
    res.json(Jmessage.fail(null, "Lỗi khi thêm câu hỏi"));
  }
});
function isValidData(data) {
  return (
    data &&
    data.question &&
    Array.isArray(data.answers) &&
    data.answers.length > 0 &&
    data.answers.every((answer) => answer.option && answer.text) &&
    data.correctAnswer
  );
}
// Tuyến đường: Cập nhật câu hỏi theo ID
router.put("/Quizs/:id", async (req, res) => {
  try {
    const updatedQuiz = await QuizRepo.updateQuiz(req.params.id, req.body);
    if (updatedQuiz) {
      res.json(
        Jmessage.success(updatedQuiz, null, "Cập nhật câu hỏi thành công")
      );
    } else {
      res.json(Jmessage.fail(null, "Không tìm thấy câu hỏi để cập nhật"));
    }
  } catch (error) {
    console.error("Lỗi:", error);
    res.json(Jmessage.fail(null, "Lỗi khi cập nhật câu hỏi"));
  }
});

// Tuyến đường: Xóa câu hỏi theo ID
router.delete("/Quizs/:id", async (req, res) => {
  try {
    const deletedQuiz = await QuizRepo.deleteQuiz(req.params.id);
    if (deletedQuiz) {
      res.json(Jmessage.success(null, null, "Xóa câu hỏi thành công"));
    } else {
      res.json(Jmessage.fail(null, "Không tìm thấy câu hỏi để xóa"));
    }
  } catch (error) {
    console.error("Lỗi:", error);
    res.json(Jmessage.fail(null, "Lỗi khi xóa câu hỏi"));
  }
});

export default router;
