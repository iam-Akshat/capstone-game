import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
  }

  preload() {
    this.load.image('logo', 'assets/gamelogo.gif');
  }

  create() {
    this.scene.start('Preloader');
  }
}