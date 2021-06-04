class Turn {
  constructor(returnGuess, returnCard){
    this.returnGuess = returnGuess;
    this.returnCard = returnCard
  };

  evaluateGuess() {
    if (this.returnGuess === this.returnCard.correctAnswer){
      return true;
    }

    return false;
  };

  giveFeedback(){
    if (this.evaluateGuess()){
      return 'correct!'
    }

    return 'incorrect!'
  };
};

module.exports = Turn;