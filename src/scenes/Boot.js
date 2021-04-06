import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
    this.map = null;
  }

  preload() {
    this.load.image('mapSprite', 'assets/ForrestTiles.png');
    this.load.image('grassSprite', 'assets/Bushes.png');
  }

  create() {
    this.scene.start('WorldScene');
  }
}