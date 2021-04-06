import Phaser from 'phaser';
import genRandomNum from '../helpers/randomNum';

export default class WWorldScene extends Phaser.Scene {
  constructor() {
    super({ key: 'WorldScene' });
  }

  create() {
    this.map = this.make.tilemap({
      tileHeight: 16,
      tileWidth: 16,
      width: 80,
      height: 64,
    });

    this.physics.world.bounds.width = this.map.widthInPixels;
    this.physics.world.bounds.height = this.map.heightInPixels;


    const bg = this.map.addTilesetImage('mapSprite');
    const bgLayer = this.map.createBlankLayer('bglayer', bg);
    bgLayer.fill(1);

    const rocksLayer = this.map.createBlankLayer('rocksLayer', bg);
    this.grassMap = this.make.tilemap({
      tileHeight: 17,
      tileWidth: 17.6,
      width: 88,
      height: 17,
    });
    const grass = this.grassMap.addTilesetImage('grassSprite');
    const grassLayer = this.map.createBlankLayer('grassLayer', grass);
    for (let i = 0; i < 64; i += 1) {
      const x = Math.floor(Phaser.Math.RND.between(0, this.physics.world.bounds.width) / 16);
      const y = Math.floor(Phaser.Math.RND.between(0, this.physics.world.bounds.height) / 16);
      // parameters are x, y, width, height
      rocksLayer.fill(17, x, y, 1, 1);
      grassLayer.fill(3, x + genRandomNum(21), y + genRandomNum(28), 1, 1);
      grassLayer.fill(4, x + genRandomNum(21), y + genRandomNum(28), 1, 1);
      grassLayer.fill(1, x + genRandomNum(21), y + genRandomNum(28), 1, 1);
    }
    rocksLayer.setCollisionByExclusion([-1]);
    grassLayer.setCollisionByExclusion([-1]);
  }
}