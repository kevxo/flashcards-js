class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correct = 0;
  }

  returnCurrentCard() {
    return this.deck[0];
  };

  takeTurn(guess) {
    this.turns++;

    for (var i = 0; i < this.deck.length; i++) {
      if (guess === this.deck[i].correctAnswer){
        this.deck.shift();
        this.correct ++;
        return 'correct!'
      }
    }

    for (var i = 0; i < this.deck.length; i++) {
      if (guess !== this.deck[i].correctAnswer){
        this.incorrectGuesses.push(this.deck[i].id);
        this.deck.shift();
        return 'incorrect!'
      }
    }
  }


  calculatePercentCorrect() {
    return ((this.correct / this.turns) * 100)
  }

  endRound() {
    console.log(`**Round Over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}


module.exports = Round;