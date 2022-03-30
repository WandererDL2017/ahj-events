import Enemy from './Enemy';
import GameTemplate from './GameTemplate';
import HitAndMiss from './HitAndMiss';
import Scoreboard from './Scoreboard';

const gameMenu = document.querySelector('.game-menu');
const startBtn = document.querySelector('.btn');
const gameTemplate = new GameTemplate(4, 4);
gameTemplate.createGameDesk();

const scorebord = new Scoreboard();
const enemy = new Enemy();
const hitAndMiss = new HitAndMiss();
scorebord.showHit(0);
scorebord.showMiss(0);
enemy.addEnemy();

function timerGame() {
  hitAndMiss.getMiss();
  if (hitAndMiss.countMiss === 5) {
    window.clearInterval(window.timer);
    hitAndMiss.endGame();
    gameMenu.classList.remove('hidden');
  }
}

function startTimer() {
  window.timer = window.setInterval(timerGame, 1000);
}

function startGame() {
  startBtn.addEventListener('click', () => {
    gameMenu.classList.add('hidden');
    startTimer();
  });
}

startGame();

gameTemplate.gameDesk.addEventListener('click', (event) => {
  if (event.target.classList.contains('square__imgEnemy')) {
    window.clearInterval(window.timer);
    hitAndMiss.getHit();
    event.target.remove();
    startTimer();
  }
});
