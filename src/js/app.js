import Enemy from './Enemy';
import GameArea from './GameArea';
import User from './User';

const gameArea = new GameArea(4, 4);
gameArea.createColumn();
gameArea.createRow();
const enemy = new Enemy();
enemy.addEnemy();
const user = new User();
user.getHit();
