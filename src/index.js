import Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import WorldScene from './scenes/WorldScene';
import PreloaderScene from './scenes/PreloaderScene';
import TitleScene from './scenes/TitleScene';
import CreditsScene from './scenes/CreditsScene';
import EndGameScene from './scenes/EndgameScene';

const gameConfig = {
  type: Phaser.AUTO,
  parent: 'content',
  width: 640,
  height: 640,
  zoom: 1,
  dom: {
    createContainer: true,
  },
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
    },
  },
  scene: [
    BootScene,
    WorldScene,
    PreloaderScene,
    TitleScene,
    CreditsScene,
    EndGameScene,
  ],
};

// eslint-disable-next-line no-new
new Phaser.Game(gameConfig);