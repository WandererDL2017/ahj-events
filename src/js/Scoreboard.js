export default class Scoreboard {
  constructor() {
    this.squares = document.querySelectorAll('.string__square');
    this.goblin = document.querySelector('.square__imgEnemy');
    this.board = document.querySelector('.scoreboard');
    this.hitScore = document.createElement('p');
    this.missScore = document.createElement('p');
    this.hit = 0;
    this.miss = 0;
  }

  deleteGoblin() {
    Array.from(this.squares).forEach((square) => {
      if (square.hasChildNodes()) {
        square.removeChild(square.firstChild);
      }
    });
  }

  showScore() {
    this.hitScore.innerHTML = `Попадение: ${this.hit}`;
    this.missScore.innerHTML = `Промах: ${this.miss}`;
    this.board.appendChild(this.hitScore);
    this.board.appendChild(this.missScore);
  }

  resetScore() {
    if (this.miss === 5) {
      // eslint-disable-next-line no-alert
      alert(`Выпроиграли! Ваш счет: ${this.hit}`);
      this.hit = 0;
      this.miss = 0;
    }
  }
}
