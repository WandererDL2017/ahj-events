import Scoreboard from './Scoreboard';

export default class HitAndMiss extends Scoreboard {
  constructor() {
    super();
    this.countHit = 0;
    this.countMiss = 0;
  }

  getMiss() {
    this.countMiss += 1;
    super.showMiss(this.countMiss);
  }

  getHit() {
    this.countHit += 1;
    super.showHit(this.countHit);
  }

  endGame() {
    this.countHit = 0;
    this.countMiss = 0;
    super.showHit(0);
    super.showMiss(0);
  }
}
