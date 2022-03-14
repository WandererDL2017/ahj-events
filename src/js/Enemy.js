import GameArea from './GameArea';

export default class Enemy extends GameArea {
  constructor() {
    super();
    this.enemy = document.createElement('div');
    this.allRows = document.querySelectorAll('.string__square');
    this.arrayRows = [];
    this.numberRow = 0;
  }

  addEnemy() {
    this.enemy.classList.add('square__imgEnemy');
    this.arrayRows = Array.from(this.allRows);
    setInterval(() => {
      this.numberRow = Math.floor(Math.random() * this.arrayRows.length);
      this.arrayRows[this.numberRow].appendChild(this.enemy);
    }, 1000);
  }
}
