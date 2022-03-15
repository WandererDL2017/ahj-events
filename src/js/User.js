import Scoreboard from './Scoreboard';

export default class User extends Scoreboard{
  constructor() {
    super();
  }

  getHit() {
		Array.from(this.squares).forEach((square) => {
			square.addEventListener('click', () => {
				if (square.hasChildNodes()) {
					this.hit += 1;
					console.log(this.hit + 'true');
				} else {
					this.miss += 1;
					console.log(this.miss + 'false');
				}
			});
		});
	}
}
