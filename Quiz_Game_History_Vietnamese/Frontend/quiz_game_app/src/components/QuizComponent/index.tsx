import React, { useEffect, useState } from "react";
import { QuizApi } from "../../dataAPI";
import { Answer, Message, Question } from "../../modelView";

const QuizPage: React.FC = () => {
  const [Questions, setQuestion] = useState<Question[]>([]);

  useEffect(() => {
    QuizApi.getAllQuizs().then(function (mes: Message) {
      console.log("Quiz Data:", mes);
      setQuestion(mes.object);
    });
  }, []);

  return (
    <div className="container">
      <h2>Quiz Page</h2>
      {Questions.map((Quiz: Question, index) => (
        <div key={index}>
          <h3>{Quiz.question}</h3>
          {Quiz.answers.map((a: Answer, answerIndex) => (
            <li key={answerIndex}>
              {a.option}. {a.text}
            </li>
          ))}
        </div>
      ))}
    </div>
  );
};

export default QuizPage;
