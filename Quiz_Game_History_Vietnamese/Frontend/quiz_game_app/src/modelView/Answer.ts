// Answer model
class Answer {
  option: string;
  text: string;
  _id: string;

  constructor(option: string, text: string, _id: string) {
    this.option = option;
    this.text = text;
    this._id = _id;
  }
}

// Question model
class Question {
  _id: string;
  question: string;
  answers: Answer[];
  correctAnswer: string;
  __v: number;

  constructor(
    _id: string,
    question: string,
    answers: Answer[],
    correctAnswer: string,
    __v: number
  ) {
    this._id = _id;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
    this.__v = __v;
  }
}

export { Question, Answer };
