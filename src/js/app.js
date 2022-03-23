import Enemy from './Enemy';
import GameTemplate from './GameTemplate';
import HitAndMiss from './HitAndMiss';
import Scoreboard from './Scoreboard';

const gameTemplate = new GameTemplate(4, 4);
gameTemplate.createGameDesk();

const scorebord = new Scoreboard();
scorebord.showScore();

const hitAndMiss = new HitAndMiss();
hitAndMiss.getHit();

const enemy = new Enemy();
enemy.addEnemy();
enemy.removeEnemy();
