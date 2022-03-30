export default class Scoreboard {
  constructor() {
    this.hitScore = document.querySelector('.hit');
    this.missScore = document.querySelector('.miss');
  }

  showMiss(miss) {
    this.missScore.textContent = ` ${miss}`;
  }

  showHit(hit) {
    this.hitScore.textContent = ` ${hit}`;
  }
}
