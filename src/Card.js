class Card {
  constructor(qstCount, question, answers, correctAnswer){
    this.qstCount = qstCount;
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
}

module.exports = Card