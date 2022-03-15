import Enemy from './Enemy';
import GameArea from './GameArea';
import HitAndMiss from './HitAndMiss';

const gameArea = new GameArea(4, 4);
gameArea.createColumn();
gameArea.createRow();

const enemy = new Enemy();
enemy.addEnemy();

const hitAndMiss = new HitAndMiss();
hitAndMiss.getHit();
hitAndMiss.showScore();
