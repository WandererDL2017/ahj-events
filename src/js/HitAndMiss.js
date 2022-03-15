import Scoreboard from './Scoreboard';

export default class HitAndMiss extends Scoreboard {
  getHit() {
    Array.from(this.squares).forEach((square) => {
      square.addEventListener('click', () => {
        if (square.hasChildNodes()) {
          this.hit += 1;
          super.deleteGoblin();
          super.showScore();
        } else {
          this.miss += 1;
          super.resetScore();
          super.showScore();
        }
      });
    });
  }
}
