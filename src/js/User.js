export default class User {
  constructor() {
		this.squares = document.querySelectorAll('.string__square');
    this.hit = 0;
    this.miss = 0;
  }

  getHit() {
		Array.from(this.squares).forEach((square) => {
			square.addEventListener('click', () => {
				if () {
					this.hit += 1;
					console.log(this.hit);
				} else {
					this.miss += 1;
					console.log(this.miss);
				}
			});
		});
    
	}
}
