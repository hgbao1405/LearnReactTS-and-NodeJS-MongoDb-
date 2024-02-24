import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answers: [
    {
      option: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
  ],
  correctAnswer: {
    type: String,
    required: true,
  },
});

const Quiz = mongoose.model("Quiz", QuizSchema);

export default Quiz;
