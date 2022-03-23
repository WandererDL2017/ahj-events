export default class Enemy {
  constructor() {
    this.enemy = document.createElement('div');
    this.squares = document.querySelectorAll('.string__square');
  }

  addEnemy() {
    this.enemy.classList.add('square__imgEnemy');
    const arraySquares = Array.from(this.squares);
    setInterval(() => {
      const numberSquare = Math.floor(Math.random() * arraySquares.length);
      arraySquares[numberSquare].appendChild(this.enemy);
    }, 1000);
  }

  removeEnemy() {
    Array.from(this.squares).forEach((square) => {
      if (square.hasChildNodes()) {
        square.removeChild(square.firstChild);
      }
    });
  }
}
