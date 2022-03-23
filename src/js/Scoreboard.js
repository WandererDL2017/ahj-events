export default class Scoreboard {
  constructor() {
    this.board = document.querySelector('.scoreboard');
    this.hitScore = document.createElement('p');
    this.missScore = document.createElement('p');
    this.hit = 0;
    this.miss = 0;
  }

  showScore() {
    this.hitScore.innerHTML = `<span>Попадение:</span> 
      <span class='count_hit'>
        ${this.hit}
      </span>`;
    this.missScore.innerHTML = `<span>Промах:</span> 
      <span class='count_miss'>
        ${this.miss}
      </span>`;
    this.board.appendChild(this.hitScore);
    this.board.appendChild(this.missScore);
  }
}
