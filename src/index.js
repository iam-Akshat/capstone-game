import Phaser from 'phaser';
import BootScene from './scenes/Boot';
import WorldScene from './scenes/World';

const gameConfig = {
  type: Phaser.AUTO,
  parent: 'content',
  width: 640,
  height: 640,
  zoom: 1,
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
  ],
};

new Phaser.Game(gameConfig);