class TicTacToe {

  // Init current symbol which must play, field and end of the game

  constructor() {
    this.currentSymbol = "x";
    this.field = [[null, null, null], [null, null, null], [null, null, null]];
    this.endGame = 'notEnd';
  }

  // return current symbol

  getCurrentPlayerSymbol() {
    return this.currentSymbol;
  }

  // function which change symbol to opposite state

  changePlayerSymbol() {
    return this.currentSymbol === "x" ? "o" : "x";
  }

  // If Init state empty(null) --> change field state to current symbol

  nextTurn(rowIndex, columnIndex) {
    if (this.field[rowIndex][columnIndex] === null) {
      this.field[rowIndex][columnIndex] = this.currentSymbol;
      this.currentSymbol = this.changePlayerSymbol();
    }
  }

  // check for winner and draw. if true -> change this.endGame value. return true or false

  isFinished() {
    this.getWinner();
    this.isDraw();
    return this.endGame === 'notEnd' ? false : true;
  }

  // function for check our field for winner

  checkWinner(symbol) {
    if (
      this.field[0].every(elem => elem === symbol)
      || this.field[1].every(elem => elem === symbol)
      || this.field[2].every(elem => elem === symbol)
      || (this.field[0][0] === symbol && this.field[1][1] === symbol && this.field[2][2] === symbol)
      || (this.field[0][2] === symbol && this.field[1][1] === symbol && this.field[2][0] === symbol)
      || (this.field[0][0] === symbol && this.field[1][0] === symbol && this.field[2][0] === symbol)
      || (this.field[0][1] === symbol && this.field[1][1] === symbol && this.field[2][1] === symbol)
      || (this.field[0][2] === symbol && this.field[1][2] === symbol && this.field[2][2] === symbol)
    ) {
      return symbol;
    }
  }

  // function which defines winner or if no winner return null

  getWinner() {
    if (this.checkWinner("x") === 'x') {
      this.endGame = 'endGame';
      return "x";
    } else if (this.checkWinner("o") === 'o') {
      this.endGame = 'endGame';
      return "o";
    } else {
      return null;
    }
  }

  // check field for null elements which === no more turns in the game

  noMoreTurns() {
    if (
      this.field[0].includes(null) ||
      this.field[1].includes(null) ||
      this.field[2].includes(null)
    ) {
      return false;
    } else {
      return true;
    }
  }

  // check if no more turns in the game and no winner yet which === draw

  isDraw() {
    if (this.noMoreTurns() && this.getWinner() === null) {
      this.endGame = 'draw';
      return true;
    } else {
      return false;
    }
  }

  // return value of field using row and column index

  getFieldValue(rowIndex, colIndex) {
    return this.field[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
