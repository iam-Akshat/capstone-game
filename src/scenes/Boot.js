import Phaser from 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'BootScene' });
    this.map = null;
  }

  preload() {
    this.load.image('mapSprite', 'assets/ForrestTiles.png');
    this.load.image('grassSprite', 'assets/Bushes.png');
    this.load.setPath('assets/hero');
    this.load.spritesheet('hero-idle-front', 'idle/hero-idle-front.png', { frameHeight: 32, frameWidth: 32 });
    this.load.spritesheet('hero-idle-back', 'idle/hero-idle-back.png', { frameHeight: 32, frameWidth: 32 });
    this.load.spritesheet('hero-idle-side', 'idle/hero-idle-side.png', { frameHeight: 32, frameWidth: 32 });
    this.load.spritesheet('hero-walk-front', 'walk/hero-walk-front.png', { frameHeight: 32, frameWidth: 32 });
    this.load.spritesheet('hero-walk-back', 'walk/hero-walk-back.png', { frameHeight: 32, frameWidth: 32 });
    this.load.spritesheet('hero-walk-side', 'walk/hero-walk-side.png', { frameHeight: 32, frameWidth: 32 });
  }

  create() {
    this.scene.start('WorldScene');
  }
}