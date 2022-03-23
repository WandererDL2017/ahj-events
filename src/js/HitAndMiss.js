export default class HitAndMiss {
  constructor() {
    this.gamedesk = document.querySelector('.gamedesk');
    this.hit = document.querySelector('.count_hit');
    this.miss = document.querySelector('.count_miss');
  }

  getHit() {
    let countHit = 0;
    let countMiss = 0;
    let interval = setInterval(() => {
      countMiss += 1;
      this.miss.innerHTML = countMiss;
    }, 1500);

    this.gamedesk.addEventListener('click', (e) => {
      if (e.target.className === 'square__imgEnemy') {
        clearInterval(interval);
        countHit += 1;
        this.hit.innerHTML = countHit;
        e.target.remove();
        interval = setInterval(() => {
          countMiss += 1;
          this.miss.innerHTML = countMiss;
          if (this.miss.innerHTML === '5') {
            countHit = 0;
            countMiss = 0;
            this.miss.innerHTML = 0;
            this.hit.innerHTML = 0;
          }
        }, 1000);
      }
    });
  }
}
